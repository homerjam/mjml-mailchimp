# MJML Mailchimp

Mailchimp compatible MJML components.

## Usage

```js
const mjml2html = require('mjml');
const { registerComponent } = require('mjml-core');
const { registerDependencies } = require('mjml-validator');
const { McSection, McImage } = require('mjml-mailchimp');

registerComponent(McSection);
registerComponent(McImage);
registerDependencies({
  'mc-section': ['mj-column', 'mj-group', 'mj-raw'],
  'mj-column': ['mc-image'],
  'mj-hero': ['mc-image'],
});

const template = `
<mjml>
  ...
  <mc-section mc:repeatable="sections" mc:variant="Large Image">
    <mj-column>
      <mc-image mc:edit="Image 01" src="http://placehold.it/600x400">
    </mj-column>
  </mc-section>
  ...
</mjml>
`;

console.log(mjml2html(template));
```
