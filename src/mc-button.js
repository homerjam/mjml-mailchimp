import widthParser from 'mjml-core/lib/helpers/widthParser';

import MjButton from 'mjml-button';
import { registerDependencies } from 'mjml-validator';

registerDependencies({
  'mj-column': ['mc-button'],
  'mj-hero': ['mc-button'],
  'mc-button': [],
});

export default class McButton extends MjButton {
  static componentName = 'mc-button';

  static endingTag = true;

  static allowedAttributes = {
    ...MjButton.allowedAttributes,
    'mc:edit': 'string',
    'mc:hideable': 'string',
  };

  static defaultAttributes = {
    ...MjButton.defaultAttributes,
    'mc:hideable': false,
  };

  getStyles() {
    return {
      table: {
        'border-collapse': 'separate',
        width: this.getAttribute('width'),
        'line-height': '100%',
      },
      td: {
        border: this.getAttribute('border'),
        'border-bottom': this.getAttribute('border-bottom'),
        'border-left': this.getAttribute('border-left'),
        'border-radius': this.getAttribute('border-radius'),
        'border-right': this.getAttribute('border-right'),
        'border-top': this.getAttribute('border-top'),
        cursor: 'auto',
        'font-style': this.getAttribute('font-style'),
        height: this.getAttribute('height'),
        'mso-padding-alt': this.getAttribute('inner-padding'),
        'text-align': this.getAttribute('text-align'),
        background: this.getAttribute('background-color'),
      },
      content: {
        display: 'inline-block',
        width: this.calculateAWidth(this.getAttribute('width')),
        background: this.getAttribute('background-color'),
        color: this.getAttribute('color'),
        'font-family': this.getAttribute('font-family'),
        'font-size': this.getAttribute('font-size'),
        'font-style': this.getAttribute('font-style'),
        'font-weight': this.getAttribute('font-weight'),
        'line-height': this.getAttribute('line-height'),
        'letter-spacing': this.getAttribute('letter-spacing'),
        margin: '0',
        'text-decoration': this.getAttribute('text-decoration'),
        'text-transform': this.getAttribute('text-transform'),
        padding: this.getAttribute('inner-padding'),
        'mso-padding-alt': '0px',
        'border-radius': this.getAttribute('border-radius'),
      },
    };
  }

  calculateAWidth(width) {
    if (!width) return null;

    const { parsedWidth, unit } = widthParser(width);

    // impossible to handle percents because it depends on padding and text width
    if (unit !== 'px') return null;

    const { borders } = this.getBoxWidths();

    const innerPaddings =
      this.getShorthandAttrValue('inner-padding', 'left') +
      this.getShorthandAttrValue('inner-padding', 'right');

    return `${parsedWidth - innerPaddings - borders}px`;
  }

  render() {
    const tag = this.getAttribute('href') ? 'a' : 'p';

    return `
      <table
        ${this.htmlAttributes({
          border: '0',
          cellpadding: '0',
          cellspacing: '0',
          role: 'presentation',
          style: 'table',
          'mc:hideable': this.getAttribute('mc:hideable')
            ? 'mc:hideable'
            : null,
        })}
      >
        <tbody>
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
                'mc:edit': this.getAttribute('mc:edit'),
              })}
            >
              <${tag}
                ${this.htmlAttributes({
                  href: this.getAttribute('href'),
                  name: this.getAttribute('name'),
                  rel: this.getAttribute('rel'),
                  title: this.getAttribute('title'),
                  style: 'content',
                  target: tag === 'a' ? this.getAttribute('target') : undefined,
                })}
              >
                ${this.getContent()}
              </${tag}>
            </td>
          </tr>
        </tbody>
      </table>
    `;
  }
}
