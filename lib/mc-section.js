'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _slicedToArray2 = require('babel-runtime/helpers/slicedToArray');

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

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

var _mjmlCore = require('mjml-core');

var _fp = require('lodash/fp');

var _mjmlSection = require('mjml-section');

var _mjmlSection2 = _interopRequireDefault(_mjmlSection);

var _mjmlValidator = require('mjml-validator');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _mjmlValidator.registerDependencies)({
  'mj-body': ['mc-section'],
  'mj-wrapper': ['mc-section'],
  'mc-section': ['mj-column', 'mj-group', 'mj-raw']
});

var makeBackgroundString = (0, _fp.flow)((0, _fp.filter)(_fp.identity), (0, _fp.join)(' '));

var McSection = (_temp = _class = function (_MjSection) {
  (0, _inherits3.default)(McSection, _MjSection);

  function McSection() {
    (0, _classCallCheck3.default)(this, McSection);
    return (0, _possibleConstructorReturn3.default)(this, (McSection.__proto__ || (0, _getPrototypeOf2.default)(McSection)).apply(this, arguments));
  }

  (0, _createClass3.default)(McSection, [{
    key: 'getChildContext',
    value: function getChildContext() {
      var _getBoxWidths = this.getBoxWidths(),
          box = _getBoxWidths.box;

      return (0, _extends3.default)({}, this.context, {
        containerWidth: box + 'px'
      });
    }
  }, {
    key: 'getStyles',
    value: function getStyles() {
      var containerWidth = this.context.containerWidth;


      var fullWidth = this.isFullWidth();

      var background = this.getAttribute('background-url') ? {
        background: this.getBackground(),
        // background size, repeat and position has to be seperate since yahoo does not support shorthand background css property
        'background-position': this.getBackgroundString(),
        'background-repeat': this.getAttribute('background-repeat'),
        'background-size': this.getAttribute('background-size')
      } : {
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
          border: this.getAttribute('border'),
          'border-bottom': this.getAttribute('border-bottom'),
          'border-left': this.getAttribute('border-left'),
          'border-right': this.getAttribute('border-right'),
          'border-top': this.getAttribute('border-top'),
          direction: this.getAttribute('direction'),
          'font-size': '0px',
          padding: this.getAttribute('padding'),
          'padding-bottom': this.getAttribute('padding-bottom'),
          'padding-left': this.getAttribute('padding-left'),
          'padding-right': this.getAttribute('padding-right'),
          'padding-top': this.getAttribute('padding-top'),
          'text-align': this.getAttribute('text-align')
        },
        div: (0, _extends3.default)({}, fullWidth ? {} : background, {
          margin: '0px auto',
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
    key: 'getBackground',
    value: function getBackground() {
      return makeBackgroundString([this.getAttribute('background-color')].concat((0, _toConsumableArray3.default)(this.hasBackground() ? ['url(\'' + this.getAttribute('background-url') + '\')', this.getBackgroundString(), '/ ' + this.getAttribute('background-size'), this.getAttribute('background-repeat')] : [])));
    }
  }, {
    key: 'getBackgroundString',
    value: function getBackgroundString() {
      var _getBackgroundPositio = this.getBackgroundPosition(),
          posX = _getBackgroundPositio.posX,
          posY = _getBackgroundPositio.posY;

      return posX + ' ' + posY;
    }
  }, {
    key: 'getBackgroundPosition',
    value: function getBackgroundPosition() {
      var _parseBackgroundPosit = this.parseBackgroundPosition(),
          x = _parseBackgroundPosit.x,
          y = _parseBackgroundPosit.y;

      return {
        posX: this.getAttribute('background-position-x') || x,
        posY: this.getAttribute('background-position-y') || y
      };
    }
  }, {
    key: 'parseBackgroundPosition',
    value: function parseBackgroundPosition() {
      var posSplit = this.getAttribute('background-position').split(' ');

      if (posSplit.length === 1) {
        var val = posSplit[0];
        // here we must determine if x or y was provided ; other will be center
        if (['top', 'bottom'].includes(val)) {
          return {
            x: 'center',
            y: val
          };
        }

        return {
          x: val,
          y: 'center'
        };
      }

      if (posSplit.length === 2) {
        // x and y can be put in any order in background-position so we need to determine that based on values
        var val1 = posSplit[0];
        var val2 = posSplit[1];

        if (['top', 'bottom'].includes(val1) || val1 === 'center' && ['left', 'right'].includes(val2)) {
          return {
            x: val2,
            y: val1
          };
        }

        return {
          x: val1,
          y: val2
        };
      }

      // more than 2 values is not supported, let's treat as default value
      return { x: 'center', y: 'top' };
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

      var bgcolorAttr = this.getAttribute('background-color') ? { bgcolor: this.getAttribute('background-color') } : {};

      return '\n      <!--[if mso | IE]>\n      <table\n        ' + this.htmlAttributes((0, _extends3.default)({
        align: 'center',
        border: '0',
        cellpadding: '0',
        cellspacing: '0',
        class: (0, _mjmlCore.suffixCssClasses)(this.getAttribute('css-class'), 'outlook'),
        role: 'presentation',
        style: { width: '' + containerWidth },
        width: parseInt(containerWidth, 10)
      }, bgcolorAttr)) + '\n      >\n        <tr>\n          <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">\n      <![endif]-->\n    ';
    }

    // eslint-disable-next-line class-methods-use-this

  }, {
    key: 'renderAfter',
    value: function renderAfter() {
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
            class: (0, _mjmlCore.suffixCssClasses)(component.getAttribute('css-class'), 'outlook'),
            style: 'tdOutlook'
          }) + '\n            >\n          <![endif]-->\n            ' + component.render() + '\n          <!--[if mso | IE]>\n            </td>\n          <![endif]-->\n    ';
        }
      }) + '\n\n      <!--[if mso | IE]>\n        </tr>\n      <![endif]-->\n    ';
    }
  }, {
    key: 'renderWithBackground',
    value: function renderWithBackground(content) {
      var _this2 = this;

      var fullWidth = this.isFullWidth();

      var containerWidth = this.context.containerWidth;


      var isPercentage = function isPercentage(str) {
        return (/^\d+(\.\d+)?%$/.test(str)
        );
      };

      var vSizeAttributes = {};

      var _getBackgroundPositio2 = this.getBackgroundPosition(),
          bgPosX = _getBackgroundPositio2.posX,
          bgPosY = _getBackgroundPositio2.posY;

      switch (bgPosX) {
        case 'left':
          bgPosX = '0%';
          break;
        case 'center':
          bgPosX = '50%';
          break;
        case 'right':
          bgPosX = '100%';
          break;
        default:
          if (!isPercentage(bgPosX)) {
            bgPosX = '50%';
          }
          break;
      }
      switch (bgPosY) {
        case 'top':
          bgPosY = '0%';
          break;
        case 'center':
          bgPosY = '50%';
          break;
        case 'bottom':
          bgPosY = '100%';
          break;
        default:
          if (!isPercentage(bgPosY)) {
            bgPosY = '0%';
          }
          break;
      }

      // this logic is different when using repeat or no-repeat

      var _map = ['x', 'y'].map(function (coordinate) {
        var isX = coordinate === 'x';
        var bgRepeat = _this2.getAttribute('background-repeat') === 'repeat';
        var pos = isX ? bgPosX : bgPosY;
        var origin = isX ? bgPosX : bgPosY;

        if (isPercentage(pos)) {
          // Should be percentage at this point
          var percentageValue = pos.match(/^(\d+(\.\d+)?)%$/)[1];
          var decimal = parseInt(percentageValue, 10) / 100;

          if (bgRepeat) {
            pos = decimal;
            origin = decimal;
          } else {
            pos = (-50 + decimal * 100) / 100;
            origin = (-50 + decimal * 100) / 100;
          }
        } else if (bgRepeat) {
          // top (y) or center (x)
          origin = isX ? '0.5' : '0';
          pos = isX ? '0.5' : '0';
        } else {
          origin = isX ? '0' : '-0.5';
          pos = isX ? '0' : '-0.5';
        }

        return [origin, pos];
      }, this),
          _map2 = (0, _slicedToArray3.default)(_map, 2),
          _map2$ = (0, _slicedToArray3.default)(_map2[0], 2),
          vOriginX = _map2$[0],
          vPosX = _map2$[1],
          _map2$2 = (0, _slicedToArray3.default)(_map2[1], 2),
          vOriginY = _map2$2[0],
          vPosY = _map2$2[1];

      // If background size is either cover or contain, we tell VML to keep the aspect
      // and fill the entire element.


      if (this.getAttribute('background-size') === 'cover' || this.getAttribute('background-size') === 'contain') {
        vSizeAttributes = {
          size: '1,1',
          aspect: this.getAttribute('background-size') === 'cover' ? 'atleast' : 'atmost'
        };
      } else if (this.getAttribute('background-size') !== 'auto') {
        var bgSplit = this.getAttribute('background-size').split(' ');

        if (bgSplit.length === 1) {
          vSizeAttributes = {
            size: this.getAttribute('background-size'),
            aspect: 'atmost' // reproduces height auto
          };
        } else {
          vSizeAttributes = {
            size: bgSplit.join(',')
          };
        }
      }

      var vmlType = this.getAttribute('background-repeat') === 'no-repeat' ? 'frame' : 'tile';

      if (this.getAttribute('background-size') === 'auto') {
        vmlType = 'tile'; // if no size provided, keep old behavior because outlook can't use original image size with "frame"
        // also ensure that images are still cropped the same way
        vOriginX = 0.5;
        vPosX = 0.5;
        vOriginY = 0;
        vPosY = 0;
      }

      return '\n      <!--[if mso | IE]>\n        <v:rect ' + this.htmlAttributes({
        style: fullWidth ? { 'mso-width-percent': '1000' } : { width: containerWidth },
        'xmlns:v': 'urn:schemas-microsoft-com:vml',
        fill: 'true',
        stroke: 'false'
      }) + '>\n        <v:fill ' + this.htmlAttributes((0, _extends3.default)({
        origin: vOriginX + ', ' + vOriginY,
        position: vPosX + ', ' + vPosY,
        src: this.getAttribute('background-url'),
        color: this.getAttribute('background-color'),
        type: vmlType
      }, vSizeAttributes)) + ' />\n        <v:textbox style="mso-fit-shape-to-text:true" inset="0,0,0,0">\n      <![endif]-->\n          ' + content + '\n        <!--[if mso | IE]>\n        </v:textbox>\n      </v:rect>\n    <![endif]-->\n    ';
    }
  }, {
    key: 'renderSection',
    value: function renderSection() {
      var hasBackground = this.hasBackground();

      return '\n      <div ' + this.htmlAttributes({
        class: this.isFullWidth() ? null : this.getAttribute('css-class'),
        style: 'div',
        'mc:repeatable': this.getAttribute('mc:repeatable'),
        'mc:variant': this.getAttribute('mc:variant'),
        'mc:edit': this.getAttribute('mc:edit'),
        'mc:hideable': this.getAttribute('mc:hideable') ? 'mc:hideable' : null
      }) + '>\n        ' + (hasBackground ? '<div ' + this.htmlAttributes({ style: 'innerDiv' }) + '>' : '') + '\n        <table\n          ' + this.htmlAttributes({
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
}(_mjmlSection2.default), _class.componentName = 'mc-section', _class.allowedAttributes = (0, _extends3.default)({}, _mjmlSection2.default.allowedAttributes, {
  'mc:hideable': 'string',
  'mc:repeatable': 'string',
  'mc:variant': 'string',
  'mc:edit': 'string'
}), _class.defaultAttributes = (0, _extends3.default)({}, _mjmlSection2.default.defaultAttributes, {
  'mc:hideable': false
}), _temp);
exports.default = McSection;
module.exports = exports.default;