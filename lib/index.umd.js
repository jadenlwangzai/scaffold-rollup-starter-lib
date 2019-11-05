(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global = global || self, global.eventBus = factory());
}(this, (function () { 'use strict';

    var a = 1;

    var Greeter = (function () {
        function Greeter(message) {
            this.greeting = message;
        }
        Greeter.prototype.greet = function () {
            return 'Hello, ' + this.greeting;
        };
        return Greeter;
    }());

    var m = new Greeter('111');
    console.log(m.greet());
    function index () {
        console.log(a);
    }

    return index;

})));
//# sourceMappingURL=index.umd.js.map
