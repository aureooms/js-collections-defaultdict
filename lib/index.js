'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports._DefaultDict = exports._defaultdict = exports.DefaultDict = exports.defaultdict = undefined;

var _DefaultDict2 = require('./_DefaultDict');

var _DefaultDict3 = _interopRequireDefault(_DefaultDict2);

var _defaultdict2 = require('./_defaultdict');

var _defaultdict3 = _interopRequireDefault(_defaultdict2);

var _jsCollectionsDict = require('@aureooms/js-collections-dict');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DefaultDict = (0, _DefaultDict3.default)(_jsCollectionsDict.Dict, Map); // use native Map implementation
var defaultdict = (0, _defaultdict3.default)(DefaultDict);

exports.default = defaultdict;
exports.defaultdict = defaultdict;
exports.DefaultDict = DefaultDict;
exports._defaultdict = _defaultdict3.default;
exports._DefaultDict = _DefaultDict3.default;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJEZWZhdWx0RGljdCIsIk1hcCIsImRlZmF1bHRkaWN0IiwiX2RlZmF1bHRkaWN0IiwiX0RlZmF1bHREaWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUVBOzs7O0FBRUEsSUFBTUEsY0FBYyxvREFBcUJDLEdBQXJCLENBQXBCLEMsQ0FBaUQ7QUFDakQsSUFBTUMsY0FBYywyQkFBY0YsV0FBZCxDQUFwQjs7a0JBRWVFLFc7UUFHZEEsVyxHQUFBQSxXO1FBQ0FGLFcsR0FBQUEsVztRQUNBRyxZO1FBQ0FDLFkiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgX0RlZmF1bHREaWN0IGZyb20gJy4vX0RlZmF1bHREaWN0JyA7XG5pbXBvcnQgX2RlZmF1bHRkaWN0IGZyb20gJy4vX2RlZmF1bHRkaWN0JyA7XG5cbmltcG9ydCB7IERpY3QgfSBmcm9tICdAYXVyZW9vbXMvanMtY29sbGVjdGlvbnMtZGljdCcgO1xuXG5jb25zdCBEZWZhdWx0RGljdCA9IF9EZWZhdWx0RGljdCggRGljdCAsIE1hcCApIDsgLy8gdXNlIG5hdGl2ZSBNYXAgaW1wbGVtZW50YXRpb25cbmNvbnN0IGRlZmF1bHRkaWN0ID0gX2RlZmF1bHRkaWN0KCBEZWZhdWx0RGljdCApIDtcblxuZXhwb3J0IGRlZmF1bHQgZGVmYXVsdGRpY3QgO1xuXG5leHBvcnQge1xuXHRkZWZhdWx0ZGljdCAsXG5cdERlZmF1bHREaWN0ICxcblx0X2RlZmF1bHRkaWN0ICxcblx0X0RlZmF1bHREaWN0ICxcbn0gO1xuIl19