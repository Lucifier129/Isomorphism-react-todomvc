webpackJsonp([1],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireDefault = __webpack_require__(11)['default'];

	var _react = __webpack_require__(14);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(183);

	var _containersRoot = __webpack_require__(148);

	var _containersRoot2 = _interopRequireDefault(_containersRoot);

	var _store = __webpack_require__(155);

	var _store2 = _interopRequireDefault(_store);

	var initialState = JSON.parse(document.getElementById('initialData').innerHTML);
	_store2['default'].replaceState(initialState);

	(0, _reactDom.render)(_react2['default'].createElement(_containersRoot2['default'], { store: _store2['default'] }), document.getElementById('todoapp'));

	var _store$actions = _store2['default'].actions;
	var updateTodos = _store$actions.updateTodos;
	var filterItems = _store$actions.filterItems;

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
/* 11 */
/***/ function(module, exports) {

	"use strict";

	exports["default"] = function (obj) {
	  return obj && obj.__esModule ? obj : {
	    "default": obj
	  };
	};

	exports.__esModule = true;

/***/ },
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */
/***/ function(module, exports) {

	"use strict";

	exports["default"] = function (instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};

	exports.__esModule = true;

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _Object$defineProperty = __webpack_require__(55)["default"];

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
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _Object$getOwnPropertyDescriptor = __webpack_require__(87)["default"];

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
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _Object$create = __webpack_require__(157)["default"];

	var _Object$setPrototypeOf = __webpack_require__(160)["default"];

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
/* 23 */
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
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _Object$assign = __webpack_require__(86)["default"];

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
/* 31 */
/***/ function(module, exports) {

	var core = module.exports = {version: '1.2.6'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
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
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _extends = __webpack_require__(30)["default"];

	var _objectWithoutProperties = __webpack_require__(163)["default"];

	var _Object$assign = __webpack_require__(86)["default"];

	var _Object$keys = __webpack_require__(159)["default"];

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
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(166), __esModule: true };

/***/ },
/* 56 */
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
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(175)
	  , core      = __webpack_require__(31)
	  , ctx       = __webpack_require__(89)
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
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	// most Object methods by ES6 should accept primitives
	var $export = __webpack_require__(57)
	  , core    = __webpack_require__(31)
	  , fails   = __webpack_require__(91);
	module.exports = function(KEY, exec){
	  var fn  = (core.Object || {})[KEY] || Object[KEY]
	    , exp = {};
	  exp[KEY] = exec(fn);
	  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
	};

/***/ },
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
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(164), __esModule: true };

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(167), __esModule: true };

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _Object$defineProperty = __webpack_require__(55)["default"];

	exports["default"] = function (obj, key, value) {
	  if (key in obj) {
	    _Object$defineProperty(obj, key, {
	      value: value,
	      enumerable: true,
	      configurable: true,
	      writable: true
	    });
	  } else {
	    obj[key] = value;
	  }

	  return obj;
	};

	exports.__esModule = true;

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(171);
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
/* 90 */
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 91 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(173);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 93 */
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(92)
	  , defined = __webpack_require__(90);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(90);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ },
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
/* 142 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _get = __webpack_require__(21)['default'];

	var _inherits = __webpack_require__(22)['default'];

	var _createClass = __webpack_require__(20)['default'];

	var _classCallCheck = __webpack_require__(19)['default'];

	var _interopRequireDefault = __webpack_require__(11)['default'];

	Object.defineProperty(exports, '__esModule', {
		value: true
	});

	var _react = __webpack_require__(14);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(59);

	var _classnames2 = _interopRequireDefault(_classnames);

	var Filters = (function (_Component) {
		_inherits(Filters, _Component);

		function Filters() {
			_classCallCheck(this, Filters);

			_get(Object.getPrototypeOf(Filters.prototype), 'constructor', this).apply(this, arguments);
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
/* 143 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _get = __webpack_require__(21)['default'];

	var _inherits = __webpack_require__(22)['default'];

	var _createClass = __webpack_require__(20)['default'];

	var _classCallCheck = __webpack_require__(19)['default'];

	var _interopRequireDefault = __webpack_require__(11)['default'];

	Object.defineProperty(exports, '__esModule', {
		value: true
	});

	var _react = __webpack_require__(14);

	var _react2 = _interopRequireDefault(_react);

	var _Todos = __webpack_require__(146);

	var _Todos2 = _interopRequireDefault(_Todos);

	var Main = (function (_Component) {
		_inherits(Main, _Component);

		function Main() {
			_classCallCheck(this, Main);

			_get(Object.getPrototypeOf(Main.prototype), 'constructor', this).apply(this, arguments);
		}

		_createClass(Main, [{
			key: 'render',
			value: function render() {
				var _props = this.props;
				var updateItem = _props.updateItem;
				var deleteItem = _props.deleteItem;
				var updateItems = _props.updateItems;
				var todos = _props.todos;
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
					_react2['default'].createElement(_Todos2['default'], { todos: todos, updateItem: updateItem, deleteItem: deleteItem })
				);
			}
		}]);

		return Main;
	})(_react.Component);

	exports['default'] = Main;

	Main.propTypes = {
		todos: _react.PropTypes.arrayOf(_react.PropTypes.object.isRequired),
		updateItem: _react.PropTypes.func.isRequired,
		deleteItem: _react.PropTypes.func.isRequired,
		updateItems: _react.PropTypes.func.isRequired,
		isAllCompleted: _react.PropTypes.bool.isRequired
	};
	module.exports = exports['default'];

/***/ },
/* 144 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _get = __webpack_require__(21)['default'];

	var _inherits = __webpack_require__(22)['default'];

	var _createClass = __webpack_require__(20)['default'];

	var _classCallCheck = __webpack_require__(19)['default'];

	var _interopRequireDefault = __webpack_require__(11)['default'];

	Object.defineProperty(exports, '__esModule', {
		value: true
	});

	var _react = __webpack_require__(14);

	var _react2 = _interopRequireDefault(_react);

	var ENTER_KEY = 13;
	var ESCAPE_KEY = 27;

	var NewTodo = (function (_Component) {
		_inherits(NewTodo, _Component);

		function NewTodo() {
			_classCallCheck(this, NewTodo);

			_get(Object.getPrototypeOf(NewTodo.prototype), 'constructor', this).apply(this, arguments);
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

		return NewTodo;
	})(_react.Component);

	exports['default'] = NewTodo;

	NewTodo.propTypes = {
		addItem: _react.PropTypes.func.isRequired
	};
	module.exports = exports['default'];

/***/ },
/* 145 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _get = __webpack_require__(21)['default'];

	var _inherits = __webpack_require__(22)['default'];

	var _createClass = __webpack_require__(20)['default'];

	var _classCallCheck = __webpack_require__(19)['default'];

	var _interopRequireDefault = __webpack_require__(11)['default'];

	Object.defineProperty(exports, '__esModule', {
		value: true
	});

	var _react = __webpack_require__(14);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(59);

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
/* 146 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _get = __webpack_require__(21)['default'];

	var _inherits = __webpack_require__(22)['default'];

	var _createClass = __webpack_require__(20)['default'];

	var _classCallCheck = __webpack_require__(19)['default'];

	var _extends = __webpack_require__(30)['default'];

	var _interopRequireDefault = __webpack_require__(11)['default'];

	Object.defineProperty(exports, '__esModule', {
		value: true
	});

	var _react = __webpack_require__(14);

	var _react2 = _interopRequireDefault(_react);

	var _Todo = __webpack_require__(145);

	var _Todo2 = _interopRequireDefault(_Todo);

	var Todos = (function (_React$Component) {
		_inherits(Todos, _React$Component);

		function Todos() {
			_classCallCheck(this, Todos);

			_get(Object.getPrototypeOf(Todos.prototype), 'constructor', this).apply(this, arguments);
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
/* 147 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _get = __webpack_require__(21)['default'];

	var _inherits = __webpack_require__(22)['default'];

	var _createClass = __webpack_require__(20)['default'];

	var _classCallCheck = __webpack_require__(19)['default'];

	var _interopRequireDefault = __webpack_require__(11)['default'];

	Object.defineProperty(exports, '__esModule', {
		value: true
	});

	var _react = __webpack_require__(14);

	var _react2 = _interopRequireDefault(_react);

	var _NewTodo = __webpack_require__(144);

	var _NewTodo2 = _interopRequireDefault(_NewTodo);

	var _Main = __webpack_require__(143);

	var _Main2 = _interopRequireDefault(_Main);

	var _Filters = __webpack_require__(142);

	var _Filters2 = _interopRequireDefault(_Filters);

	var View = (function (_Component) {
		_inherits(View, _Component);

		function View() {
			_classCallCheck(this, View);

			_get(Object.getPrototypeOf(View.prototype), 'constructor', this).apply(this, arguments);
		}

		_createClass(View, [{
			key: 'render',
			value: function render() {
				var _props = this.props;
				var addItem = _props.addItem;
				var updateItem = _props.updateItem;
				var deleteItem = _props.deleteItem;
				var updateItems = _props.updateItems;
				var deleteItems = _props.deleteItems;
				var todos = _props.todos;
				var activeFilter = _props.activeFilter;
				var isAllCompleted = _props.isAllCompleted;
				var todoCount = _props.todoCount;
				var completedCount = _props.completedCount;

				return _react2['default'].createElement(
					'div',
					null,
					_react2['default'].createElement(_NewTodo2['default'], { addItem: addItem }),
					_react2['default'].createElement(_Main2['default'], {
						updateItem: updateItem,
						deleteItem: deleteItem,
						updateItems: updateItems,
						isAllCompleted: isAllCompleted,
						todos: todos }),
					_react2['default'].createElement(_Filters2['default'], {
						activeFilter: activeFilter,
						deleteItems: deleteItems,
						completedCount: completedCount,
						todoCount: todoCount })
				);
			}
		}]);

		return View;
	})(_react.Component);

	exports['default'] = View;

	View.propTypes = {
		addItem: _react.PropTypes.func.isRequired,
		deleteItem: _react.PropTypes.func.isRequired,
		updateItem: _react.PropTypes.func.isRequired,
		deleteItems: _react.PropTypes.func.isRequired,
		updateItems: _react.PropTypes.func.isRequired,
		todos: _react.PropTypes.arrayOf(_react.PropTypes.object.isRequired),
		todoCount: _react.PropTypes.number.isRequired,
		completedCount: _react.PropTypes.number.isRequired,
		activeFilter: _react.PropTypes.string.isRequired
	};
	module.exports = exports['default'];

/***/ },
/* 148 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _get = __webpack_require__(21)['default'];

	var _inherits = __webpack_require__(22)['default'];

	var _createClass = __webpack_require__(20)['default'];

	var _classCallCheck = __webpack_require__(19)['default'];

	var _extends = __webpack_require__(30)['default'];

	var _interopRequireDefault = __webpack_require__(11)['default'];

	var _interopRequireWildcard = __webpack_require__(56)['default'];

	Object.defineProperty(exports, '__esModule', {
		value: true
	});

	var _react = __webpack_require__(14);

	var _react2 = _interopRequireDefault(_react);

	var _componentsView = __webpack_require__(147);

	var _componentsView2 = _interopRequireDefault(_componentsView);

	var _selectors = __webpack_require__(154);

	var _handlersTodos = __webpack_require__(54);

	var ActionTypes = _interopRequireWildcard(_handlersTodos);

	var Root = (function (_Component) {
		_inherits(Root, _Component);

		function Root() {
			_classCallCheck(this, Root);

			_get(Object.getPrototypeOf(Root.prototype), 'constructor', this).apply(this, arguments);
		}

		_createClass(Root, [{
			key: 'componentDidMount',
			value: function componentDidMount() {
				var _this = this;

				var store = this.props.store;

				this.unbind = store.subscribe(function () {
					return _this.forceUpdate();
				});
			}
		}, {
			key: 'componentWillUnmount',
			value: function componentWillUnmount() {
				this.unbind();
			}
		}, {
			key: 'render',
			value: function render() {
				var _props$store = this.props.store;
				var getState = _props$store.getState;
				var actions = _props$store.actions;

				return _react2['default'].createElement(_componentsView2['default'], _extends({}, (0, _selectors.stateToProps)(getState()), actions));
			}
		}]);

		return Root;
	})(_react.Component);

	exports['default'] = Root;
	module.exports = exports['default'];

/***/ },
/* 149 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = __webpack_require__(30)['default'];

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
/* 150 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _defaults = __webpack_require__(161)['default'];

	var _interopExportWildcard = __webpack_require__(162)['default'];

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _todos = __webpack_require__(54);

	_defaults(exports, _interopExportWildcard(_todos, _defaults));

	var _activeFilter = __webpack_require__(149);

	_defaults(exports, _interopExportWildcard(_activeFilter, _defaults));

/***/ },
/* 151 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _defineProperty = __webpack_require__(88)['default'];

	Object.defineProperty(exports, '__esModule', {
		value: true
	});

	var _refer = __webpack_require__(38);

	var DID_UPDATE = _refer.constants.DID_UPDATE;
	var createRecord = function createRecord(filters) {
		var store = undefined;
		var storage = [];
		var max = 10;
		var index = 0;
		var setStore = function setStore(value) {
			return store = value;
		};
		var replaceState = function replaceState(silent) {
			if (store) {
				store.replaceState(storage[index].currentState, silent);
			}
		};
		var setMax = function setMax(value) {
			if (typeof value === 'number' && value > 0) {
				max = value;
			}
		};
		var add = function add(data) {
			if (filters.indexOf(data.key) !== -1) {
				return data;
			}
			storage.push(data);
			if (storage.length > max) {
				storage.shift();
			}
			index = storage.length - 1;
			return data;
		};
		var clean = function clean() {
			storage = [storage[index]];
			index = 0;
			replaceState();
		};
		var back = function back() {
			if (index > 0) {
				index--;
				replaceState();
			}
			return index;
		};
		var forward = function forward() {
			if (index < storage.length - 1) {
				index++;
				replaceState();
			}
			return index;
		};
		var go = function go(target) {
			if (target >= 0 && target <= storage.length - 1) {
				index = target;
				replaceState();
			}
			return index;
		};
		var replace = function replace(i, data) {
			if (storage[i]) {
				strage.splice(i, 1, data);
			}
		};
		var show = function show() {
			return storage;
		};
		var recorder = _defineProperty({}, DID_UPDATE, add);
		return {
			show: show,
			recorder: recorder,
			setStore: setStore,
			back: back,
			forward: forward,
			go: go,
			replace: replace
		};
	};
	exports.createRecord = createRecord;

/***/ },
/* 152 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _defineProperty = __webpack_require__(88)['default'];

	var _interopRequireWildcard = __webpack_require__(56)['default'];

	Object.defineProperty(exports, '__esModule', {
		value: true
	});

	var _handlersTodos = __webpack_require__(54);

	var ActionTypes = _interopRequireWildcard(_handlersTodos);

	var _refer = __webpack_require__(38);

	var WILL_UPDATE = _refer.constants.WILL_UPDATE;

	var API_TODOS = '/todos';
	exports['default'] = _defineProperty({}, WILL_UPDATE, function (data) {
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
	});
	module.exports = exports['default'];

/***/ },
/* 153 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _extends = __webpack_require__(30)["default"];

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
/* 154 */
/***/ function(module, exports) {

	'use strict';

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

/***/ },
/* 155 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireDefault = __webpack_require__(11)['default'];

	var _interopRequireWildcard = __webpack_require__(56)['default'];

	Object.defineProperty(exports, '__esModule', {
		value: true
	});

	var _refer = __webpack_require__(38);

	var _referLogger = __webpack_require__(156);

	var _referLogger2 = _interopRequireDefault(_referLogger);

	var _handlers = __webpack_require__(150);

	var handlers = _interopRequireWildcard(_handlers);

	var _middlewaresServer = __webpack_require__(153);

	var server = _interopRequireWildcard(_middlewaresServer);

	var _middlewaresRestful = __webpack_require__(152);

	var _middlewaresRestful2 = _interopRequireDefault(_middlewaresRestful);

	var _middlewaresRecord = __webpack_require__(151);

	var record = (0, _middlewaresRecord.createRecord)(['updateTodos']);

	var logger = (0, _referLogger2['default'])({
		debug: true
	});
	var store = (0, _refer.createStore)([server, _middlewaresRestful2['default'], logger, record.recorder, handlers]);

	record.setStore(store);

	window.record = record;

	exports['default'] = store;
	module.exports = exports['default'];

/***/ },
/* 156 */
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
						'@DISPATCH': function DISPATCH() {
							timeStore[scope] = getTime();
						},
						'@DID_UPDATE': function DID_UPDATE(data) {
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
						'@THROW_ERROR': function THROW_ERROR(error) {
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
/* 157 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(165), __esModule: true };

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

	module.exports = { "default": __webpack_require__(170), __esModule: true };

/***/ },
/* 161 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _Object$getOwnPropertyNames = __webpack_require__(158)["default"];

	var _Object$getOwnPropertyDescriptor = __webpack_require__(87)["default"];

	var _Object$defineProperty = __webpack_require__(55)["default"];

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
/* 162 */
/***/ function(module, exports) {

	"use strict";

	exports["default"] = function (obj, defaults) {
	  var newObj = defaults({}, obj);
	  delete newObj["default"];
	  return newObj;
	};

	exports.__esModule = true;

/***/ },
/* 163 */
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
/* 164 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(178);
	module.exports = __webpack_require__(31).Object.assign;

/***/ },
/* 165 */
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(23);
	module.exports = function create(P, D){
	  return $.create(P, D);
	};

