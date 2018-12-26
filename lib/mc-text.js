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

var _conditionalTag = require('mjml-core/lib/helpers/conditionalTag');

var _conditionalTag2 = _interopRequireDefault(_conditionalTag);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var McText = (_temp = _class = function (_BodyComponent) {
  (0, _inherits3.default)(McText, _BodyComponent);

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
        'mc:edit': this.getAttribute('mc:edit')
      }) + '\n      >\n        ' + this.getContent() + '\n      </div>\n    ';
    }
  }, {
    key: 'render',
    value: function render() {
      var height = this.getAttribute('height');

      return height ? '\n        ' + (0, _conditionalTag2.default)('\n          <table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td height="' + height + '" style="vertical-align:top;height:' + height + ';">\n        ') + '\n        ' + this.renderContent() + '\n        ' + (0, _conditionalTag2.default)('\n          </td></tr></table>\n        ') + '\n      ' : this.renderContent();
    }
  }]);
  return McText;
}(_mjmlCore.BodyComponent), _class.endingTag = true, _class.allowedAttributes = {
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
  'vertical-align': 'string'
}, _class.defaultAttributes = {
  align: 'left',
  color: '#000000',
  'font-family': 'Ubuntu, Helvetica, Arial, sans-serif',
  'font-size': '13px',
  'line-height': '1',
  padding: '10px 25px'
}, _temp);
exports.default = McText;
module.exports = exports['default'];