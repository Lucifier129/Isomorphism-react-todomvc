webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireDefault = __webpack_require__(1)['default'];

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(159);

	var _containersRoot = __webpack_require__(160);

	var _containersRoot2 = _interopRequireDefault(_containersRoot);

	var _store = __webpack_require__(208);

	var _store2 = _interopRequireDefault(_store);

	var _constantsSocketTypes = __webpack_require__(230);

	var _constantsFilterTypes = __webpack_require__(207);

	var initialState = JSON.parse(document.getElementById('initialData').innerHTML);
	var store = (0, _store2['default'])(initialState);

	(0, _reactDom.render)(_react2['default'].createElement(_containersRoot2['default'], null), document.getElementById('todoapp'));

	io().on('change', function (state) {
		return store.dispatch({
			type: _constantsSocketTypes.SERVER_UPDATE,
			state: state
		});
	});

	var dispatchFilter = function dispatchFilter() {
		return store.dispatch({
			type: _constantsFilterTypes.FILTER_ITEMS,
			active: location.hash
		});
	};

	document.addEventListener('DOMContentLoaded', dispatchFilter);
	window.addEventListener('hashchange', dispatchFilter);

/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";

	exports["default"] = function (obj) {
	  return obj && obj.__esModule ? obj : {
	    "default": obj
	  };
	};

	exports.__esModule = true;

/***/ },
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(4);


/***/ },
/* 160 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _get = __webpack_require__(161)['default'];

	var _inherits = __webpack_require__(177)['default'];

	var _createClass = __webpack_require__(186)['default'];

	var _classCallCheck = __webpack_require__(189)['default'];

	var _interopRequireDefault = __webpack_require__(1)['default'];

	Object.defineProperty(exports, '__esModule', {
		value: true
	});

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactProps = __webpack_require__(190);

	var _componentsNewTodo = __webpack_require__(191);

	var _componentsNewTodo2 = _interopRequireDefault(_componentsNewTodo);

	var _componentsMain = __webpack_require__(193);

	var _componentsMain2 = _interopRequireDefault(_componentsMain);

	var _componentsFilters = __webpack_require__(206);

	var _componentsFilters2 = _interopRequireDefault(_componentsFilters);

	var Root = (function (_Component) {
		_inherits(Root, _Component);

		function Root() {
			_classCallCheck(this, _Root);

			_get(Object.getPrototypeOf(_Root.prototype), 'constructor', this).apply(this, arguments);
		}

		_createClass(Root, [{
			key: 'render',
			value: function render() {
				console.log('Root rendering');
				return _react2['default'].createElement(
					'div',
					null,
					_react2['default'].createElement(_componentsNewTodo2['default'], null),
					_react2['default'].createElement(_componentsMain2['default'], null),
					_react2['default'].createElement(_componentsFilters2['default'], null)
				);
			}
		}]);

		var _Root = Root;
		Root = (0, _reactProps.injectProps)()(Root) || Root;
		return Root;
	})(_react.Component);

	exports['default'] = Root;
	module.exports = exports['default'];

/***/ },
/* 161 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _Object$getOwnPropertyDescriptor = __webpack_require__(162)["default"];

	exports["default"] = function get(_x, _x2, _x3) {
	  var _again = true;

	  _function: while (_again) {
	    var object = _x,
	        property = _x2,
	        receiver = _x3;
	    _again = false;
	    if (object === null) object = Function.prototype;

	    var desc = _Object$getOwnPropertyDescriptor(object, property);

	    if (desc === undefined) {
	      var parent = Object.getPrototypeOf(object);

	      if (parent === null) {
	        return undefined;
	      } else {
	        _x = parent;
	        _x2 = property;
	        _x3 = receiver;
	        _again = true;
	        desc = parent = undefined;
	        continue _function;
	      }
	    } else if ("value" in desc) {
	      return desc.value;
	    } else {
	      var getter = desc.get;

	      if (getter === undefined) {
	        return undefined;
	      }

	      return getter.call(receiver);
	    }
	  }
	};

	exports.__esModule = true;

/***/ },
/* 162 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(163), __esModule: true };

/***/ },
/* 163 */
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(164);
	__webpack_require__(165);
	module.exports = function getOwnPropertyDescriptor(it, key){
	  return $.getDesc(it, key);
	};

/***/ },
/* 164 */
/***/ function(module, exports) {

	var $Object = Object;
	module.exports = {
	  create:     $Object.create,
	  getProto:   $Object.getPrototypeOf,
	  isEnum:     {}.propertyIsEnumerable,
	  getDesc:    $Object.getOwnPropertyDescriptor,
	  setDesc:    $Object.defineProperty,
	  setDescs:   $Object.defineProperties,
	  getKeys:    $Object.keys,
	  getNames:   $Object.getOwnPropertyNames,
	  getSymbols: $Object.getOwnPropertySymbols,
	  each:       [].forEach
	};

/***/ },
/* 165 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	var toIObject = __webpack_require__(166);

	__webpack_require__(170)('getOwnPropertyDescriptor', function($getOwnPropertyDescriptor){
	  return function getOwnPropertyDescriptor(it, key){
	    return $getOwnPropertyDescriptor(toIObject(it), key);
	  };
	});

/***/ },
/* 166 */
/***/ function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(167)
	  , defined = __webpack_require__(169);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ },
/* 167 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(168);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 168 */
/***/ function(module, exports) {

	var toString = {}.toString;

	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 169 */
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 170 */
/***/ function(module, exports, __webpack_require__) {

	// most Object methods by ES6 should accept primitives
	var $export = __webpack_require__(171)
	  , core    = __webpack_require__(173)
	  , fails   = __webpack_require__(176);
	module.exports = function(KEY, exec){
	  var fn  = (core.Object || {})[KEY] || Object[KEY]
	    , exp = {};
	  exp[KEY] = exec(fn);
	  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
	};

/***/ },
/* 171 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(172)
	  , core      = __webpack_require__(173)
	  , ctx       = __webpack_require__(174)
	  , PROTOTYPE = 'prototype';

	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , IS_WRAP   = type & $export.W
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
	    , key, own, out;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && key in target;
	    if(own && key in exports)continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? ctx(out, global)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? (function(C){
	      var F = function(param){
	        return this instanceof C ? new C(param) : C(param);
	      };
	      F[PROTOTYPE] = C[PROTOTYPE];
	      return F;
	    // make static versions for prototype methods
	    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    if(IS_PROTO)(exports[PROTOTYPE] || (exports[PROTOTYPE] = {}))[key] = out;
	  }
	};
	// type bitmap
	$export.F = 1;  // forced
	$export.G = 2;  // global
	$export.S = 4;  // static
	$export.P = 8;  // proto
	$export.B = 16; // bind
	$export.W = 32; // wrap
	module.exports = $export;

/***/ },
/* 172 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 173 */
/***/ function(module, exports) {

	var core = module.exports = {version: '1.2.6'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 174 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(175);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};

/***/ },
/* 175 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 176 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 177 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _Object$create = __webpack_require__(178)["default"];

	var _Object$setPrototypeOf = __webpack_require__(180)["default"];

	exports["default"] = function (subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
	  }

	  subClass.prototype = _Object$create(superClass && superClass.prototype, {
	    constructor: {
	      value: subClass,
	      enumerable: false,
	      writable: true,
	      configurable: true
	    }
	  });
	  if (superClass) _Object$setPrototypeOf ? _Object$setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	};

	exports.__esModule = true;

/***/ },
/* 178 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(179), __esModule: true };

/***/ },
/* 179 */
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(164);
	module.exports = function create(P, D){
	  return $.create(P, D);
	};

