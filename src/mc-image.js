import MjImage from 'mjml-image'
import { registerDependencies } from 'mjml-validator'

registerDependencies({
  'mj-column': ['mc-image'],
  'mj-hero': ['mc-image'],
  'mc-image': [],
});

export default class McImage extends MjImage {
  static tagOmission = true

  static allowedAttributes = {
    ...MjImage.allowedAttributes,
    'mc:edit': 'string',
    'mc:hideable': 'string',
  }

  static defaultAttributes = {
    ...MjImage.defaultAttributes,
    'mc:hideable': false,
  }

  // MODIFIED form https://github.com/mjmlio/mjml/blob/master/packages/mjml-image/src/index.js
  renderImage() {
    const height = this.getAttribute('height')

    const img = `
      <img
        ${this.htmlAttributes({
          alt: this.getAttribute('alt'),
          height: height && (height === 'auto' ? height : parseInt(height, 10)),
          src: this.getAttribute('src'),
          srcset: this.getAttribute('srcset'),
          style: 'img',
          title: this.getAttribute('title'),
          width: this.getContentWidth(),
          'mc:edit': this.getAttribute('mc:edit'),
        })}
      />
    `

    if (this.getAttribute('href')) {
      return `
        <a
          ${this.htmlAttributes({
            href: this.getAttribute('href'),
            target: this.getAttribute('target'),
            rel: this.getAttribute('rel'),
            name: this.getAttribute('name'),
          })}
        >
          ${img}
        </a>
      `
    }

    return img
  }

  // MODIFIED form https://github.com/mjmlio/mjml/blob/master/packages/mjml-image/src/index.js
  render() {
    return `
      <table
        ${this.htmlAttributes({
          border: '0',
          cellpadding: '0',
          cellspacing: '0',
          role: 'presentation',
          style: 'table',
          class:
            this.getAttribute('fluid-on-mobile')
              ? 'full-width-mobile'
              : null,
          'mc:hideable': this.getAttribute('mc:hideable') ? 'mc:hideable' : null,
        })}
      >
        <tbody>
          <tr>
            <td ${this.htmlAttributes({
              style: 'td',
              class:
                this.getAttribute('fluid-on-mobile')
                  ? 'full-width-mobile'
                  : null,
            })}>
              ${this.renderImage()}
            </td>
          </tr>
        </tbody>
      </table>
    `
  }
}
