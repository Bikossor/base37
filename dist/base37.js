"use strict";
var base37 = /** @class */ (function () {
    function base37() {
    }
    base37.encode = function (inputString) {
        var _this = this;
        var result = "";
        inputString.split('').forEach(function (char) {
            result += _this.alphabet[char.charCodeAt(0) % _this.alphabet.length];
        });
        return result;
    };
    ;
    base37.alphabet = "0123456789abcdefghijklmnopqrstuvwxyz_";
    return base37;
}());
;
if (typeof module !== "undefined" && module.exports) {
    module.exports = base37;
}