/***/ },
/* 180 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(181), __esModule: true };

/***/ },
/* 181 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(182);
	module.exports = __webpack_require__(173).Object.setPrototypeOf;

/***/ },
/* 182 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.19 Object.setPrototypeOf(O, proto)
	var $export = __webpack_require__(171);
	$export($export.S, 'Object', {setPrototypeOf: __webpack_require__(183).set});

/***/ },
/* 183 */
/***/ function(module, exports, __webpack_require__) {

	// Works with __proto__ only. Old v8 can't work with null proto objects.
	/* eslint-disable no-proto */
	var getDesc  = __webpack_require__(164).getDesc
	  , isObject = __webpack_require__(184)
	  , anObject = __webpack_require__(185);
	var check = function(O, proto){
	  anObject(O);
	  if(!isObject(proto) && proto !== null)throw TypeError(proto + ": can't set as prototype!");
	};
	module.exports = {
	  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
	    function(test, buggy, set){
	      try {
	        set = __webpack_require__(174)(Function.call, getDesc(Object.prototype, '__proto__').set, 2);
	        set(test, []);
	        buggy = !(test instanceof Array);
	      } catch(e){ buggy = true; }
	      return function setPrototypeOf(O, proto){
	        check(O, proto);
	        if(buggy)O.__proto__ = proto;
	        else set(O, proto);
	        return O;
	      };
	    }({}, false) : undefined),
	  check: check
	};

/***/ },
/* 184 */
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 185 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(184);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 186 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _Object$defineProperty = __webpack_require__(187)["default"];

	exports["default"] = (function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];
	      descriptor.enumerable = descriptor.enumerable || false;
	      descriptor.configurable = true;
	      if ("value" in descriptor) descriptor.writable = true;

	      _Object$defineProperty(target, descriptor.key, descriptor);
	    }
	  }

	  return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);
	    if (staticProps) defineProperties(Constructor, staticProps);
	    return Constructor;
	  };
	})();

	exports.__esModule = true;

/***/ },
/* 187 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(188), __esModule: true };

/***/ },
/* 188 */
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(164);
	module.exports = function defineProperty(it, key, desc){
	  return $.setDesc(it, key, desc);
	};

