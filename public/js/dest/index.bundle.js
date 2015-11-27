webpackJsonp([1],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireDefault = __webpack_require__(15)['default'];

	var _react = __webpack_require__(13);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(182);

	var _containersRoot = __webpack_require__(148);

	var _containersRoot2 = _interopRequireDefault(_containersRoot);

	var _store = __webpack_require__(154);

	var _store2 = _interopRequireDefault(_store);

	var _store$actions = _store2['default'].actions;
	var updateTodos = _store$actions.updateTodos;
	var filterItems = _store$actions.filterItems;

	var initialState = JSON.parse(document.getElementById('initialData').innerHTML);
	_store2['default'].replaceState(initialState);

	(0, _reactDom.render)(_react2['default'].createElement(_containersRoot2['default'], null), document.getElementById('todoapp'));

	var dispatchFilter = function dispatchFilter() {
		return filterItems(location.hash);
	};

	io().on('change', updateTodos);

	document.addEventListener('DOMContentLoaded', dispatchFilter);
	window.addEventListener('hashchange', dispatchFilter);

/***/ },
/* 1 */,
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
/* 15 */
/***/ function(module, exports) {

	"use strict";

	exports["default"] = function (obj) {
	  return obj && obj.__esModule ? obj : {
	    "default": obj
	  };
	};

	exports.__esModule = true;

/***/ },
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */
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
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */
/***/ function(module, exports) {

	"use strict";

	exports["default"] = function (instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};

	exports.__esModule = true;

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _Object$defineProperty = __webpack_require__(88)["default"];

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
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _Object$getOwnPropertyDescriptor = __webpack_require__(89)["default"];

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
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _Object$create = __webpack_require__(156)["default"];

	var _Object$setPrototypeOf = __webpack_require__(159)["default"];

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
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
		value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(13);

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
	var $component = {};
	var $matcher = undefined;

	var config = function config(_ref) {
		var getState = _ref.getState;
		var selectors = _ref.selectors;
		var actions = _ref.actions;
		var matcher = _ref.matcher;

		addSelector(selectors);
		$getState = getState;
		$actions = actions;
		$matcher = matcher;
	};

	exports.config = config;
	var onAction = function onAction(data) {
		if (!isFn($matcher)) {
			return;
		}
		var result = $matcher(data);
		switch (true) {
			case isObj(result):
				var name = result.name,
				    callback = result.callback;

				eachComponent(name, callback);
				break;
			case isStr(result):
				renderCompoent(result);
				break;
			case isArr(result):
				result.forEach(renderCompoent);
				break;
		}
	};

	exports.onAction = onAction;
	var updater = {
		DID_UPDATE: function DID_UPDATE(data) {
			onAction(data);
			return data;
		}
	};

	exports.updater = updater;
	var bindReducer = function bindReducer(reducer) {
		return function (state, actions) {
			var nextState = reducer(state, actions);
			onAction({
				state: state,
				actions: actions
			});
			return nextState;
		};
	};

	exports.bindReducer = bindReducer;
	// selector
	var addSelector = function addSelector(obj) {
		Object.keys(obj).forEach(function (key) {
			var query = obj[key];
			if (isFn(query)) {
				$selectors[key] = function (props) {
					for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
						args[_key - 1] = arguments[_key];
					}

					return query.apply(undefined, [$getState(), $actions, props].concat(args));
				};
			}
		});
	};

	var addComponent = function addComponent(name, component) {
		if (!isArr($component[name])) {
			$component[name] = [];
		}
		$component[name].push(component);
	};

	var removeComponent = function removeComponent(name, component) {
		if (!isArr($component[name])) {
			return;
		}
		var index = $component.indexOf(component);
		if (index !== -1) {
			$component.splice(i, 1);
		}
	};

	var getComponent = function getComponent(name) {
		var components = $component[name];
		return isArr(components) ? components : [];
	};

	var eachComponent = function eachComponent(name, fn) {
		getComponent(name).forEach(fn);
	};

	var renderCompoent = function renderCompoent(name) {
		eachComponent(name, function (component) {
			return component.forceUpdate();
		});
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
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _Object$assign = __webpack_require__(87)["default"];

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
/* 32 */
/***/ function(module, exports) {

	var core = module.exports = {version: '1.2.6'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
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
/* 54 */
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
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(174)
	  , core      = __webpack_require__(32)
	  , ctx       = __webpack_require__(90)
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
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	// most Object methods by ES6 should accept primitives
	var $export = __webpack_require__(55)
	  , core    = __webpack_require__(32)
	  , fails   = __webpack_require__(92);
	module.exports = function(KEY, exec){
	  var fn  = (core.Object || {})[KEY] || Object[KEY]
	    , exp = {};
	  exp[KEY] = exec(fn);
	  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
	};

/***/ },
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
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = __webpack_require__(31)['default'];

	Object.defineProperty(exports, '__esModule', {
		value: true
	});
	var hashToFilter = {
		'#/': 'SHOW_ALL',
		'#/active': 'SHOW_ACTIVE',
		'#/completed': 'SHOW_COMPLETED'
	};

	var filterItems = function filterItems(active) {
		return function (state) {
			return _extends({}, state, {
				activeFilter: hashToFilter[active || 'SHOW_ALL']
			});
		};
	};
	exports.filterItems = filterItems;

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _extends = __webpack_require__(31)["default"];

	var _objectWithoutProperties = __webpack_require__(162)["default"];

	var _Object$assign = __webpack_require__(87)["default"];

	var _Object$keys = __webpack_require__(158)["default"];

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var $createItem = function $createItem(text) {
		var date = new Date();
		var time = date.getTime();
		return {
			id: time,
			addTime: time,
			updateTime: time,
			diplayTime: date.toLocaleString(),
			status: false,
			text: text
		};
	};

	var $updateItem = function $updateItem(_ref, state) {
		var id = _ref.id;

		var other = _objectWithoutProperties(_ref, ["id"]);

		var date = new Date();
		return state.map(function (item) {
			return item.id === id ? _Object$assign({}, item, other, {
				updateTime: date.getTime(),
				displayTime: date.toLocaleString()
			}) : item;
		});
	};

	var $filterItems = function $filterItems(query, state) {
		return state.filter(function (item) {
			return _Object$keys(query).some(function (key) {
				return item[key] !== query[key];
			});
		});
	};

	var addItem = function addItem(text) {
		return function (state) {
			return _extends({}, state, {
				todos: [$createItem(text)].concat(state.todos)
			});
		};
	};

	exports.addItem = addItem;
	var deleteItem = function deleteItem(id) {
		return function (state) {
			return _extends({}, state, {
				todos: state.todos.filter(function (item) {
					return item.id !== id;
				})
			});
		};
	};

	exports.deleteItem = deleteItem;
	var updateItem = function updateItem(data) {
		return function (state) {
			return _extends({}, state, {
				todos: $updateItem(data, state.todos)
			});
		};
	};

	exports.updateItem = updateItem;
	var updateItems = function updateItems(data) {
		return function (state) {
			return _extends({}, state, {
				todos: state.todos.map(function (item) {
					return _Object$assign({}, item, data);
				})
			});
		};
	};

	exports.updateItems = updateItems;
	var deleteItems = function deleteItems(query) {
		return function (state) {
			return _extends({}, state, {
				todos: $filterItems(query, state.todos)
			});
		};
	};
	exports.deleteItems = deleteItems;

/***/ },
/* 86 */,
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(163), __esModule: true };

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(165), __esModule: true };

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(166), __esModule: true };

