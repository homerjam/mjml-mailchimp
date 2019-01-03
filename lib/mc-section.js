'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

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

var _class, _temp2;

var _mjmlCore = require('mjml-core');

var _fp = require('lodash/fp');

var _widthParser2 = require('mjml-core/lib/helpers/widthParser');

var _widthParser3 = _interopRequireDefault(_widthParser2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var makeBackgroundString = (0, _fp.flow)((0, _fp.filter)(_fp.identity), (0, _fp.join)(' '));
var McSection = (_temp2 = _class = function (_BodyComponent) {
  (0, _inherits3.default)(McSection, _BodyComponent);

  function McSection() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, McSection);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = McSection.__proto__ || (0, _getPrototypeOf2.default)(McSection)).call.apply(_ref, [this].concat(args))), _this), _this.getBackground = function () {
      return makeBackgroundString([_this.getAttribute('background-color')].concat((0, _toConsumableArray3.default)(_this.hasBackground() ? ['url(' + _this.getAttribute('background-url') + ')', 'top center / ' + _this.getAttribute('background-size'), _this.getAttribute('background-repeat')] : [])));
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(McSection, [{
    key: 'getChildContext',
    value: function getChildContext() {
      var containerWidth = this.context.containerWidth;


      var paddingSize = this.getShorthandAttrValue('padding', 'left') + this.getShorthandAttrValue('padding', 'right');

      var _widthParser = (0, _widthParser3.default)(containerWidth, {
        parseFloatToInt: false
      }),
          parsedWidth = _widthParser.parsedWidth;

      return (0, _extends3.default)({}, this.context, {
        containerWidth: parsedWidth - paddingSize + 'px'
      });
    }
  }, {
    key: 'getStyles',
    value: function getStyles() {
      var containerWidth = this.context.containerWidth;


      var fullWidth = this.isFullWidth();

      var background = this.getAttribute('background-url') ? { background: this.getBackground() } : {
        background: this.getAttribute('background-color'),
        'background-color': this.getAttribute('background-color')
      };

      return {
        tableFullwidth: (0, _extends3.default)({}, fullWidth ? background : {}, {
          width: '100%',
          'border-radius': this.getAttribute('border-radius')
        }),
        table: (0, _extends3.default)({}, fullWidth ? {} : background, {
          width: '100%',
          'border-radius': this.getAttribute('border-radius')
        }),
        td: {
          'border': this.getAttribute('border'),
          'border-bottom': this.getAttribute('border-bottom'),
          'border-left': this.getAttribute('border-left'),
          'border-right': this.getAttribute('border-right'),
          'border-top': this.getAttribute('border-top'),
          'direction': this.getAttribute('direction'),
          'font-size': '0px',
          'padding': this.getAttribute('padding'),
          'padding-bottom': this.getAttribute('padding-bottom'),
          'padding-left': this.getAttribute('padding-left'),
          'padding-right': this.getAttribute('padding-right'),
          'padding-top': this.getAttribute('padding-top'),
          'text-align': this.getAttribute('text-align'),
          'vertical-align': this.getAttribute('vertical-align')
        },
        div: (0, _extends3.default)({}, fullWidth ? {} : background, {
          Margin: '0px auto',
          'border-radius': this.getAttribute('border-radius'),
          'max-width': containerWidth
        }),
        innerDiv: {
          'line-height': '0',
          'font-size': '0'
        }
      };
    }
  }, {
    key: 'hasBackground',
    value: function hasBackground() {
      return this.getAttribute('background-url') != null;
    }
  }, {
    key: 'isFullWidth',
    value: function isFullWidth() {
      return this.getAttribute('full-width') === 'full-width';
    }
  }, {
    key: 'renderBefore',
    value: function renderBefore() {
      var containerWidth = this.context.containerWidth;


      return '\n      <!--[if mso | IE]>\n      <table\n        ' + this.htmlAttributes({
        align: 'center',
        border: '0',
        cellpadding: '0',
        cellspacing: '0',
        class: this.getAttribute('css-class') ? this.getAttribute('css-class').split(' ').map(function (c) {
          return c + '-outlook';
        }).join(' ') : null,
        style: { width: '' + containerWidth },
        width: parseInt(containerWidth, 10)
      }) + '\n      >\n        <tr>\n          <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">\n      <![endif]-->\n    ';
    }
  }, {
    key: 'renderAfter',
    value: function renderAfter() {
      // eslint-disable-line class-methods-use-this
      return '\n      <!--[if mso | IE]>\n          </td>\n        </tr>\n      </table>\n      <![endif]-->\n    ';
    }
  }, {
    key: 'renderWrappedChildren',
    value: function renderWrappedChildren() {
      var children = this.props.children;


      return '\n      <!--[if mso | IE]>\n        <tr>\n      <![endif]-->\n      ' + this.renderChildren(children, {
        renderer: function renderer(component) {
          return component.constructor.isRawElement() ? component.render() : '\n          <!--[if mso | IE]>\n            <td\n              ' + component.htmlAttributes({
            align: component.getAttribute('align'),
            class: component.getAttribute('css-class') ? component.getAttribute('css-class').split(' ').map(function (c) {
              return c + '-outlook';
            }).join(' ') : null,
            style: 'tdOutlook'
          }) + '\n            >\n          <![endif]-->\n            ' + component.render() + '\n          <!--[if mso | IE]>\n            </td>\n          <![endif]-->\n    ';
        }
      }) + '\n\n      <!--[if mso | IE]>\n        </tr>\n      <![endif]-->\n    ';
    }
  }, {
    key: 'renderWithBackground',
    value: function renderWithBackground(content) {
      var fullWidth = this.isFullWidth();

      var containerWidth = this.context.containerWidth;


      return '\n      <!--[if mso | IE]>\n        <v:rect ' + this.htmlAttributes({
        style: fullWidth ? { 'mso-width-percent': '1000' } : { width: containerWidth },
        'xmlns:v': 'urn:schemas-microsoft-com:vml',
        fill: 'true',
        stroke: 'false'
      }) + '>\n        <v:fill ' + this.htmlAttributes({
        origin: '0.5, 0',
        position: '0.5, 0',
        src: this.getAttribute('background-url'),
        color: this.getAttribute('background-color'),
        type: 'tile'
      }) + ' />\n        <v:textbox style="mso-fit-shape-to-text:true" inset="0,0,0,0">\n      <![endif]-->\n          ' + content + '\n        <!--[if mso | IE]>\n        </v:textbox>\n      </v:rect>\n    <![endif]-->\n    ';
    }
  }, {
    key: 'isHideable',
    value: function isHideable() {
      if (this.getAttribute('mc:hideable') !== false) {
        return true;
      }

      return false;
    }
  }, {
    key: 'renderSection',
    value: function renderSection() {
      var hasBackground = this.hasBackground();
      var attrs = {
        'class': this.isFullWidth() ? null : this.getAttribute('css-class'),
        'style': 'div',
        'mc:repeatable': this.getAttribute('mc:repeatable'),
        'mc:variant': this.getAttribute('mc:variant'),
        'mc:edit': this.getAttribute('mc:edit')
      };

      if (this.isHideable()) {
        attrs['mc:hideable'] = true;
      }

      return '\n      <div ' + this.htmlAttributes(attrs) + '>\n        ' + (hasBackground ? '<div ' + this.htmlAttributes({ style: 'innerDiv' }) + '>' : '') + '\n        <table\n          ' + this.htmlAttributes({
        align: 'center',
        background: this.isFullWidth() ? null : this.getAttribute('background-url'),
        border: '0',
        cellpadding: '0',
        cellspacing: '0',
        role: 'presentation',
        style: 'table'
      }) + '\n        >\n          <tbody>\n            <tr>\n              <td\n                ' + this.htmlAttributes({
        style: 'td'
      }) + '\n              >\n                <!--[if mso | IE]>\n                  <table role="presentation" border="0" cellpadding="0" cellspacing="0">\n                <![endif]-->\n                  ' + this.renderWrappedChildren() + '\n                <!--[if mso | IE]>\n                  </table>\n                <![endif]-->\n              </td>\n            </tr>\n          </tbody>\n        </table>\n        ' + (hasBackground ? '</div>' : '') + '\n      </div>\n    ';
    }
  }, {
    key: 'renderFullWidth',
    value: function renderFullWidth() {
      var content = this.hasBackground() ? this.renderWithBackground('\n        ' + this.renderBefore() + '\n        ' + this.renderSection() + '\n        ' + this.renderAfter() + '\n      ') : '\n        ' + this.renderBefore() + '\n        ' + this.renderSection() + '\n        ' + this.renderAfter() + '\n      ';

      return '\n      <table\n        ' + this.htmlAttributes({
        align: 'center',
        class: this.getAttribute('css-class'),
        background: this.getAttribute('background-url'),
        border: '0',
        cellpadding: '0',
        cellspacing: '0',
        role: 'presentation',
        style: 'tableFullwidth'
      }) + '\n      >\n        <tbody>\n          <tr>\n            <td>\n              ' + content + '\n            </td>\n          </tr>\n        </tbody>\n      </table>\n    ';
    }
  }, {
    key: 'renderSimple',
    value: function renderSimple() {
      var section = this.renderSection();

      return '\n      ' + this.renderBefore() + '\n      ' + (this.hasBackground() ? this.renderWithBackground(section) : section) + '\n      ' + this.renderAfter() + '\n    ';
    }
  }, {
    key: 'render',
    value: function render() {
      return this.isFullWidth() ? this.renderFullWidth() : this.renderSimple();
    }
  }]);
  return McSection;
}(_mjmlCore.BodyComponent), _class.allowedAttributes = {
  'mc:hideable': 'string',
  'mc:repeatable': 'string',
  'mc:variant': 'string',
  'mc:edit': 'string',
  'background-color': 'color',
  'background-url': 'string',
  'background-repeat': 'enum(repeat/no-repeat)',
  'background-size': 'string',
  'border': 'string',
  'border-bottom': 'string',
  'border-left': 'string',
  'border-radius': 'string',
  'border-right': 'string',
  'border-top': 'string',
  'direction': 'enum(ltr,rtl)',
  'full-width': 'enum(full-width)',
  'padding': 'unit(px,%){1,4}',
  'padding-top': 'unit(px,%)',
  'padding-bottom': 'unit(px,%)',
  'padding-left': 'unit(px,%)',
  'padding-right': 'unit(px,%)',
  'text-align': 'enum(left,center,right)',
  'text-padding': 'unit(px,%){1,4}',
  'vertical-align': 'enum(bottom,middle,top)'
}, _class.defaultAttributes = {
  'background-repeat': 'repeat',
  'background-size': 'auto',
  'direction': 'ltr',
  'padding': '20px 0',
  'text-align': 'center',
  'text-padding': '4px 4px 4px 0',
  'vertical-align': 'top',
  'mc:hideable': false
}, _temp2);
exports.default = McSection;
module.exports = exports['default'];