/***/ },
/* 189 */
/***/ function(module, exports) {

	"use strict";

	exports["default"] = function (instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};

	exports.__esModule = true;

/***/ },
/* 190 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
		value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var isType = function isType(type) {
		return function (obj) {
			return obj != null && Object.prototype.toString.call(obj) === '[object ' + type + ']';
		};
	};
	var isObj = isType('Object');
	var isStr = isType('String');
	var isFn = isType('Function');
	var isArr = Array.isArray || isType('Array');

	// state
	var $getState = function $getState() {};
	var $actions = {};
	var $selectors = {};
	var $components = {};
	var $match = undefined;

	var setFluxConfig = function setFluxConfig(_ref) {
		var getState = _ref.getState;
		var selectors = _ref.selectors;
		var actions = _ref.actions;
		var match = _ref.match;

		addSelectors(selectors);
		$getState = getState;
		$actions = actions;
		$match = match;
	};

	exports.setFluxConfig = setFluxConfig;
	var handleAction = function handleAction(data) {
		if (!isFn($match)) {
			return;
		}
		var result = $match(data);
		switch (true) {
			case isObj(result):
				var name = result.name,
				    callback = result.callback;

				if (isArr(name)) {
					name.forEach(item = eachComponent(item, callback));
				} else {
					eachComponent(name, callback);
				}
				break;
			case isStr(result):
				renderCompoent(result);
				break;
			case isArr(result):
				result.forEach(renderCompoent);
				break;
		}
	};

	exports.handleAction = handleAction;
	var updater = {
		DID_UPDATE: function DID_UPDATE(data) {
			handleAction(data);
			return data;
		}
	};

	exports.updater = updater;
	var bindReducer = function bindReducer(reducer) {
		return function (state, action) {
			var nextState = reducer(state, action);
			var $$getState = $getState;
			$getState = function () {
				return nextState;
			};
			handleAction({
				state: state,
				nextState: nextState,
				action: action
			});
			$getState = $$getState;
			return nextState;
		};
	};

	exports.bindReducer = bindReducer;
	// selector
	var addSelectors = function addSelectors(obj) {
		Object.keys(obj).forEach(function (key) {
			var query = obj[key];
			if (!isFn(query)) {
				return;
			}
			$selectors[key] = function (props) {
				for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
					args[_key - 1] = arguments[_key];
				}

				var state = $getState();
				return query.apply(undefined, [state, $actions, props].concat(args));
			};
		});
	};

	var addComponent = function addComponent(name, component) {
		if (!isArr($components[name])) {
			$components[name] = [];
		}
		$components[name].push(component);
	};

	var removeComponent = function removeComponent(name, component) {
		var components = $components[name];
		if (!isArr(components)) {
			return;
		}
		var index = components.indexOf(component);
		if (index !== -1) {
			components.splice(index, 1);
		}
	};

	var getComponents = function getComponents(name) {
		var components = $components[name];
		return isArr(components) ? components : [];
	};

	var eachComponent = function eachComponent(name, fn) {
		getComponents(name).forEach(fn);
	};

	var forceUpdate = function forceUpdate(component) {
		return component.forceUpdate();
	};
	var renderCompoent = function renderCompoent(name) {
		getComponents(name).forEach(forceUpdate);
	};

	var injectProps = function injectProps(name) {
		for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
			args[_key2 - 1] = arguments[_key2];
		}

		return function (Component) {
			name = name || Component.name;

			var Injector = (function (_React$Component) {
				_inherits(Injector, _React$Component);

				function Injector() {
					_classCallCheck(this, Injector);

					_get(Object.getPrototypeOf(Injector.prototype), 'constructor', this).apply(this, arguments);
				}

				_createClass(Injector, [{
					key: 'componentDidMount',
					value: function componentDidMount() {
						addComponent(name, this);
					}
				}, {
					key: 'componentWillUnmount',
					value: function componentWillUnmount() {
						removeComponent(name, this);
					}
				}, {
					key: 'render',
					value: function render() {
						var selector = $selectors[name];
						var props = {};
						if (isFn(selector)) {
							props = selector.apply(undefined, [this.props].concat(args));
						}
						return _react2['default'].createElement(Component, _extends({}, this.props, props));
					}
				}]);

				return Injector;
			})(_react2['default'].Component);

			Object.defineProperties(Injector, {
				propTypes: {
					set: function set(propTypes) {
						Component.propTypes = propTypes;
					}
				},
				defaultProps: {
					set: function set(defaultProps) {
						Component.defaultProps = defaultProps;
					}
				}
			});
			return Injector;
		};
	};
	exports.injectProps = injectProps;

/***/ },
/* 191 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _get = __webpack_require__(161)['default'];

	var _inherits = __webpack_require__(177)['default'];

	var _createClass = __webpack_require__(186)['default'];

	var _classCallCheck = __webpack_require__(189)['default'];

	var _interopRequireDefault = __webpack_require__(1)['default'];

	Object.defineProperty(exports, '__esModule', {
		value: true
	});

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _constantsKeyCode = __webpack_require__(192);

	var _reactProps = __webpack_require__(190);

	var NewTodo = (function (_Component) {
		_inherits(NewTodo, _Component);

		function NewTodo() {
			var _this = this;

			_classCallCheck(this, _NewTodo);

			_get(Object.getPrototypeOf(_NewTodo.prototype), 'constructor', this).apply(this, arguments);

			this.handleBlur = function (e) {
				_this.checkInput(e.currentTarget);
			};

			this.handleKeyup = function (e) {
				var keyCode = e.keyCode;
				if (keyCode === _constantsKeyCode.ENTER_KEY || keyCode === _constantsKeyCode.ESCAPE_KEY) {
					_this.checkInput(e.currentTarget);
				}
			};
		}

		_createClass(NewTodo, [{
			key: 'shouldComponentUpdate',
			value: function shouldComponentUpdate() {
				return false;
			}
		}, {
			key: 'checkInput',
			value: function checkInput(input) {
				var text = input.value;
				if (text) {
					this.props.addItem({
						id: Date.now(),
						text: text
					});
					input.value = '';
				}
			}
		}, {
			key: 'render',
			value: function render() {
				console.log('NewTodo rendering');
				return _react2['default'].createElement(
					'header',
					{ id: 'header' },
					_react2['default'].createElement(
						'h1',
						null,
						'todos'
					),
					_react2['default'].createElement('input', {
						id: 'new-todo',
						placeholder: 'What needs to be done?',
						onBlur: this.handleBlur,
						onKeyUp: this.handleKeyup })
				);
			}
		}], [{
			key: 'propTypes',
			value: {
				addItem: _react.PropTypes.func.isRequired
			},
			enumerable: true
		}]);

		var _NewTodo = NewTodo;
		NewTodo = (0, _reactProps.injectProps)()(NewTodo) || NewTodo;
		return NewTodo;
	})(_react.Component);

	exports['default'] = NewTodo;
	module.exports = exports['default'];

/***/ },
/* 192 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var ENTER_KEY = 13;
	exports.ENTER_KEY = ENTER_KEY;
	var ESCAPE_KEY = 27;
	exports.ESCAPE_KEY = ESCAPE_KEY;

/***/ },
/* 193 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _get = __webpack_require__(161)['default'];

	var _inherits = __webpack_require__(177)['default'];

	var _createClass = __webpack_require__(186)['default'];

	var _classCallCheck = __webpack_require__(189)['default'];

	var _interopRequireDefault = __webpack_require__(1)['default'];

	Object.defineProperty(exports, '__esModule', {
		value: true
	});

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _Todos = __webpack_require__(194);

	var _Todos2 = _interopRequireDefault(_Todos);

	var _reactProps = __webpack_require__(190);

	var Main = (function (_Component) {
		_inherits(Main, _Component);

		function Main() {
			var _this = this;

			_classCallCheck(this, _Main);

			_get(Object.getPrototypeOf(_Main.prototype), 'constructor', this).apply(this, arguments);

			this.toggleAll = function (e) {
				return _this.props.updateItems({
					status: e.currentTarget.checked
				});
			};
		}

		_createClass(Main, [{
			key: 'render',
			value: function render() {
				console.log('Main rendering');
				var toggleAll = this.toggleAll;
				var _props = this.props;
				var updateItem = _props.updateItem;
				var deleteItem = _props.deleteItem;
				var updateItems = _props.updateItems;
				var todos = _props.todos;
				var isAllCompleted = _props.isAllCompleted;

				return _react2['default'].createElement(
					'section',
					{ id: 'main' },
					_react2['default'].createElement('input', { id: 'toggle-all', type: 'checkbox', onChange: toggleAll, checked: isAllCompleted }),
					_react2['default'].createElement(
						'label',
						{ htmlFor: 'toggle-all' },
						'Mark all as complete'
					),
					_react2['default'].createElement(_Todos2['default'], null)
				);
			}
		}], [{
			key: 'propTypes',
			value: {
				updateItems: _react.PropTypes.func.isRequired,
				isAllCompleted: _react.PropTypes.bool.isRequired
			},
			enumerable: true
		}]);

		var _Main = Main;
		Main = (0, _reactProps.injectProps)()(Main) || Main;
		return Main;
	})(_react.Component);

	exports['default'] = Main;
	module.exports = exports['default'];

/***/ },
/* 194 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _get = __webpack_require__(161)['default'];

	var _inherits = __webpack_require__(177)['default'];

	var _createClass = __webpack_require__(186)['default'];

	var _classCallCheck = __webpack_require__(189)['default'];

	var _interopRequireDefault = __webpack_require__(1)['default'];

	Object.defineProperty(exports, '__esModule', {
		value: true
	});

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _Todo = __webpack_require__(195);

	var _Todo2 = _interopRequireDefault(_Todo);

	var _reactProps = __webpack_require__(190);

	var Todos = (function (_React$Component) {
		_inherits(Todos, _React$Component);

		function Todos() {
			_classCallCheck(this, _Todos);

			_get(Object.getPrototypeOf(_Todos.prototype), 'constructor', this).apply(this, arguments);
		}

		_createClass(Todos, [{
			key: 'render',
			value: function render() {
				console.log('Todos rendering');
				var todos = this.props.todos;

				return _react2['default'].createElement(
					'ul',
					{ id: 'todo-list' },
					todos.map(function (id) {
						return _react2['default'].createElement(_Todo2['default'], { id: id, key: id });
					})
				);
			}
		}], [{
			key: 'propTypes',
			value: {
				todos: _react.PropTypes.arrayOf(_react.PropTypes.number.isRequired)
			},
			enumerable: true
		}]);

		var _Todos = Todos;
		Todos = (0, _reactProps.injectProps)()(Todos) || Todos;
		return Todos;
	})(_react2['default'].Component);

	exports['default'] = Todos;
	module.exports = exports['default'];

/***/ },
/* 195 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _get = __webpack_require__(161)['default'];

	var _inherits = __webpack_require__(177)['default'];

	var _createClass = __webpack_require__(186)['default'];

	var _classCallCheck = __webpack_require__(189)['default'];

	var _extends = __webpack_require__(196)['default'];

	var _interopRequireDefault = __webpack_require__(1)['default'];

	Object.defineProperty(exports, '__esModule', {
		value: true
	});

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(202);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _constantsKeyCode = __webpack_require__(192);

	var _reactProps = __webpack_require__(190);

	var _pureRenderMixin = __webpack_require__(203);

	var _pureRenderMixin2 = _interopRequireDefault(_pureRenderMixin);

	var Todo = (function (_Component) {
		_inherits(Todo, _Component);

		_createClass(Todo, null, [{
			key: 'propTypes',
			value: {
				id: _react.PropTypes.any.isRequired,
				text: _react.PropTypes.string.isRequired,
				status: _react.PropTypes.bool.isRequired,
				updateItem: _react.PropTypes.func.isRequired,
				deleteItem: _react.PropTypes.func.isRequired
			},
			enumerable: true
		}]);

		function Todo(props, context) {
			var _this = this;

			_classCallCheck(this, _Todo);

			_get(Object.getPrototypeOf(_Todo.prototype), 'constructor', this).call(this, props, context);

			this.destroy = function () {
				_this.props.deleteItem(_this.props.id);
			};

			this.handleBlur = function (e) {
				_this.checkEditor(e.currentTarget);
			};

			this.handleKeyup = function (e) {
				var keyCode = e.keyCode;
				var currentTarget = e.currentTarget;

				if (keyCode === _constantsKeyCode.ENTER_KEY || keyCode === _constantsKeyCode.ESCAPE_KEY) {
					_this.checkEditor(currentTarget);
				}
			};

			this.handleDblclick = function () {
				var editor = _this.refs.editor;
				editor.value = _this.props.text;
				_this.setState({
					onEdit: true
				});
				setTimeout(function () {
					return editor.focus();
				}, 0);
			};

			this.toggleTodo = function (e) {
				_this.updateItem({
					status: e.currentTarget.checked
				});
			};

			this.state = {
				onEdit: false
			};
		}

		_createClass(Todo, [{
			key: 'checkEditor',
			value: function checkEditor(input) {
				var text = input.value;
				if (text && text !== this.props.text) {
					this.updateItem({ text: text });
				} else if (!text) {
					this.destroy();
				}
				this.setState({
					onEdit: false
				});
			}
		}, {
			key: 'updateItem',
			value: function updateItem() {
				var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

				this.props.updateItem(_extends({
					id: this.props.id
				}, options));
			}
		}, {
			key: 'render',
			value: function render() {
				var _props = this.props;
				var id = _props.id;
				var text = _props.text;
				var displayTime = _props.displayTime;
				var status = _props.status;

				var className = (0, _classnames2['default'])({
					completed: status,
					editing: this.state.onEdit
				});
				console.log('Todo: [' + text + '] rendering');
				return _react2['default'].createElement(
					'li',
					{ key: id, className: className, title: displayTime },
					_react2['default'].createElement(
						'div',
						{ className: 'view' },
						_react2['default'].createElement('input', { className: 'toggle', type: 'checkbox', onChange: this.toggleTodo, checked: status }),
						_react2['default'].createElement(
							'label',
							{ onDoubleClick: this.handleDblclick },
							text
						),
						_react2['default'].createElement('button', { className: 'destroy', onClick: this.destroy })
					),
					_react2['default'].createElement('input', { className: 'edit', onBlur: this.handleBlur, onKeyUp: this.handleKeyup, ref: 'editor' })
				);
			}
		}]);

		var _Todo = Todo;
		Todo = (0, _pureRenderMixin2['default'])(Todo) || Todo;
		Todo = (0, _reactProps.injectProps)()(Todo) || Todo;
		return Todo;
	})(_react.Component);

	exports['default'] = Todo;
	module.exports = exports['default'];

/***/ },
/* 196 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _Object$assign = __webpack_require__(197)["default"];

	exports["default"] = _Object$assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];

	    for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }

	  return target;
	};

	exports.__esModule = true;

/***/ },
/* 197 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(198), __esModule: true };

/***/ },
/* 198 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(199);
	module.exports = __webpack_require__(173).Object.assign;

/***/ },
/* 199 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.1 Object.assign(target, source)
	var $export = __webpack_require__(171);

	$export($export.S + $export.F, 'Object', {assign: __webpack_require__(200)});

/***/ },
/* 200 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.1 Object.assign(target, source, ...)
	var $        = __webpack_require__(164)
	  , toObject = __webpack_require__(201)
	  , IObject  = __webpack_require__(167);

	// should work with symbols and should have deterministic property order (V8 bug)
	module.exports = __webpack_require__(176)(function(){
	  var a = Object.assign
	    , A = {}
	    , B = {}
	    , S = Symbol()
	    , K = 'abcdefghijklmnopqrst';
	  A[S] = 7;
	  K.split('').forEach(function(k){ B[k] = k; });
	  return a({}, A)[S] != 7 || Object.keys(a({}, B)).join('') != K;
	}) ? function assign(target, source){ // eslint-disable-line no-unused-vars
	  var T     = toObject(target)
	    , $$    = arguments
	    , $$len = $$.length
	    , index = 1
	    , getKeys    = $.getKeys
	    , getSymbols = $.getSymbols
	    , isEnum     = $.isEnum;
	  while($$len > index){
	    var S      = IObject($$[index++])
	      , keys   = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)
	      , length = keys.length
	      , j      = 0
	      , key;
	    while(length > j)if(isEnum.call(S, key = keys[j++]))T[key] = S[key];
	  }
	  return T;
	} : Object.assign;

/***/ },
/* 201 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(169);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ },
/* 202 */,
/* 203 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireDefault = __webpack_require__(1)['default'];

	Object.defineProperty(exports, '__esModule', {
		value: true
	});

	var _reactAddonsShallowCompare = __webpack_require__(204);

	var _reactAddonsShallowCompare2 = _interopRequireDefault(_reactAddonsShallowCompare);

	var pureRender = function pureRender(Component) {
		Component.prototype.shouldComponentUpdate = function (nextProps, nextState) {
			var result = (0, _reactAddonsShallowCompare2['default'])(this, nextProps, nextState);
			console.log(Component.name + '#shouldComponentUpdate: ' + result);
			return result;
		};
		return Component;
	};

	exports['default'] = pureRender;
	module.exports = exports['default'];

/***/ },
/* 204 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(205);

/***/ },
/* 205 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	* @providesModule shallowCompare
	*/

	'use strict';

	var shallowEqual = __webpack_require__(118);

	/**
	 * Does a shallow comparison for props and state.
	 * See ReactComponentWithPureRenderMixin
	 */
	function shallowCompare(instance, nextProps, nextState) {
	  return !shallowEqual(instance.props, nextProps) || !shallowEqual(instance.state, nextState);
	}

	module.exports = shallowCompare;

