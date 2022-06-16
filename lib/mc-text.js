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

var _conditionalTag = require('mjml-core/lib/helpers/conditionalTag');

var _conditionalTag2 = _interopRequireDefault(_conditionalTag);

var _mjmlText = require('mjml-text');

var _mjmlText2 = _interopRequireDefault(_mjmlText);

var _mjmlValidator = require('mjml-validator');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _mjmlValidator.registerDependencies)({
  'mj-column': ['mc-text'],
  'mj-hero': ['mc-text'],
  'mc-text': []
});

var McText = (_temp = _class = function (_MjText) {
  (0, _inherits3.default)(McText, _MjText);

  function McText() {
    (0, _classCallCheck3.default)(this, McText);
    return (0, _possibleConstructorReturn3.default)(this, (McText.__proto__ || (0, _getPrototypeOf2.default)(McText)).apply(this, arguments));
  }

  (0, _createClass3.default)(McText, [{
    key: 'getStyles',
    value: function getStyles() {
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
          height: this.getAttribute('height')
        }
      };
    }
  }, {
    key: 'renderContent',
    value: function renderContent() {
      return '\n      <div\n        ' + this.htmlAttributes({
        style: 'text',
        'mc:edit': this.getAttribute('mc:edit'),
        'mc:hideable': this.getAttribute('mc:hideable') ? 'mc:hideable' : null
      }) + '\n      >' + this.getContent() + '</div>\n    ';
    }
  }, {
    key: 'render',
    value: function render() {
      var height = this.getAttribute('height');

      return height ? '\n        ' + (0, _conditionalTag2.default)('\n          <table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td height="' + height + '" style="vertical-align:top;height:' + height + ';">\n        ') + '\n        ' + this.renderContent() + '\n        ' + (0, _conditionalTag2.default)('\n          </td></tr></table>\n        ') + '\n      ' : this.renderContent();
    }
  }]);
  return McText;
}(_mjmlText2.default), _class.componentName = 'mc-text', _class.endingTag = true, _class.allowedAttributes = (0, _extends3.default)({}, _mjmlText2.default.allowedAttributes, {
  'mc:edit': 'string',
  'mc:hideable': 'string'
}), _class.defaultAttributes = (0, _extends3.default)({}, _mjmlText2.default.defaultAttributes, {
  'mc:hideable': false
}), _temp);
exports.default = McText;
module.exports = exports.default;