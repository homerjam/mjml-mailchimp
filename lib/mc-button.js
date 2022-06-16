'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

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

var _widthParser2 = require('mjml-core/lib/helpers/widthParser');

var _widthParser3 = _interopRequireDefault(_widthParser2);

var _mjmlButton = require('mjml-button');

var _mjmlButton2 = _interopRequireDefault(_mjmlButton);

var _mjmlValidator = require('mjml-validator');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _mjmlValidator.registerDependencies)({
  'mj-column': ['mc-button'],
  'mj-hero': ['mc-button'],
  'mc-button': []
});

var McButton = (_temp = _class = function (_MjButton) {
  (0, _inherits3.default)(McButton, _MjButton);

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
          'mso-padding-alt': this.getAttribute('inner-padding'),
          'text-align': this.getAttribute('text-align'),
          background: this.getAttribute('background-color')
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
          'border-radius': this.getAttribute('border-radius')
        }
      };
    }
  }, {
    key: 'calculateAWidth',
    value: function calculateAWidth(width) {
      if (!width) return null;

      var _widthParser = (0, _widthParser3.default)(width),
          parsedWidth = _widthParser.parsedWidth,
          unit = _widthParser.unit;

      // impossible to handle percents because it depends on padding and text width


      if (unit !== 'px') return null;

      var _getBoxWidths = this.getBoxWidths(),
          borders = _getBoxWidths.borders;

      var innerPaddings = this.getShorthandAttrValue('inner-padding', 'left') + this.getShorthandAttrValue('inner-padding', 'right');

      return parsedWidth - innerPaddings - borders + 'px';
    }
  }, {
    key: 'render',
    value: function render() {
      var tag = this.getAttribute('href') ? 'a' : 'p';

      return '\n      <table\n        ' + this.htmlAttributes({
        border: '0',
        cellpadding: '0',
        cellspacing: '0',
        role: 'presentation',
        style: 'table',
        'mc:hideable': this.getAttribute('mc:hideable') ? 'mc:hideable' : null
      }) + '\n      >\n        <tbody>\n          <tr>\n            <td\n              ' + this.htmlAttributes({
        align: 'center',
        bgcolor: this.getAttribute('background-color') === 'none' ? undefined : this.getAttribute('background-color'),
        role: 'presentation',
        style: 'td',
        valign: this.getAttribute('vertical-align'),
        'mc:edit': this.getAttribute('mc:edit')
      }) + '\n            >\n              <' + tag + '\n                ' + this.htmlAttributes({
        href: this.getAttribute('href'),
        name: this.getAttribute('name'),
        rel: this.getAttribute('rel'),
        title: this.getAttribute('title'),
        style: 'content',
        target: tag === 'a' ? this.getAttribute('target') : undefined
      }) + '\n              >\n                ' + this.getContent() + '\n              </' + tag + '>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n    ';
    }
  }]);
  return McButton;
}(_mjmlButton2.default), _class.componentName = 'mc-button', _class.endingTag = true, _class.allowedAttributes = (0, _extends3.default)({}, _mjmlButton2.default.allowedAttributes, {
  'mc:edit': 'string',
  'mc:hideable': 'string'
}), _class.defaultAttributes = (0, _extends3.default)({}, _mjmlButton2.default.defaultAttributes, {
  'mc:hideable': false
}), _temp);
exports.default = McButton;
module.exports = exports.default;