/***/ },
/* 206 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _get = __webpack_require__(161)['default'];

	var _inherits = __webpack_require__(177)['default'];

	var _createClass = __webpack_require__(186)['default'];

	var _classCallCheck = __webpack_require__(189)['default'];

	var _interopRequireDefault = __webpack_require__(1)['default'];

	Object.defineProperty(exports, '__esModule', {
		value: true
	});

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(202);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _constantsFilterTypes = __webpack_require__(207);

	var _reactProps = __webpack_require__(190);

	var _pureRenderMixin = __webpack_require__(203);

	var _pureRenderMixin2 = _interopRequireDefault(_pureRenderMixin);

	var Filters = (function (_Component) {
		_inherits(Filters, _Component);

		function Filters() {
			var _this = this;

			_classCallCheck(this, _Filters);

			_get(Object.getPrototypeOf(_Filters.prototype), 'constructor', this).apply(this, arguments);

			this.getClassName = function (filterType) {
				return (0, _classnames2['default'])({
					selected: _this.props.activeFilter === filterType
				});
			};

			this.clearCompleted = function () {
				return _this.props.deleteItems({
					status: true
				});
			};
		}

		_createClass(Filters, [{
			key: 'getTodoCount',
			value: function getTodoCount() {
				var todoCount = this.props.todoCount;

				return todoCount + ' item' + (todoCount > 1 ? 's' : '') + ' left';
			}
		}, {
			key: 'getCompletedCount',
			value: function getCompletedCount() {
				var completedCount = this.props.completedCount;

				return completedCount > 0 ? 'Clear completed (' + completedCount + ')' : '';
			}
		}, {
			key: 'render',
			value: function render() {
				console.log('Filters rendering');
				var getClassName = this.getClassName;
				var clearCompleted = this.clearCompleted;

				return _react2['default'].createElement(
					'footer',
					{ id: 'footer' },
					_react2['default'].createElement(
						'span',
						{ id: 'todo-count' },
						this.getTodoCount()
					),
					_react2['default'].createElement(
						'ul',
						{ id: 'filters' },
						_react2['default'].createElement(
							'li',
							null,
							_react2['default'].createElement(
								'a',
								{ href: '#/', className: getClassName(_constantsFilterTypes.SHOW_ALL) },
								'All'
							)
						),
						_react2['default'].createElement(
							'li',
							null,
							_react2['default'].createElement(
								'a',
								{ href: '#/active', className: getClassName(_constantsFilterTypes.SHOW_ACTIVE) },
								'Active'
							)
						),
						_react2['default'].createElement(
							'li',
							null,
							_react2['default'].createElement(
								'a',
								{ href: '#/completed', className: getClassName(_constantsFilterTypes.SHOW_COMPLETED) },
								'Completed'
							)
						)
					),
					_react2['default'].createElement(
						'button',
						{ id: 'clear-completed', onClick: clearCompleted },
						this.getCompletedCount()
					)
				);
			}
		}], [{
			key: 'propTypes',
			value: {
				deleteItems: _react.PropTypes.func.isRequired,
				todoCount: _react.PropTypes.number.isRequired,
				completedCount: _react.PropTypes.number.isRequired,
				activeFilter: _react.PropTypes.string.isRequired
			},
			enumerable: true
		}]);

		var _Filters = Filters;
		Filters = (0, _pureRenderMixin2['default'])(Filters) || Filters;
		Filters = (0, _reactProps.injectProps)()(Filters) || Filters;
		return Filters;
	})(_react.Component);

	exports['default'] = Filters;
	module.exports = exports['default'];

/***/ },
/* 207 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	var FILTER_ITEMS = 'FILTER_ITEMS';
	exports.FILTER_ITEMS = FILTER_ITEMS;
	var SHOW_ALL = 'SHOW_ALL';
	exports.SHOW_ALL = SHOW_ALL;
	var SHOW_ACTIVE = 'SHOW_ACTIVE';
	exports.SHOW_ACTIVE = SHOW_ACTIVE;
	var SHOW_COMPLETED = 'SHOW_COMPLETED';
	exports.SHOW_COMPLETED = SHOW_COMPLETED;

/***/ },
/* 208 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireWildcard = __webpack_require__(209)['default'];

	var _interopRequireDefault = __webpack_require__(1)['default'];

	Object.defineProperty(exports, '__esModule', {
		value: true
	});

	var _redux = __webpack_require__(210);

	var _reactProps = __webpack_require__(190);

	var _actions = __webpack_require__(219);

	var actionCreators = _interopRequireWildcard(_actions);

	var _reduxLogger = __webpack_require__(221);

	var _reduxLogger2 = _interopRequireDefault(_reduxLogger);

	var _reducer = __webpack_require__(224);

	var _reducer2 = _interopRequireDefault(_reducer);

	var _selectors = __webpack_require__(227);

	var selectors = _interopRequireWildcard(_selectors);

	var _match = __webpack_require__(228);

	var _match2 = _interopRequireDefault(_match);

	var loggerMiddleware = (0, _reduxLogger2['default'])({
		level: 'info',
		collapsed: true,
		duration: true
	});

	var finalStoreCreator = undefined;

	if (typeof window !== 'undefined') {
		finalStoreCreator = (0, _redux.applyMiddleware)(loggerMiddleware)(_redux.createStore);
	} else {
		finalStoreCreator = _redux.createStore;
	}

	exports['default'] = function (initialState) {
		var store = finalStoreCreator((0, _reactProps.bindReducer)(_reducer2['default']), initialState);
		var dispatch = store.dispatch;
		var getState = store.getState;

		var actions = (0, _redux.bindActionCreators)(actionCreators, store.dispatch);
		(0, _reactProps.setFluxConfig)({
			getState: getState,
			actions: actions,
			selectors: selectors,
			match: _match2['default']
		});
		return store;
	};

	module.exports = exports['default'];

/***/ },
/* 209 */
/***/ function(module, exports) {

	"use strict";

	exports["default"] = function (obj) {
	  if (obj && obj.__esModule) {
	    return obj;
	  } else {
	    var newObj = {};

	    if (obj != null) {
	      for (var key in obj) {
	        if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
	      }
	    }

	    newObj["default"] = obj;
	    return newObj;
	  }
	};

	exports.__esModule = true;

/***/ },
/* 210 */,
/* 211 */,
/* 212 */,
/* 213 */,
/* 214 */,
/* 215 */,
/* 216 */,
/* 217 */,
/* 218 */,
/* 219 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireWildcard = __webpack_require__(209)['default'];

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	exports.addItem = addItem;
	exports.deleteItem = deleteItem;
	exports.updateItem = updateItem;
	exports.deleteItems = deleteItems;
	exports.updateItems = updateItems;

	var _constantsActionTypes = __webpack_require__(220);

	var types = _interopRequireWildcard(_constantsActionTypes);

	function addItem(_ref) {
	    var text = _ref.text;
	    var id = _ref.id;

	    return {
	        type: types.ADD_ITEM,
	        id: id,
	        text: text
	    };
	}

	function deleteItem(id) {
	    return {
	        type: types.DELETE_ITEM,
	        id: id
	    };
	}

	function updateItem(data) {
	    return {
	        type: types.UPDATE_ITEM,
	        data: data
	    };
	}

	function deleteItems(query) {
	    return {
	        type: types.DELETE_ITEMS,
	        query: query
	    };
	}

	function updateItems(data) {
	    return {
	        type: types.UPDATE_ITEMS,
	        data: data
	    };
	}

/***/ },
/* 220 */
/***/ function(module, exports) {

	//constants for todomvc
	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	var ADD_ITEM = 'ADD_ITEM';
	exports.ADD_ITEM = ADD_ITEM;
	var DELETE_ITEM = 'DELETE_ITEM';
	exports.DELETE_ITEM = DELETE_ITEM;
	var DELETE_ITEMS = 'DELETE_ITEMS';
	exports.DELETE_ITEMS = DELETE_ITEMS;
	var UPDATE_ITEM = 'UPDATE_ITEM';
	exports.UPDATE_ITEM = UPDATE_ITEM;
	var UPDATE_ITEMS = 'UPDATE_ITEMS';
	exports.UPDATE_ITEMS = UPDATE_ITEMS;

/***/ },
/* 221 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _createLogger = __webpack_require__(222);

	var _createLogger2 = _interopRequireDefault(_createLogger);

	var _logger = __webpack_require__(223);

	var _logger2 = _interopRequireDefault(_logger);

	function resolver(input) {
	  if (input) {
	    var dispatch = input.dispatch;

	    if (dispatch) {
	      console.warn('redux-logger updated to 1.0.0 and old `logger` is deprecated, check out https://github.com/fcomb/redux-logger/releases/tag/1.0.0');
	      return (0, _logger2['default'])(input);
	    } else {
	      return (0, _createLogger2['default'])(input);
	    }
	  } else {
	    return (0, _createLogger2['default'])();
	  }
	}

	exports['default'] = resolver;
	module.exports = exports['default'];

/***/ },
/* 222 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	var pad = function pad(num) {
	  return ('0' + num).slice(-2);
	};

	// Use the new performance api to get better precision if available
	var timer = typeof performance !== 'undefined' && typeof performance.now === 'function' ? performance : Date;

	/**
	 * Creates logger with followed options
	 *
	 * @namespace
	 * @property {object} options - options for logger
	 * @property {string} level - console[level]
	 * @property {boolean} collapsed - is group collapsed?
	 * @property {boolean} predicate - condition which resolves logger behavior
	 */

	function createLogger() {
	  var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	  return function (_ref) {
	    var getState = _ref.getState;
	    return function (next) {
	      return function (action) {
	        var level = options.level;
	        var collapsed = options.collapsed;
	        var predicate = options.predicate;
	        var logger = options.logger;
	        var _options$transformer = options.transformer;
	        var transformer = _options$transformer === undefined ? function (state) {
	          return state;
	        } : _options$transformer;
	        var _options$timestamp = options.timestamp;
	        var timestamp = _options$timestamp === undefined ? true : _options$timestamp;
	        var _options$duration = options.duration;
	        var duration = _options$duration === undefined ? false : _options$duration;

	        var console = logger || window.console;

	        // exit if console undefined
	        if (typeof console === 'undefined') {
	          return next(action);
	        }

	        // exit early if predicate function returns false
	        if (typeof predicate === 'function' && !predicate(getState, action)) {
	          return next(action);
	        }

	        var prevState = transformer(getState());
	        var started = timer.now();
	        var returnValue = next(action);
	        var took = timer.now() - started;
	        var nextState = transformer(getState());
	        var formattedTime = '';
	        if (timestamp) {
	          var time = new Date();
	          formattedTime = ' @ ' + time.getHours() + ':' + pad(time.getMinutes()) + ':' + pad(time.getSeconds());
	        }
	        var formattedDuration = '';
	        if (duration) {
	          formattedDuration = ' in ' + took.toFixed(2) + ' ms';
	        }
	        var actionType = String(action.type);
	        var message = 'action ' + actionType + formattedTime + formattedDuration;

	        var isCollapsed = typeof collapsed === 'function' ? collapsed(getState, action) : collapsed;

	        if (isCollapsed) {
	          try {
	            console.groupCollapsed(message);
	          } catch (e) {
	            console.log(message);
	          }
	        } else {
	          try {
	            console.group(message);
	          } catch (e) {
	            console.log(message);
	          }
	        }

	        if (level) {
	          console[level]('%c prev state', 'color: #9E9E9E; font-weight: bold', prevState);
	          console[level]('%c action', 'color: #03A9F4; font-weight: bold', action);
	          console[level]('%c next state', 'color: #4CAF50; font-weight: bold', nextState);
	        } else {
	          console.log('%c prev state', 'color: #9E9E9E; font-weight: bold', prevState);
	          console.log('%c action', 'color: #03A9F4; font-weight: bold', action);
	          console.log('%c next state', 'color: #4CAF50; font-weight: bold', nextState);
	        }

	        try {
	          console.groupEnd();
	        } catch (e) {
	          console.log('—— log end ——');
	        }

	        return returnValue;
	      };
	    };
	  };
	}

	exports['default'] = createLogger;
	module.exports = exports['default'];

