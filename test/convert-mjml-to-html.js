const fs = require('fs');
const path = require('path');
const mjml2html = require('mjml');
const { registerComponent } = require('mjml-core');
// const { registerDependencies } = require('mjml-validator');
const { McSection, McImage, McButton, McText } = require('../');

registerComponent(McSection);
registerComponent(McImage);
registerComponent(McButton);
registerComponent(McText);

// registerDependencies({
//   'mc-section': ['mj-column', 'mj-group', 'mj-raw'],
//   'mj-column': ['mc-image'],
//   'mj-hero': ['mc-image'],
// });

const template = fs.readFileSync(path.join(__dirname, 'test.mjml')).toString();

console.log(template);

console.log(mjml2html(template));