/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(170);
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
/* 91 */
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 92 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(172);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 94 */
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(93)
	  , defined = __webpack_require__(91);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(91);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ },
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
/* 143 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _get = __webpack_require__(25)['default'];

	var _inherits = __webpack_require__(26)['default'];

	var _createClass = __webpack_require__(24)['default'];

	var _classCallCheck = __webpack_require__(23)['default'];

	var _interopRequireDefault = __webpack_require__(15)['default'];

	Object.defineProperty(exports, '__esModule', {
		value: true
	});

	var _react = __webpack_require__(13);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(57);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _reactProps = __webpack_require__(27);

	var Filters = (function (_Component) {
		_inherits(Filters, _Component);

		function Filters() {
			_classCallCheck(this, _Filters);

			_get(Object.getPrototypeOf(_Filters.prototype), 'constructor', this).apply(this, arguments);
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
				var _this = this;

				var getClassName = function getClassName(filterType) {
					return (0, _classnames2['default'])({
						selected: _this.props.activeFilter === filterType
					});
				};
				var clearCompleted = function clearCompleted() {
					return _this.props.deleteItems({
						status: true
					});
				};
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
								{ href: '#/', className: getClassName('SHOW_ALL') },
								'All'
							)
						),
						_react2['default'].createElement(
							'li',
							null,
							_react2['default'].createElement(
								'a',
								{ href: '#/active', className: getClassName('SHOW_ACTIVE') },
								'Active'
							)
						),
						_react2['default'].createElement(
							'li',
							null,
							_react2['default'].createElement(
								'a',
								{ href: '#/completed', className: getClassName('SHOW_COMPLETED') },
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
		}]);

		var _Filters = Filters;
		Filters = (0, _reactProps.injectProps)()(Filters) || Filters;
		return Filters;
	})(_react.Component);

	exports['default'] = Filters;

	Filters.propTypes = {
		deleteItems: _react.PropTypes.func.isRequired,
		todoCount: _react.PropTypes.number.isRequired,
		completedCount: _react.PropTypes.number.isRequired,
		activeFilter: _react.PropTypes.string.isRequired
	};
	module.exports = exports['default'];

/***/ },
/* 144 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _get = __webpack_require__(25)['default'];

	var _inherits = __webpack_require__(26)['default'];

	var _createClass = __webpack_require__(24)['default'];

	var _classCallCheck = __webpack_require__(23)['default'];

	var _interopRequireDefault = __webpack_require__(15)['default'];

	Object.defineProperty(exports, '__esModule', {
		value: true
	});

	var _react = __webpack_require__(13);

	var _react2 = _interopRequireDefault(_react);

	var _Todos = __webpack_require__(147);

	var _Todos2 = _interopRequireDefault(_Todos);

	var _reactProps = __webpack_require__(27);

	var Main = (function (_Component) {
		_inherits(Main, _Component);

		function Main() {
			_classCallCheck(this, _Main);

			_get(Object.getPrototypeOf(_Main.prototype), 'constructor', this).apply(this, arguments);
		}

		_createClass(Main, [{
			key: 'render',
			value: function render() {
				var _props = this.props;
				var updateItems = _props.updateItems;
				var isAllCompleted = _props.isAllCompleted;

				var toggleAll = function toggleAll(e) {
					return updateItems({
						status: e.currentTarget.checked
					});
				};
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
		}]);

		var _Main = Main;
		Main = (0, _reactProps.injectProps)()(Main) || Main;
		return Main;
	})(_react.Component);

	exports['default'] = Main;

	Main.propTypes = {
		updateItems: _react.PropTypes.func.isRequired,
		isAllCompleted: _react.PropTypes.bool.isRequired
	};
	module.exports = exports['default'];

/***/ },
/* 145 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _get = __webpack_require__(25)['default'];

	var _inherits = __webpack_require__(26)['default'];

	var _createClass = __webpack_require__(24)['default'];

	var _classCallCheck = __webpack_require__(23)['default'];

	var _interopRequireDefault = __webpack_require__(15)['default'];

	Object.defineProperty(exports, '__esModule', {
		value: true
	});

	var _react = __webpack_require__(13);

	var _react2 = _interopRequireDefault(_react);

	var _reactProps = __webpack_require__(27);

	var ENTER_KEY = 13;
	var ESCAPE_KEY = 27;

	var NewTodo = (function (_Component) {
		_inherits(NewTodo, _Component);

		function NewTodo() {
			_classCallCheck(this, _NewTodo);

			_get(Object.getPrototypeOf(_NewTodo.prototype), 'constructor', this).apply(this, arguments);
		}

		_createClass(NewTodo, [{
			key: 'checkInput',
			value: function checkInput(input) {
				var title = input.value;
				if (title) {
					this.props.addItem(title);
					input.value = '';
				}
			}
		}, {
			key: 'handleBlur',
			value: function handleBlur(e) {
				this.checkInput(e.currentTarget);
			}
		}, {
			key: 'handleKeyup',
			value: function handleKeyup(e) {
				var keyCode = e.keyCode;
				if (keyCode === ENTER_KEY || keyCode === ESCAPE_KEY) {
					this.checkInput(e.currentTarget);
				}
			}
		}, {
			key: 'render',
			value: function render() {
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
						onBlur: this.handleBlur.bind(this),
						onKeyUp: this.handleKeyup.bind(this) })
				);
			}
		}]);

		var _NewTodo = NewTodo;
		NewTodo = (0, _reactProps.injectProps)()(NewTodo) || NewTodo;
		return NewTodo;
	})(_react.Component);

	exports['default'] = NewTodo;

	NewTodo.propTypes = {
		addItem: _react.PropTypes.func.isRequired
	};
	module.exports = exports['default'];

/***/ },
/* 146 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _get = __webpack_require__(25)['default'];

	var _inherits = __webpack_require__(26)['default'];

	var _createClass = __webpack_require__(24)['default'];

	var _classCallCheck = __webpack_require__(23)['default'];

	var _interopRequireDefault = __webpack_require__(15)['default'];

	Object.defineProperty(exports, '__esModule', {
		value: true
	});

	var _react = __webpack_require__(13);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(57);

	var _classnames2 = _interopRequireDefault(_classnames);

	var ENTER_KEY = 13;
	var ESCAPE_KEY = 27;

	var Todo = (function (_Component) {
		_inherits(Todo, _Component);

		function Todo(props, context) {
			_classCallCheck(this, Todo);

			_get(Object.getPrototypeOf(Todo.prototype), 'constructor', this).call(this, props, context);
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
					this.props.deleteItem();
				}
				this.setState({
					onEdit: false
				});
			}
		}, {
			key: 'handleBlur',
			value: function handleBlur(e) {
				this.checkEditor(e.currentTarget);
			}
		}, {
			key: 'handleKeyup',
			value: function handleKeyup(e) {
				var keyCode = e.keyCode;
				var currentTarget = e.currentTarget;

				if (keyCode === ENTER_KEY || keyCode === ESCAPE_KEY) {
					this.checkEditor(currentTarget);
				}
			}
		}, {
			key: 'handleDblclick',
			value: function handleDblclick() {
				var editor = this.refs.editor;
				editor.value = this.props.text;
				this.setState({
					onEdit: true
				});
				setTimeout(editor.focus.bind(editor), 1);
			}
		}, {
			key: 'toggleTodo',
			value: function toggleTodo(e) {
				this.updateItem({
					status: e.currentTarget.checked
				});
			}
		}, {
			key: 'updateItem',
			value: function updateItem() {
				var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

				this.props.updateItem(options);
			}
		}, {
			key: 'render',
			value: function render() {
				var _props = this.props;
				var id = _props.id;
				var text = _props.text;
				var diplayTime = _props.diplayTime;
				var deleteItem = _props.deleteItem;
				var status = _props.status;

				var className = (0, _classnames2['default'])({
					completed: status,
					editing: this.state.onEdit
				});
				return _react2['default'].createElement(
					'li',
					{ key: id, className: className, title: diplayTime },
					_react2['default'].createElement(
						'div',
						{ className: 'view' },
						_react2['default'].createElement('input', { className: 'toggle', type: 'checkbox', onChange: this.toggleTodo.bind(this), checked: status }),
						_react2['default'].createElement(
							'label',
							{ onDoubleClick: this.handleDblclick.bind(this) },
							text
						),
						_react2['default'].createElement('button', { className: 'destroy', onClick: deleteItem })
					),
					_react2['default'].createElement('input', { className: 'edit', onBlur: this.handleBlur.bind(this), onKeyUp: this.handleKeyup.bind(this), ref: 'editor' })
				);
			}
		}]);

		return Todo;
	})(_react.Component);

	exports['default'] = Todo;

	Todo.propTypes = {
		id: _react.PropTypes.any.isRequired,
		text: _react.PropTypes.string.isRequired,
		status: _react.PropTypes.bool.isRequired,
		updateItem: _react.PropTypes.func.isRequired,
		deleteItem: _react.PropTypes.func.isRequired
	};
	module.exports = exports['default'];

/***/ },
/* 147 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _get = __webpack_require__(25)['default'];

	var _inherits = __webpack_require__(26)['default'];

	var _createClass = __webpack_require__(24)['default'];

	var _classCallCheck = __webpack_require__(23)['default'];

	var _extends = __webpack_require__(31)['default'];

	var _interopRequireDefault = __webpack_require__(15)['default'];

	Object.defineProperty(exports, '__esModule', {
		value: true
	});

	var _react = __webpack_require__(13);

	var _react2 = _interopRequireDefault(_react);

	var _Todo = __webpack_require__(146);

	var _Todo2 = _interopRequireDefault(_Todo);

	var _reactProps = __webpack_require__(27);

	var Todos = (function (_React$Component) {
		_inherits(Todos, _React$Component);

		function Todos() {
			_classCallCheck(this, _Todos);

			_get(Object.getPrototypeOf(_Todos.prototype), 'constructor', this).apply(this, arguments);
		}

		_createClass(Todos, [{
			key: 'render',
			value: function render() {
				var _props = this.props;
				var deleteItem = _props.deleteItem;
				var updateItem = _props.updateItem;
				var todos = _props.todos;

				return _react2['default'].createElement(
					'ul',
					{ id: 'todo-list' },
					todos.map(function (todo) {
						return _react2['default'].createElement(_Todo2['default'], _extends({
							key: todo.id,
							deleteItem: function () {
								return deleteItem(todo.id);
							},
							updateItem: function (data) {
								return updateItem(_extends({}, data, {
									id: todo.id
								}));
							}
						}, todo));
					})
				);
			}
		}]);

		var _Todos = Todos;
		Todos = (0, _reactProps.injectProps)()(Todos) || Todos;
		return Todos;
	})(_react2['default'].Component);

	exports['default'] = Todos;

	Todos.propTypes = {
		todos: _react.PropTypes.arrayOf(_react.PropTypes.object.isRequired),
		updateItem: _react.PropTypes.func.isRequired,
		deleteItem: _react.PropTypes.func.isRequired
	};
	module.exports = exports['default'];

/***/ },
/* 148 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _get = __webpack_require__(25)['default'];

	var _inherits = __webpack_require__(26)['default'];

	var _createClass = __webpack_require__(24)['default'];

	var _classCallCheck = __webpack_require__(23)['default'];

	var _interopRequireDefault = __webpack_require__(15)['default'];

	Object.defineProperty(exports, '__esModule', {
		value: true
	});

	var _react = __webpack_require__(13);

	var _react2 = _interopRequireDefault(_react);

	var _componentsNewTodo = __webpack_require__(145);

	var _componentsNewTodo2 = _interopRequireDefault(_componentsNewTodo);

	var _componentsMain = __webpack_require__(144);

	var _componentsMain2 = _interopRequireDefault(_componentsMain);

	var _componentsFilters = __webpack_require__(143);

	var _componentsFilters2 = _interopRequireDefault(_componentsFilters);

	var _reactProps = __webpack_require__(27);

	var Root = (function (_Component) {
		_inherits(Root, _Component);

		function Root() {
			_classCallCheck(this, _Root);

			_get(Object.getPrototypeOf(_Root.prototype), 'constructor', this).apply(this, arguments);
		}

		_createClass(Root, [{
			key: 'render',
			value: function render() {
				return _react2['default'].createElement(
					'div',
					null,
					_react2['default'].createElement(_componentsNewTodo2['default'], { addItem: 'aasdfasdf' }),
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
/* 149 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _defaults = __webpack_require__(160)['default'];

	var _interopExportWildcard = __webpack_require__(161)['default'];

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _todos = __webpack_require__(85);

	_defaults(exports, _interopExportWildcard(_todos, _defaults));

	var _activeFilter = __webpack_require__(84);

	_defaults(exports, _interopExportWildcard(_activeFilter, _defaults));

/***/ },
/* 150 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireWildcard = __webpack_require__(54)['default'];

	Object.defineProperty(exports, '__esModule', {
		value: true
	});

	var _handlersActiveFilter = __webpack_require__(84);

	var filter = _interopRequireWildcard(_handlersActiveFilter);

	var matcher = function matcher(data) {
		var key = data.key;

		switch (true) {
			case filter.hasOwnProperty(key):
				return ['Filters', 'Todos'];
			default:
				return 'Root';
		}
	};

	exports['default'] = matcher;
	module.exports = exports['default'];

/***/ },
/* 151 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireWildcard = __webpack_require__(54)['default'];

	Object.defineProperty(exports, '__esModule', {
		value: true
	});

	var _handlersTodos = __webpack_require__(85);

	var ActionTypes = _interopRequireWildcard(_handlersTodos);

	var API_TODOS = '/todos';

	var WILL_UPDATE = function WILL_UPDATE(data) {
		var key = data.key;
		var value = data.value;

		if (ActionTypes.hasOwnProperty(key)) {
			fetch(API_TODOS, {
				method: 'post',
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({ key: key, value: value })
			});
		}
		return data;
	};
	exports.WILL_UPDATE = WILL_UPDATE;

/***/ },
/* 152 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _extends = __webpack_require__(31)["default"];

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var updateTodos = function updateTodos(data) {
		return function (state) {
			return _extends({}, state, {
				todos: data.todos
			});
		};
	};
	exports.updateTodos = updateTodos;

/***/ },
/* 153 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = __webpack_require__(31)['default'];

	Object.defineProperty(exports, '__esModule', {
		value: true
	});
	var stateToProps = function stateToProps(state) {
		var todos = state.todos;
		var activeFilter = state.activeFilter;

		return {
			activeFilter: activeFilter,
			todos: todos.filter(function (todo) {
				switch (activeFilter) {
					case 'SHOW_ALL':
						return true;

					case 'SHOW_ACTIVE':
						return !todo.status;

					case 'SHOW_COMPLETED':
						return todo.status;
				}
			}),
			isAllCompleted: !!todos.length && todos.every(function (item) {
				return item.status;
			}),
			todoCount: todos.filter(function (item) {
				return !item.status;
			}).length,
			completedCount: todos.filter(function (item) {
				return item.status;
			}).length
		};
	};

	exports.stateToProps = stateToProps;
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
	var Todos = function Todos(state, actions, props) {
		var todos = state.todos;
		var activeFilter = state.activeFilter;

		return _extends({}, actions, {
			todos: todos.filter(function (todo) {
				switch (activeFilter) {
					case 'SHOW_ALL':
						return true;

					case 'SHOW_ACTIVE':
						return !todo.status;

					case 'SHOW_COMPLETED':
						return todo.status;
				}
			})
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
/* 154 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireDefault = __webpack_require__(15)['default'];

	var _interopRequireWildcard = __webpack_require__(54)['default'];

	Object.defineProperty(exports, '__esModule', {
		value: true
	});

	var _refer = __webpack_require__(86);

	var _referLogger = __webpack_require__(155);

	var _referLogger2 = _interopRequireDefault(_referLogger);

	var _handlers = __webpack_require__(149);

	var handlers = _interopRequireWildcard(_handlers);

	var _middlewaresServer = __webpack_require__(152);

	var server = _interopRequireWildcard(_middlewaresServer);

	var _middlewaresRestful = __webpack_require__(151);

	var restful = _interopRequireWildcard(_middlewaresRestful);

	var _reactProps = __webpack_require__(27);

	var _selectors = __webpack_require__(153);

	var selectors = _interopRequireWildcard(_selectors);

	var _matchers = __webpack_require__(150);

	var _matchers2 = _interopRequireDefault(_matchers);

	var logger = (0, _referLogger2['default'])({
		debug: true
	});

	var handlerList = [];
	if (typeof window === 'undefined') {
		handlerList = handlers;
	} else {
		handlerList = [server, restful, logger, _reactProps.updater, handlers];
	}

	var store = (0, _refer.createStore)(handlerList);

	var getState = store.getState;
	var actions = store.actions;

	(0, _reactProps.config)({
		getState: getState,
		actions: actions,
		selectors: selectors,
		matcher: _matchers2['default']
	});

	exports['default'] = store;
	module.exports = exports['default'];

/***/ },
/* 155 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	(function webpackUniversalModuleDefinition(root, factory) {
		if (true) module.exports = factory();else if (typeof define === 'function' && define.amd) define([], factory);else if (typeof exports === 'object') exports["ReferLogger"] = factory();else root["ReferLogger"] = factory();
	})(undefined, function () {
		return (/******/(function (modules) {
				// webpackBootstrap
				/******/ // The module cache
				/******/var installedModules = {};

				/******/ // The require function
				/******/function __webpack_require__(moduleId) {

					/******/ // Check if module is in cache
					/******/if (installedModules[moduleId])
						/******/return installedModules[moduleId].exports;

					/******/ // Create a new module (and put it into the cache)
					/******/var module = installedModules[moduleId] = {
						/******/exports: {},
						/******/id: moduleId,
						/******/loaded: false
						/******/ };

					/******/ // Execute the module function
					/******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

					/******/ // Flag the module as loaded
					/******/module.loaded = true;

					/******/ // Return the exports of the module
					/******/return module.exports;
					/******/
				}

				/******/ // expose the modules object (__webpack_modules__)
				/******/__webpack_require__.m = modules;

				/******/ // expose the module cache
				/******/__webpack_require__.c = installedModules;

				/******/ // __webpack_public_path__
				/******/__webpack_require__.p = "";

				/******/ // Load entry module and return exports
				/******/return __webpack_require__(0);
				/******/
			})(
			/************************************************************************/
			/******/[
			/* 0 */
			function (module, exports) {

				'use strict';

				Object.defineProperty(exports, '__esModule', {
					value: true
				});
				var attr = 'info' in console ? 'info' : "log";
				var pad = function pad(num) {
					return ('0' + num).slice(-2);
				};

				var timeStore = {};
				var getTime = typeof performance !== 'undefined' ? function () {
					return performance.now();
				} : function () {
					return new Date().getTime();
				};

				var createLogger = function createLogger(_ref) {
					var _ref$scope = _ref.scope;
					var scope = _ref$scope === undefined ? "ROOT" : _ref$scope;
					var debug = _ref.debug;

					var logger = {
						DISPATCH: function DISPATCH(data) {
							timeStore[scope] = getTime();
							return data;
						},
						DID_UPDATE: function DID_UPDATE(data) {
							var key = data.key;
							var value = data.value;
							var currentState = data.currentState;
							var nextState = data.nextState;

							var time = new Date();
							var formattedTime = time.getHours() + ':' + pad(time.getMinutes()) + ':' + pad(time.getSeconds());
							var takeTime = (getTime() - timeStore[scope]).toFixed(2);
							var message = scope + ': action [' + key + '] end at ' + formattedTime + ', take ' + takeTime + 'ms';

							try {
								console.groupCollapsed(message);
							} catch (e) {
								try {
									console.group(message);
								} catch (e) {
									console.log(message);
								}
							}

							console[attr]('%c value', 'color: #03A9F4; font-weight: bold', value);
							console[attr]('%c prev state', 'color: #9E9E9E; font-weight: bold', currentState);
							console[attr]('%c next state', 'color: #4CAF50; font-weight: bold', nextState);

							try {
								console.groupEnd();
							} catch (e) {
								console.log('-- log end --');
							}

							return data;
						},
						THROW_ERROR: function THROW_ERROR(error) {
							if (debug) {
								throw error;
							}
							return error;
						}
					};
					return logger;
				};

				exports['default'] = createLogger;
				module.exports = exports['default'];

				/***/
			}
			/******/])
		);
	});
	;
	/***/