/***/ },
/* 223 */
/***/ function(module, exports) {

	/**
	 * Deprecated, will be removed 1.1.0
	 */

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	function logger(_ref) {
	  var getState = _ref.getState;

	  return function (next) {
	    return function (action) {
	      // exit if console undefined
	      if (typeof console === 'undefined') {
	        return next(action);
	      }

	      var prevState = getState();
	      var returnValue = next(action);
	      var nextState = getState();
	      var time = new Date();
	      var message = 'action ' + action.type + ' @ ' + time.getHours() + ':' + time.getMinutes() + ':' + time.getSeconds();

	      try {
	        console.group(message);
	      } catch (e) {
	        console.log(message);
	      }

	      console.log('%c prev state', 'color: #9E9E9E; font-weight: bold', prevState);
	      console.log('%c action', 'color: #03A9F4; font-weight: bold', action);
	      console.log('%c next state', 'color: #4CAF50; font-weight: bold', nextState);

	      try {
	        console.groupEnd();
	      } catch (e) {
	        console.log('—— log end ——');
	      }

	      return returnValue;
	    };
	  };
	}

	exports['default'] = logger;
	module.exports = exports['default'];

/***/ },
/* 224 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireDefault = __webpack_require__(1)['default'];

	Object.defineProperty(exports, '__esModule', {
		value: true
	});

	var _redux = __webpack_require__(210);

	var _list = __webpack_require__(225);

	var _list2 = _interopRequireDefault(_list);

	var _filter = __webpack_require__(226);

	var _filter2 = _interopRequireDefault(_filter);

	exports['default'] = (0, _redux.combineReducers)({
		todos: _list2['default'],
		activeFilter: _filter2['default']
	});
	module.exports = exports['default'];

/***/ },
/* 225 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _objectWithoutProperties = __webpack_require__(241)['default'];

	var _toConsumableArray = __webpack_require__(242)['default'];

	var _Object$assign = __webpack_require__(197)['default'];

	var _Object$keys = __webpack_require__(268)['default'];

	Object.defineProperty(exports, '__esModule', {
		value: true
	});

	var _constantsActionTypes = __webpack_require__(220);

	var _constantsSocketTypes = __webpack_require__(230);

	var createItem = function createItem(_ref) {
		var text = _ref.text;
		var id = _ref.id;

		var date = new Date();
		var time = date.getTime();
		return {
			id: id,
			addTime: time,
			updateTime: time,
			displayTime: date.toLocaleString(),
			status: false,
			text: text
		};
	};

	var updateItem = function updateItem(_ref2, state) {
		var id = _ref2.id;

		var other = _objectWithoutProperties(_ref2, ['id']);

		var date = new Date();
		return state.map(function (item) {
			return item.id === id ? _Object$assign({}, item, other, {
				updateTime: date.getTime(),
				displayTime: date.toLocaleString()
			}) : item;
		});
	};

	var filterItems = function filterItems(query, state) {
		return state.filter(function (item) {
			return _Object$keys(query).some(function (key) {
				return item[key] !== query[key];
			});
		});
	};

	exports['default'] = function (state, action) {
		if (state === undefined) state = [];

		switch (action.type) {
			case _constantsActionTypes.ADD_ITEM:
				return [createItem(action)].concat(_toConsumableArray(state));

			case _constantsActionTypes.DELETE_ITEM:
				return state.filter(function (item) {
					return item.id !== action.id;
				});

			case _constantsActionTypes.UPDATE_ITEM:
				return updateItem(action.data, state);

			case _constantsActionTypes.UPDATE_ITEMS:
				return state.map(function (item) {
					return _Object$assign({}, item, action.data);
				});

			case _constantsActionTypes.DELETE_ITEMS:
				return filterItems(action.query, state);

			case _constantsSocketTypes.SERVER_UPDATE:
				return action.state.todos;

			default:
				return state;
		}
	};

	module.exports = exports['default'];

/***/ },
/* 226 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
		value: true
	});

	var _constantsFilterTypes = __webpack_require__(207);

	var hashToFilter = {
		'#/': _constantsFilterTypes.SHOW_ALL,
		'#/active': _constantsFilterTypes.SHOW_ACTIVE,
		'#/completed': _constantsFilterTypes.SHOW_COMPLETED
	};

	exports['default'] = function (state, action) {
		if (state === undefined) state = _constantsFilterTypes.SHOW_ALL;

		switch (action.type) {
			case _constantsFilterTypes.FILTER_ITEMS:
				return hashToFilter[action.active] || _constantsFilterTypes.SHOW_ALL;
			default:
				return state;
		}
	};

	module.exports = exports['default'];

/***/ },
/* 227 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = __webpack_require__(196)['default'];

	Object.defineProperty(exports, '__esModule', {
		value: true
	});
	var NewTodo = function NewTodo(state, actions, props) {
		return actions;
	};

	exports.NewTodo = NewTodo;
	var Main = function Main(state, actions, props) {
		var todos = state.todos;

		return _extends({}, actions, {
			isAllCompleted: !!todos.length && todos.every(function (item) {
				return item.status;
			})
		});
	};

	exports.Main = Main;
	var Todo = function Todo(state, actions, props) {
		var todo = state.todos.filter(function (todo) {
			return todo.id === props.id;
		})[0];
		var deleteItem = actions.deleteItem;
		var updateItem = actions.updateItem;

		return _extends({
			updateItem: updateItem,
			deleteItem: deleteItem
		}, todo);
	};

	exports.Todo = Todo;
	var Todos = function Todos(state, actions, props) {
		var activeFilter = state.activeFilter;

		var todos = state.todos.filter(function (todo) {
			switch (activeFilter) {
				case 'SHOW_ALL':
					return true;

				case 'SHOW_ACTIVE':
					return !todo.status;

				case 'SHOW_COMPLETED':
					return todo.status;
			}
		}).map(function (todo) {
			return todo.id;
		});
		return _extends({}, actions, {
			todos: todos
		});
	};

	exports.Todos = Todos;
	var Filters = function Filters(state, actions, props) {
		var todos = state.todos;
		var activeFilter = state.activeFilter;

		var todoCount = todos.filter(function (item) {
			return !item.status;
		}).length;
		activeFilter = activeFilter || 'SHOW_ALL';
		return _extends({}, actions, {
			activeFilter: activeFilter,
			todoCount: todoCount,
			completedCount: todos.length - todoCount
		});
	};
	exports.Filters = Filters;

/***/ },
/* 228 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireWildcard = __webpack_require__(209)['default'];

	Object.defineProperty(exports, '__esModule', {
		value: true
	});

	var _constantsFilterTypes = __webpack_require__(207);

	var FilterTypes = _interopRequireWildcard(_constantsFilterTypes);

	var _constantsActionTypes = __webpack_require__(220);

	var ActionTypes = _interopRequireWildcard(_constantsActionTypes);

	var _constantsAPI = __webpack_require__(229);

	var _constantsSocketTypes = __webpack_require__(230);

	var matcher = function matcher(data) {
		var action = data.action;
		var state = data.state;
		var nextState = data.nextState;

		fetchByAction(action);
		switch (true) {
			case FilterTypes.hasOwnProperty(action.type):
				return ['Filters', 'Todos'];
			case action.type === ActionTypes.UPDATE_ITEM:
				return matchItem(action.data);
			case action.type === _constantsSocketTypes.SERVER_UPDATE:
				return handleWebSocket(action);
			default:
				return 'Root';
		}
	};

	exports['default'] = matcher;

	var matchItem = function matchItem(_ref) {
		var id = _ref.id;
		var text = _ref.text;

		if (!text) {
			return 'Root';
		}
		var callback = function callback(component) {
			if (component.props.id === id) {
				component.forceUpdate();
			}
		};
		return {
			name: 'Todo',
			callback: callback
		};
	};

	var fetcded = false;
	var fetchByAction = function fetchByAction(action) {
		if (!ActionTypes.hasOwnProperty(action.type) || typeof window === 'undefined') {
			return;
		}
		fetch(_constantsAPI.API_TODOS, {
			method: 'post',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(action)
		});
		fetcded = true;
	};

	var handleWebSocket = function handleWebSocket(action) {
		if (fetcded) {
			fetcded = false;
			return;
		}
		return 'Root';
	};
	module.exports = exports['default'];

/***/ },
/* 229 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	var API_TODOS = '/todos';
	exports.API_TODOS = API_TODOS;

/***/ },
/* 230 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	var SERVER_UPDATE = 'SERVER_UPDATE';
	exports.SERVER_UPDATE = SERVER_UPDATE;

/***/ },
/* 231 */,
/* 232 */,
/* 233 */,
/* 234 */,
/* 235 */,
/* 236 */,
/* 237 */,
/* 238 */,
/* 239 */,
/* 240 */,
/* 241 */
/***/ function(module, exports) {

	"use strict";

	exports["default"] = function (obj, keys) {
	  var target = {};

	  for (var i in obj) {
	    if (keys.indexOf(i) >= 0) continue;
	    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
	    target[i] = obj[i];
	  }

	  return target;
	};

	exports.__esModule = true;

/***/ },
/* 242 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _Array$from = __webpack_require__(243)["default"];

	exports["default"] = function (arr) {
	  if (Array.isArray(arr)) {
	    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

	    return arr2;
	  } else {
	    return _Array$from(arr);
	  }
	};

	exports.__esModule = true;

/***/ },
/* 243 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(244), __esModule: true };

/***/ },
/* 244 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(245);
	__webpack_require__(261);
	module.exports = __webpack_require__(173).Array.from;

/***/ },
/* 245 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $at  = __webpack_require__(246)(true);

	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(248)(String, 'String', function(iterated){
	  this._t = String(iterated); // target
	  this._i = 0;                // next index
	// 21.1.5.2.1 %StringIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , index = this._i
	    , point;
	  if(index >= O.length)return {value: undefined, done: true};
	  point = $at(O, index);
	  this._i += point.length;
	  return {value: point, done: false};
	});

/***/ },
/* 246 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(247)
	  , defined   = __webpack_require__(169);
	// true  -> String#at
	// false -> String#codePointAt
	module.exports = function(TO_STRING){
	  return function(that, pos){
	    var s = String(defined(that))
	      , i = toInteger(pos)
	      , l = s.length
	      , a, b;
	    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
	      ? TO_STRING ? s.charAt(i) : a
	      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
	};

/***/ },
/* 247 */
/***/ function(module, exports) {

	// 7.1.4 ToInteger
	var ceil  = Math.ceil
	  , floor = Math.floor;
	module.exports = function(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ },
/* 248 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY        = __webpack_require__(249)
	  , $export        = __webpack_require__(171)
	  , redefine       = __webpack_require__(250)
	  , hide           = __webpack_require__(251)
	  , has            = __webpack_require__(254)
	  , Iterators      = __webpack_require__(255)
	  , $iterCreate    = __webpack_require__(256)
	  , setToStringTag = __webpack_require__(257)
	  , getProto       = __webpack_require__(164).getProto
	  , ITERATOR       = __webpack_require__(258)('iterator')
	  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
	  , FF_ITERATOR    = '@@iterator'
	  , KEYS           = 'keys'
	  , VALUES         = 'values';

	var returnThis = function(){ return this; };

	module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
	  $iterCreate(Constructor, NAME, next);
	  var getMethod = function(kind){
	    if(!BUGGY && kind in proto)return proto[kind];
	    switch(kind){
	      case KEYS: return function keys(){ return new Constructor(this, kind); };
	      case VALUES: return function values(){ return new Constructor(this, kind); };
	    } return function entries(){ return new Constructor(this, kind); };
	  };
	  var TAG        = NAME + ' Iterator'
	    , DEF_VALUES = DEFAULT == VALUES
	    , VALUES_BUG = false
	    , proto      = Base.prototype
	    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
	    , $default   = $native || getMethod(DEFAULT)
	    , methods, key;
	  // Fix native
	  if($native){
	    var IteratorPrototype = getProto($default.call(new Base));
	    // Set @@toStringTag to native iterators
	    setToStringTag(IteratorPrototype, TAG, true);
	    // FF fix
	    if(!LIBRARY && has(proto, FF_ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
	    // fix Array#{values, @@iterator}.name in V8 / FF
	    if(DEF_VALUES && $native.name !== VALUES){
	      VALUES_BUG = true;
	      $default = function values(){ return $native.call(this); };
	    }
	  }
	  // Define iterator
	  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
	    hide(proto, ITERATOR, $default);
	  }
	  // Plug for library
	  Iterators[NAME] = $default;
	  Iterators[TAG]  = returnThis;
	  if(DEFAULT){
	    methods = {
	      values:  DEF_VALUES  ? $default : getMethod(VALUES),
	      keys:    IS_SET      ? $default : getMethod(KEYS),
	      entries: !DEF_VALUES ? $default : getMethod('entries')
	    };
	    if(FORCED)for(key in methods){
	      if(!(key in proto))redefine(proto, key, methods[key]);
	    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
	  }
	  return methods;
	};

/***/ },
/* 249 */
/***/ function(module, exports) {

	module.exports = true;

/***/ },
/* 250 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(251);

/***/ },
/* 251 */
/***/ function(module, exports, __webpack_require__) {

	var $          = __webpack_require__(164)
	  , createDesc = __webpack_require__(252);
	module.exports = __webpack_require__(253) ? function(object, key, value){
	  return $.setDesc(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },
/* 252 */
/***/ function(module, exports) {

	module.exports = function(bitmap, value){
	  return {
	    enumerable  : !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable    : !(bitmap & 4),
	    value       : value
	  };
	};

/***/ },
/* 253 */
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(176)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 254 */
/***/ function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ },
/* 255 */
/***/ function(module, exports) {

	module.exports = {};

/***/ },
/* 256 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $              = __webpack_require__(164)
	  , descriptor     = __webpack_require__(252)
	  , setToStringTag = __webpack_require__(257)
	  , IteratorPrototype = {};

	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(251)(IteratorPrototype, __webpack_require__(258)('iterator'), function(){ return this; });

	module.exports = function(Constructor, NAME, next){
	  Constructor.prototype = $.create(IteratorPrototype, {next: descriptor(1, next)});
	  setToStringTag(Constructor, NAME + ' Iterator');
	};

/***/ },
/* 257 */
/***/ function(module, exports, __webpack_require__) {

	var def = __webpack_require__(164).setDesc
	  , has = __webpack_require__(254)
	  , TAG = __webpack_require__(258)('toStringTag');

	module.exports = function(it, tag, stat){
	  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
	};

/***/ },
/* 258 */
/***/ function(module, exports, __webpack_require__) {

	var store  = __webpack_require__(259)('wks')
	  , uid    = __webpack_require__(260)
	  , Symbol = __webpack_require__(172).Symbol;
	module.exports = function(name){
	  return store[name] || (store[name] =
	    Symbol && Symbol[name] || (Symbol || uid)('Symbol.' + name));
	};

/***/ },
/* 259 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(172)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 260 */
/***/ function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 261 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var ctx         = __webpack_require__(174)
	  , $export     = __webpack_require__(171)
	  , toObject    = __webpack_require__(201)
	  , call        = __webpack_require__(262)
	  , isArrayIter = __webpack_require__(263)
	  , toLength    = __webpack_require__(264)
	  , getIterFn   = __webpack_require__(265);
	$export($export.S + $export.F * !__webpack_require__(267)(function(iter){ Array.from(iter); }), 'Array', {
	  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
	  from: function from(arrayLike/*, mapfn = undefined, thisArg = undefined*/){
	    var O       = toObject(arrayLike)
	      , C       = typeof this == 'function' ? this : Array
	      , $$      = arguments
	      , $$len   = $$.length
	      , mapfn   = $$len > 1 ? $$[1] : undefined
	      , mapping = mapfn !== undefined
	      , index   = 0
	      , iterFn  = getIterFn(O)
	      , length, result, step, iterator;
	    if(mapping)mapfn = ctx(mapfn, $$len > 2 ? $$[2] : undefined, 2);
	    // if object isn't iterable or it's array with default iterator - use simple case
	    if(iterFn != undefined && !(C == Array && isArrayIter(iterFn))){
	      for(iterator = iterFn.call(O), result = new C; !(step = iterator.next()).done; index++){
	        result[index] = mapping ? call(iterator, mapfn, [step.value, index], true) : step.value;
	      }
	    } else {
	      length = toLength(O.length);
	      for(result = new C(length); length > index; index++){
	        result[index] = mapping ? mapfn(O[index], index) : O[index];
	      }
	    }
	    result.length = index;
	    return result;
	  }
	});


