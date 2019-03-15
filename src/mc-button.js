import MjButton from 'mjml-button'
import { BodyComponent } from 'mjml-core'
import { registerDependencies } from 'mjml-validator'

registerDependencies({
  'mj-column': ['mc-button'],
  'mj-hero': ['mc-button'],
  'mc-button': [],
});

export default class McButton extends MjButton {
  static endingTag = true

  static allowedAttributes = {
    ...MjButton.allowedAttributes,
    'mc:edit': 'string',
    'mc:hideable': 'string',
  }

  static defaultAttributes = {
    ...MjButton.defaultAttributes,
    'mc:hideable': false
  }

  isHideable() {
    if (this.getAttribute('mc:hideable') !== false) {
      return true
    }

    return false
  }

  // MODIFIED from https://github.com/mjmlio/mjml/blob/master/packages/mjml-button/src/index.js
  render() {
    const tag = this.getAttribute('href') ? 'a' : 'p'

    return `
      <table
        ${this.htmlAttributes({
          border: '0',
          cellpadding: '0',
          cellspacing: '0',
          role: 'presentation',
          style: 'table',
          'mc:hideable': this.getAttribute('mc:hideable') ? 'mc:hideable' : null,
        })}
      >
        <tr>
          <td
            ${this.htmlAttributes({
              align: 'center',
              bgcolor:
                this.getAttribute('background-color') === 'none'
                  ? undefined
                  : this.getAttribute('background-color'),
              role: 'presentation',
              style: 'td',
              valign: this.getAttribute('vertical-align'),
              'mc:edit': this.getAttribute('mc:edit')
            })}
          >
            <${tag}
              ${this.htmlAttributes({
                href: this.getAttribute('href'),
                rel: this.getAttribute('rel'),
                name: this.getAttribute('name'),
                style: 'content',
                target: tag === 'a' ? this.getAttribute('target') : undefined,
              })}
            >
              ${this.getContent()}
            </${tag}>
          </td>
        </tr>
      </table>
    `
  }
}
