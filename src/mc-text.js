import { BodyComponent } from 'mjml-core'

import conditionalTag from 'mjml-core/lib/helpers/conditionalTag'

export default class McText extends BodyComponent {
  static endingTag = true

  static allowedAttributes = {
    'mc:edit': 'string',
    'mc:hideable': 'boolean',
    align: 'enum(left,right,center)',
    'background-color': 'color',
    color: 'color',
    'container-background-color': 'color',
    'font-family': 'string',
    'font-size': 'unit(px,%)',
    'font-style': 'string',
    'font-weight': 'string',
    height: 'unit(px,%)',
    'letter-spacing': 'unit(px,%)',
    'line-height': 'unit(px,%)',
    'padding-bottom': 'unit(px,%)',
    'padding-left': 'unit(px,%)',
    'padding-right': 'unit(px,%)',
    'padding-top': 'unit(px,%)',
    padding: 'unit(px,%){1,4}',
    'text-decoration': 'string',
    'text-transform': 'string',
    'vertical-align': 'string',
  }

  static defaultAttributes = {
    align: 'left',
    color: '#000000',
    'font-family': 'Ubuntu, Helvetica, Arial, sans-serif',
    'font-size': '13px',
    'line-height': '1',
    padding: '10px 25px',
    'mc:hideable': false,
  }

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
    }
  }

  renderContent() {
    let attrs = {
      'style': 'text',
      'mc:edit': this.getAttribute('mc:edit'),
    }

    if (this.getAttribute('mc:hideable') === true) {
      attrs['mc:hideable'] = this.getAttribute('mc:hideable')
    }
    return `
      <div
        ${this.htmlAttributes(attrs)}
      >
        ${this.getContent()}
      </div>
    `
  }

  render() {
    const height = this.getAttribute('height')
    let attrs = {
      role: 'presentation',
      border: 0,
      cellpadding: 0,
      cellspacing: 0,
      'mc:hideable': this.getAttribute('mc:hideable'),
    }
    if (this.getAttribute('mc:hideable') === true) {
      attrs['mc:hideable'] = this.getAttribute('mc:hideable')
    }

    return height
      ? `
        ${conditionalTag(`
          <table
            ${this.htmlAttributes(attrs)}><tr><td height="${height}" style="vertical-align:top;height:${height};">
        `)}
        ${this.renderContent()}
        ${conditionalTag(`
          </td></tr></table>
        `)}
      `
      : this.renderContent()
  }
}