/***/ },
/* 166 */
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(23);
	module.exports = function defineProperty(it, key, desc){
	  return $.setDesc(it, key, desc);
	};

/***/ },
/* 167 */
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(23);
	__webpack_require__(179);
	module.exports = function getOwnPropertyDescriptor(it, key){
	  return $.getDesc(it, key);
	};

/***/ },
/* 168 */
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(23);
	__webpack_require__(180);
	module.exports = function getOwnPropertyNames(it){
	  return $.getNames(it);
	};

/***/ },
/* 169 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(181);
	module.exports = __webpack_require__(31).Object.keys;

/***/ },
/* 170 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(182);
	module.exports = __webpack_require__(31).Object.setPrototypeOf;

/***/ },
/* 171 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 172 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(93);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 173 */
/***/ function(module, exports) {

	var toString = {}.toString;

	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 174 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
	var toIObject = __webpack_require__(94)
	  , getNames  = __webpack_require__(23).getNames
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
/* 175 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 176 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.1 Object.assign(target, source, ...)
	var $        = __webpack_require__(23)
	  , toObject = __webpack_require__(95)
	  , IObject  = __webpack_require__(92);

	// should work with symbols and should have deterministic property order (V8 bug)
	module.exports = __webpack_require__(91)(function(){
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
/* 177 */
/***/ function(module, exports, __webpack_require__) {

	// Works with __proto__ only. Old v8 can't work with null proto objects.
	/* eslint-disable no-proto */
	var getDesc  = __webpack_require__(23).getDesc
	  , isObject = __webpack_require__(93)
	  , anObject = __webpack_require__(172);
	var check = function(O, proto){
	  anObject(O);
	  if(!isObject(proto) && proto !== null)throw TypeError(proto + ": can't set as prototype!");
	};
	module.exports = {
	  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
	    function(test, buggy, set){
	      try {
	        set = __webpack_require__(89)(Function.call, getDesc(Object.prototype, '__proto__').set, 2);
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
/* 178 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.1 Object.assign(target, source)
	var $export = __webpack_require__(57);

	$export($export.S + $export.F, 'Object', {assign: __webpack_require__(176)});

/***/ },
/* 179 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	var toIObject = __webpack_require__(94);

	__webpack_require__(58)('getOwnPropertyDescriptor', function($getOwnPropertyDescriptor){
	  return function getOwnPropertyDescriptor(it, key){
	    return $getOwnPropertyDescriptor(toIObject(it), key);
	  };
	});

/***/ },
/* 180 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.7 Object.getOwnPropertyNames(O)
	__webpack_require__(58)('getOwnPropertyNames', function(){
	  return __webpack_require__(174).get;
	});

/***/ },
/* 181 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 Object.keys(O)
	var toObject = __webpack_require__(95);

	__webpack_require__(58)('keys', function($keys){
	  return function keys(it){
	    return $keys(toObject(it));
	  };
	});

/***/ },
/* 182 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.19 Object.setPrototypeOf(O, proto)
	var $export = __webpack_require__(57);
	$export($export.S, 'Object', {setPrototypeOf: __webpack_require__(177).set});

/***/ },
/* 183 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(102);


/***/ }
]);