'use strict';

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

module.exports = index;
//# sourceMappingURL=index.cjs.js.map