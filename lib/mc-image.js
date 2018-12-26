'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp;

var _min = require('lodash/min');

var _min2 = _interopRequireDefault(_min);

var _mjmlCore = require('mjml-core');

var _widthParser2 = require('mjml-core/lib/helpers/widthParser');

var _widthParser3 = _interopRequireDefault(_widthParser2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var McImage = (_temp = _class = function (_BodyComponent) {
  (0, _inherits3.default)(McImage, _BodyComponent);

  function McImage() {
    (0, _classCallCheck3.default)(this, McImage);
    return (0, _possibleConstructorReturn3.default)(this, (McImage.__proto__ || (0, _getPrototypeOf2.default)(McImage)).apply(this, arguments));
  }

  (0, _createClass3.default)(McImage, [{
    key: 'getStyles',
    value: function getStyles() {
      var width = this.getContentWidth();
      var fullWidth = this.getAttribute('full-width') === 'full-width';

      var _widthParser = (0, _widthParser3.default)(width),
          parsedWidth = _widthParser.parsedWidth,
          unit = _widthParser.unit;

      return {
        img: {
          'border': this.getAttribute('border'),
          'border-radius': this.getAttribute('border-radius'),
          'display': 'block',
          'outline': 'none',
          'text-decoration': 'none',
          'min-width': fullWidth ? '100%' : null,
          'width': fullWidth ? '' + parsedWidth + unit : '100%',
          'max-width': fullWidth ? '100%' : null
        },
        td: {
          width: fullWidth ? null : '' + parsedWidth + unit
        },
        table: {
          'min-width': fullWidth ? '100%' : null,
          'max-width': fullWidth ? '100%' : null,
          'width': fullWidth ? '' + parsedWidth + unit : null,
          'border-collapse': 'collapse',
          'border-spacing': '0px'
        }
      };
    }
  }, {
    key: 'getContentWidth',
    value: function getContentWidth() {
      var containerWidth = this.context.containerWidth;


      var width = this.getAttribute('width') ? (0, _min2.default)([parseInt(this.getAttribute('width'), 10), parseInt(containerWidth, 10)]) : parseInt(containerWidth, 10);

      var paddingRight = this.getShorthandAttrValue('padding', 'right');
      var paddingLeft = this.getShorthandAttrValue('padding', 'left');

      var widthOverflow = paddingLeft + paddingRight + parseFloat(width) - parseInt(containerWidth, 10);

      return widthOverflow > 0 ? parseFloat(width - widthOverflow) : parseFloat(width);
    }
  }, {
    key: 'renderImage',
    value: function renderImage() {
      var img = '\n      <img\n        ' + this.htmlAttributes({
        alt: this.getAttribute('alt'),
        height: this.getAttribute('height'),
        src: this.getAttribute('src'),
        srcset: this.getAttribute('srcset'),
        style: 'img',
        title: this.getAttribute('title'),
        width: this.getContentWidth(),
        'mc:edit': this.getAttribute('mc:edit')
      }) + '\n      />\n    ';

      if (this.getAttribute('href')) {
        return '\n        <a\n          ' + this.htmlAttributes({
          'href': this.getAttribute('href'),
          'target': this.getAttribute('target')
        }) + '\n        >\n          ' + img + '\n        </a>\n      ';
      }

      return img;
    }
  }, {
    key: 'render',
    value: function render() {
      var attrs = {
        align: this.getAttribute('align'),
        'border': '0',
        'cellpadding': '0',
        'cellspacing': '0',
        'role': 'presentation',
        'style': 'table'
      };

      if (this.getAttribute('mc:hideable') === true) {
        attrs['mc:hideable'] = this.getAttribute('mc:hideable');
      }

      return '\n      <table\n        ' + this.htmlAttributes(attrs) + '\n      >\n        <tbody>\n          <tr>\n            <td ' + this.htmlAttributes({ 'style': 'td' }) + '>\n              ' + this.renderImage() + '\n            </td>\n          </tr>\n        </tbody>\n      </table>\n    ';
    }
  }]);
  return McImage;
}(_mjmlCore.BodyComponent), _class.tagOmission = true, _class.allowedAttributes = {
  'mc:edit': 'string',
  'mc:hideable': 'boolean',
  'alt': 'string',
  'href': 'string',
  'src': 'string',
  'srcset': 'string',
  'title': 'string',
  'align': 'enum(left,center,right)',
  'border': 'string',
  'border-bottom': 'string',
  'border-left': 'string',
  'border-right': 'string',
  'border-top': 'string',
  'border-radius': 'unit(px,%)',
  'container-background-color': 'string',
  'padding': 'unit(px,%){1,4}',
  'padding-bottom': 'unit(px,%)',
  'padding-left': 'unit(px,%)',
  'padding-right': 'unit(px,%)',
  'padding-top': 'unit(px,%)',
  'height': 'unit(px,%)',
  'width': 'unit(px,%)'
}, _class.defaultAttributes = {
  'align': 'center',
  'border': '0',
  'height': 'auto',
  'padding': '10px 25px',
  'target': '_blank',
  'mc:hideable': false
}, _temp);
exports.default = McImage;
module.exports = exports['default'];