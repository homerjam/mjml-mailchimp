import { flow, identity, join, filter } from 'lodash/fp'

import MjSection from 'mjml-section'
import { registerDependencies } from 'mjml-validator'

registerDependencies({
  'mj-body': ['mc-section'],
  'mj-wrapper': ['mc-section'],
  'mc-section': ['mj-column', 'mj-group', 'mj-raw'],
});

const makeBackgroundString = flow(filter(identity), join(' '))
export default class McSection extends MjSection {
  static allowedAttributes = {
    ...MjSection.allowedAttributes,
    'mc:hideable': 'string',
    'mc:repeatable': 'string',
    'mc:variant': 'string',
    'mc:edit': 'string',
  }

  static defaultAttributes = {
    ...MjSection.defaultAttributes,
    'mc:hideable': false,
  }


  isHideable() {
    if (this.getAttribute('mc:hideable') !== false) {
      return true
    }

    return false
  }

  // MODIFIED from https://github.com/mjmlio/mjml/blob/master/packages/mjml-section/src/index.js
  renderSection() {
    const hasBackground = this.hasBackground()

    return `
      <div ${this.htmlAttributes({
        class: this.isFullWidth() ? null : this.getAttribute('css-class'),
        style: 'div',
        'mc:repeatable': this.getAttribute('mc:repeatable'),
        'mc:variant': this.getAttribute('mc:variant'),
        'mc:edit': this.getAttribute('mc:edit'),
        'mc:hideable': this.getAttribute('mc:hideable') ? 'mc:hideable' : null,
      })}>
        ${hasBackground
          ? `<div ${this.htmlAttributes({ style: 'innerDiv' })}>`
          : ''}
        <table
          ${this.htmlAttributes({
            align: 'center',
            background: this.isFullWidth()
              ? null
              : this.getAttribute('background-url'),
            border: '0',
            cellpadding: '0',
            cellspacing: '0',
            role: 'presentation',
            style: 'table',
          })}
        >
          <tbody>
            <tr>
              <td
                ${this.htmlAttributes({
                  style: 'td',
                })}
              >
                <!--[if mso | IE]>
                  <table role="presentation" border="0" cellpadding="0" cellspacing="0">
                <![endif]-->
                  ${this.renderWrappedChildren()}
                <!--[if mso | IE]>
                  </table>
                <![endif]-->
              </td>
            </tr>
          </tbody>
        </table>
        ${hasBackground ? '</div>' : ''}
      </div>
    `
  }
}