/***/ },
/* 262 */
/***/ function(module, exports, __webpack_require__) {

	// call something on iterator step with safe closing on error
	var anObject = __webpack_require__(185);
	module.exports = function(iterator, fn, value, entries){
	  try {
	    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
	  // 7.4.6 IteratorClose(iterator, completion)
	  } catch(e){
	    var ret = iterator['return'];
	    if(ret !== undefined)anObject(ret.call(iterator));
	    throw e;
	  }
	};

/***/ },
/* 263 */
/***/ function(module, exports, __webpack_require__) {

	// check on default Array iterator
	var Iterators  = __webpack_require__(255)
	  , ITERATOR   = __webpack_require__(258)('iterator')
	  , ArrayProto = Array.prototype;

	module.exports = function(it){
	  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
	};

/***/ },
/* 264 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(247)
	  , min       = Math.min;
	module.exports = function(it){
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ },
/* 265 */
/***/ function(module, exports, __webpack_require__) {

	var classof   = __webpack_require__(266)
	  , ITERATOR  = __webpack_require__(258)('iterator')
	  , Iterators = __webpack_require__(255);
	module.exports = __webpack_require__(173).getIteratorMethod = function(it){
	  if(it != undefined)return it[ITERATOR]
	    || it['@@iterator']
	    || Iterators[classof(it)];
	};

/***/ },
/* 266 */
/***/ function(module, exports, __webpack_require__) {

	// getting tag from 19.1.3.6 Object.prototype.toString()
	var cof = __webpack_require__(168)
	  , TAG = __webpack_require__(258)('toStringTag')
	  // ES3 wrong here
	  , ARG = cof(function(){ return arguments; }()) == 'Arguments';

	module.exports = function(it){
	  var O, T, B;
	  return it === undefined ? 'Undefined' : it === null ? 'Null'
	    // @@toStringTag case
	    : typeof (T = (O = Object(it))[TAG]) == 'string' ? T
	    // builtinTag case
	    : ARG ? cof(O)
	    // ES3 arguments fallback
	    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
	};

/***/ },
/* 267 */
/***/ function(module, exports, __webpack_require__) {

	var ITERATOR     = __webpack_require__(258)('iterator')
	  , SAFE_CLOSING = false;

	try {
	  var riter = [7][ITERATOR]();
	  riter['return'] = function(){ SAFE_CLOSING = true; };
	  Array.from(riter, function(){ throw 2; });
	} catch(e){ /* empty */ }

	module.exports = function(exec, skipClosing){
	  if(!skipClosing && !SAFE_CLOSING)return false;
	  var safe = false;
	  try {
	    var arr  = [7]
	      , iter = arr[ITERATOR]();
	    iter.next = function(){ safe = true; };
	    arr[ITERATOR] = function(){ return iter; };
	    exec(arr);
	  } catch(e){ /* empty */ }
	  return safe;
	};

/***/ },
/* 268 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(269), __esModule: true };

/***/ },
/* 269 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(270);
	module.exports = __webpack_require__(173).Object.keys;

/***/ },
/* 270 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 Object.keys(O)
	var toObject = __webpack_require__(201);

	__webpack_require__(170)('keys', function($keys){
	  return function keys(it){
	    return $keys(toObject(it));
	  };
	});

/***/ }
]);