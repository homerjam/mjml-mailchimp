import MjText from 'mjml-text'
import { registerDependencies } from 'mjml-validator'

registerDependencies({
  'mj-column': ['mc-text'],
  'mj-hero': ['mc-text'],
  'mc-text': [],
});

export default class McText extends MjText {
  static allowedAttributes = {
    ...MjText.allowedAttributes,
    'mc:edit': 'string',
    'mc:hideable': 'string',
  }

  static defaultAttributes = {
    ...MjText.defaultAttributes,
    'mc:hideable': false
  }

  isHideable() {
    if (this.getAttribute('mc:hideable') !== false) {
      return true
    }

    return false
  }

  renderContent(compound = false) {
    let attrs = {
      'style': 'text',
      'mc:edit': this.getAttribute('mc:edit'),
    }

    if (compound === false && this.isHideable()) {
      attrs['mc:hideable'] = true
    }
    return `
      <div
        ${this.htmlAttributes(attrs)}
      >
        ${this.getContent()}
      </div>
    `
  }

  renderContent() {
    return `
      <div
        ${this.htmlAttributes({
          style: 'text',
          'mc:edit': this.getAttribute('mc:edit'),
          'mc:hideable': this.getAttribute('mc:hideable') ? 'mc:hideable' : null,
        })}
      >
        ${this.getContent()}
      </div>
    `
  }
}
