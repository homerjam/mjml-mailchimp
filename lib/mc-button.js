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

var _mjmlCore = require('mjml-core');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var McButton = (_temp = _class = function (_BodyComponent) {
  (0, _inherits3.default)(McButton, _BodyComponent);

  function McButton() {
    (0, _classCallCheck3.default)(this, McButton);
    return (0, _possibleConstructorReturn3.default)(this, (McButton.__proto__ || (0, _getPrototypeOf2.default)(McButton)).apply(this, arguments));
  }

  (0, _createClass3.default)(McButton, [{
    key: 'getStyles',
    value: function getStyles() {
      return {
        table: {
          'border-collapse': 'separate',
          width: this.getAttribute('width'),
          'line-height': '100%'
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
          padding: this.getAttribute('inner-padding')
        },
        content: {
          background: this.getAttribute('background-color'),
          color: this.getAttribute('color'),
          'font-family': this.getAttribute('font-family'),
          'font-size': this.getAttribute('font-size'),
          'font-style': this.getAttribute('font-style'),
          'font-weight': this.getAttribute('font-weight'),
          'line-height': this.getAttribute('line-height'),
          Margin: '0',
          'text-decoration': this.getAttribute('text-decoration'),
          'text-transform': this.getAttribute('text-transform')
        }
      };
    }
  }, {
    key: 'render',
    value: function render() {
      var tag = this.getAttribute('href') ? 'a' : 'p';

      return '\n      <table\n        ' + this.htmlAttributes({
        align: this.getAttribute('align'),
        border: '0',
        cellpadding: '0',
        cellspacing: '0',
        role: 'presentation',
        style: 'table'
      }) + '\n      >\n        <tr>\n          <td\n            ' + this.htmlAttributes({
        align: 'center',
        bgcolor: this.getAttribute('background-color') === 'none' ? undefined : this.getAttribute('background-color'),
        role: 'presentation',
        style: 'td',
        valign: this.getAttribute('vertical-align')
      }) + '\n          >\n            <' + tag + '\n              ' + this.htmlAttributes({
        href: this.getAttribute('href'),
        rel: this.getAttribute('rel'),
        style: 'content',
        target: tag === 'a' ? this.getAttribute('target') : undefined,
        'mc:edit': this.getAttribute('mc:edit')
      }) + '\n            >\n              ' + this.getContent() + '\n            </' + tag + '>\n          </td>\n        </tr>\n      </table>\n    ';
    }
  }]);
  return McButton;
}(_mjmlCore.BodyComponent), _class.endingTag = true, _class.allowedAttributes = {
  'mc:edit': 'string',
  'mc:hideable': 'boolean',
  align: 'enum(left,center,right)',
  'background-color': 'color',
  'border-bottom': 'string',
  'border-left': 'string',
  'border-radius': 'string',
  'border-right': 'string',
  'border-top': 'string',
  border: 'string',
  color: 'color',
  'container-background-color': 'color',
  'font-family': 'string',
  'font-size': 'unit(px,%)',
  'font-style': 'string',
  'font-weight': 'string',
  height: 'unit(px,%)',
  href: 'string',
  'inner-padding': 'unit(px,%)',
  'line-height': 'unit(px,%)',
  'padding-bottom': 'unit(px,%)',
  'padding-left': 'unit(px,%)',
  'padding-right': 'unit(px,%)',
  'padding-top': 'unit(px,%)',
  padding: 'unit(px,%){1,4}',
  rel: 'string',
  target: 'string',
  'text-decoration': 'string',
  'text-transform': 'string',
  'vertical-align': 'string',
  width: 'unit(px,%)'
}, _class.defaultAttributes = {
  align: 'center',
  'background-color': '#414141',
  border: 'none',
  'border-radius': '3px',
  color: '#ffffff',
  'font-family': 'Ubuntu, Helvetica, Arial, sans-serif',
  'font-size': '13px',
  'font-weight': 'normal',
  'inner-padding': '10px 25px',
  'line-height': '120%',
  padding: '10px 25px',
  target: '_blank',
  'text-decoration': 'none',
  'text-transform': 'none',
  'vertical-align': 'middle'
}, _temp);
exports.default = McButton;
module.exports = exports['default'];