/***/ },
/* 156 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(164), __esModule: true };

/***/ },
/* 157 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(167), __esModule: true };

/***/ },
/* 158 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(168), __esModule: true };

/***/ },
/* 159 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(169), __esModule: true };

/***/ },
/* 160 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _Object$getOwnPropertyNames = __webpack_require__(157)["default"];

	var _Object$getOwnPropertyDescriptor = __webpack_require__(89)["default"];

	var _Object$defineProperty = __webpack_require__(88)["default"];

	exports["default"] = function (obj, defaults) {
	  var keys = _Object$getOwnPropertyNames(defaults);

	  for (var i = 0; i < keys.length; i++) {
	    var key = keys[i];

	    var value = _Object$getOwnPropertyDescriptor(defaults, key);

	    if (value && value.configurable && obj[key] === undefined) {
	      _Object$defineProperty(obj, key, value);
	    }
	  }

	  return obj;
	};

	exports.__esModule = true;

/***/ },
/* 161 */
/***/ function(module, exports) {

	"use strict";

	exports["default"] = function (obj, defaults) {
	  var newObj = defaults({}, obj);
	  delete newObj["default"];
	  return newObj;
	};

	exports.__esModule = true;

/***/ },
/* 162 */
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
/* 163 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(177);
	module.exports = __webpack_require__(32).Object.assign;

/***/ },
/* 164 */
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(19);
	module.exports = function create(P, D){
	  return $.create(P, D);
	};

