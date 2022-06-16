import conditionalTag from 'mjml-core/lib/helpers/conditionalTag';
import MjText from 'mjml-text';
import { registerDependencies } from 'mjml-validator';

registerDependencies({
  'mj-column': ['mc-text'],
  'mj-hero': ['mc-text'],
  'mc-text': [],
});

export default class McText extends MjText {
  static componentName = 'mc-text';

  static endingTag = true;

  static allowedAttributes = {
    ...MjText.allowedAttributes,
    'mc:edit': 'string',
    'mc:hideable': 'string',
  };

  static defaultAttributes = {
    ...MjText.defaultAttributes,
    'mc:hideable': false,
  };

  getStyles() {
    return {
      text: {
        'font-family': this.getAttribute('font-family'),
        'font-size': this.getAttribute('font-size'),
        'font-style': this.getAttribute('font-style'),
        'font-weight': this.getAttribute('font-weight'),
        'letter-spacing': this.getAttribute('letter-spacing'),
        'line-height': this.getAttribute('line-height'),
        'text-align': this.getAttribute('align'),
        'text-decoration': this.getAttribute('text-decoration'),
        'text-transform': this.getAttribute('text-transform'),
        color: this.getAttribute('color'),
        height: this.getAttribute('height'),
      },
    };
  }

  renderContent() {
    return `
      <div
        ${this.htmlAttributes({
          style: 'text',
          'mc:edit': this.getAttribute('mc:edit'),
          'mc:hideable': this.getAttribute('mc:hideable')
            ? 'mc:hideable'
            : null,
        })}
      >${this.getContent()}</div>
    `;
  }

  render() {
    const height = this.getAttribute('height');

    return height
      ? `
        ${conditionalTag(`
          <table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td height="${height}" style="vertical-align:top;height:${height};">
        `)}
        ${this.renderContent()}
        ${conditionalTag(`
          </td></tr></table>
        `)}
      `
      : this.renderContent();
  }
}
