'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Dock = function () {
    function Dock(name) {
        _classCallCheck(this, Dock);

        this.name = name;
    }

    _createClass(Dock, [{
        key: 'hello',
        value: function hello() {
            return 'Hello ' + this.name + '!';
        }
    }], [{
        key: 'sayHelloAll',
        value: function sayHelloAll() {
            return 'Hello everyone!';
        }
    }]);

    return Dock;
}();

var HelloDock = function (_Dock) {
    _inherits(HelloDock, _Dock);

    function HelloDock() {
        _classCallCheck(this, HelloDock);

        return _possibleConstructorReturn(this, (HelloDock.__proto__ || Object.getPrototypeOf(HelloDock)).call(this, 'World'));
    }

    _createClass(HelloDock, [{
        key: 'echo',
        value: function echo() {
            alert(_get(HelloDock.prototype.__proto__ || Object.getPrototypeOf(HelloDock.prototype), 'hello', this).call(this));
        }
    }]);

    return HelloDock;
}(Dock);

exports.Dock = Dock;