/***/ },
/* 165 */
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(19);
	module.exports = function defineProperty(it, key, desc){
	  return $.setDesc(it, key, desc);
	};

/***/ },
/* 166 */
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(19);
	__webpack_require__(178);
	module.exports = function getOwnPropertyDescriptor(it, key){
	  return $.getDesc(it, key);
	};

/***/ },
/* 167 */
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(19);
	__webpack_require__(179);
	module.exports = function getOwnPropertyNames(it){
	  return $.getNames(it);
	};

/***/ },
/* 168 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(180);
	module.exports = __webpack_require__(32).Object.keys;

/***/ },
/* 169 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(181);
	module.exports = __webpack_require__(32).Object.setPrototypeOf;

/***/ },
/* 170 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 171 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(94);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 172 */
/***/ function(module, exports) {

	var toString = {}.toString;

	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 173 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
	var toIObject = __webpack_require__(95)
	  , getNames  = __webpack_require__(19).getNames
	  , toString  = {}.toString;

	var windowNames = typeof window == 'object' && Object.getOwnPropertyNames
	  ? Object.getOwnPropertyNames(window) : [];

	var getWindowNames = function(it){
	  try {
	    return getNames(it);
	  } catch(e){
	    return windowNames.slice();
	  }
	};

	module.exports.get = function getOwnPropertyNames(it){
	  if(windowNames && toString.call(it) == '[object Window]')return getWindowNames(it);
	  return getNames(toIObject(it));
	};

/***/ },
/* 174 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 175 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.1 Object.assign(target, source, ...)
	var $        = __webpack_require__(19)
	  , toObject = __webpack_require__(96)
	  , IObject  = __webpack_require__(93);

	// should work with symbols and should have deterministic property order (V8 bug)
	module.exports = __webpack_require__(92)(function(){
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
/* 176 */
/***/ function(module, exports, __webpack_require__) {

	// Works with __proto__ only. Old v8 can't work with null proto objects.
	/* eslint-disable no-proto */
	var getDesc  = __webpack_require__(19).getDesc
	  , isObject = __webpack_require__(94)
	  , anObject = __webpack_require__(171);
	var check = function(O, proto){
	  anObject(O);
	  if(!isObject(proto) && proto !== null)throw TypeError(proto + ": can't set as prototype!");
	};
	module.exports = {
	  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
	    function(test, buggy, set){
	      try {
	        set = __webpack_require__(90)(Function.call, getDesc(Object.prototype, '__proto__').set, 2);
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
/* 177 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.1 Object.assign(target, source)
	var $export = __webpack_require__(55);

	$export($export.S + $export.F, 'Object', {assign: __webpack_require__(175)});

/***/ },
/* 178 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	var toIObject = __webpack_require__(95);

	__webpack_require__(56)('getOwnPropertyDescriptor', function($getOwnPropertyDescriptor){
	  return function getOwnPropertyDescriptor(it, key){
	    return $getOwnPropertyDescriptor(toIObject(it), key);
	  };
	});

/***/ },
/* 179 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.7 Object.getOwnPropertyNames(O)
	__webpack_require__(56)('getOwnPropertyNames', function(){
	  return __webpack_require__(173).get;
	});

/***/ },
/* 180 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 Object.keys(O)
	var toObject = __webpack_require__(96);

	__webpack_require__(56)('keys', function($keys){
	  return function keys(it){
	    return $keys(toObject(it));
	  };
	});

/***/ },
/* 181 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.19 Object.setPrototypeOf(O, proto)
	var $export = __webpack_require__(55);
	$export($export.S, 'Object', {setPrototypeOf: __webpack_require__(176).set});

/***/ },
/* 182 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(103);


/***/ }
]);