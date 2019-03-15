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

var _mjmlButton = require('mjml-button');

var _mjmlButton2 = _interopRequireDefault(_mjmlButton);

var _mjmlCore = require('mjml-core');

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
    key: 'isHideable',
    value: function isHideable() {
      if (this.getAttribute('mc:hideable') !== false) {
        return true;
      }

      return false;
    }

    // MODIFIED from https://github.com/mjmlio/mjml/blob/master/packages/mjml-button/src/index.js

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
      }) + '\n      >\n        <tr>\n          <td\n            ' + this.htmlAttributes({
        align: 'center',
        bgcolor: this.getAttribute('background-color') === 'none' ? undefined : this.getAttribute('background-color'),
        role: 'presentation',
        style: 'td',
        valign: this.getAttribute('vertical-align'),
        'mc:edit': this.getAttribute('mc:edit')
      }) + '\n          >\n            <' + tag + '\n              ' + this.htmlAttributes({
        href: this.getAttribute('href'),
        rel: this.getAttribute('rel'),
        name: this.getAttribute('name'),
        style: 'content',
        target: tag === 'a' ? this.getAttribute('target') : undefined
      }) + '\n            >\n              ' + this.getContent() + '\n            </' + tag + '>\n          </td>\n        </tr>\n      </table>\n    ';
    }
  }]);
  return McButton;
}(_mjmlButton2.default), _class.endingTag = true, _class.allowedAttributes = (0, _extends3.default)({}, _mjmlButton2.default.allowedAttributes, {
  'mc:edit': 'string',
  'mc:hideable': 'string'
}), _class.defaultAttributes = (0, _extends3.default)({}, _mjmlButton2.default.defaultAttributes, {
  'mc:hideable': false
}), _temp);
exports.default = McButton;
module.exports = exports.default;