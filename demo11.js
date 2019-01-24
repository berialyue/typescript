"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Berial = /** @class */ (function () {
    function Berial(name, age, skill) {
        this.name = name;
        this.age = age;
        this.skill = skill;
    }
    Berial.prototype.interest = function () {
        console.log('coding');
    };
    return Berial;
}());
var berialyue1 = new Berial('berialyue', 30, 'web');
berialyue1.interest();
var Pudding = /** @class */ (function (_super) {
    __extends(Pudding, _super);
    function Pudding() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.fav = 'loading';
        return _this;
    }
    Pudding.prototype.interest = function () {
        // super.interest()
        console.log('100');
    };
    Pudding.prototype.zhuanQian = function () {
        console.log('1 million');
    };
    return Pudding;
}(Berial));
var pudding = new Pudding('pudding', 1, 'pa');
pudding.interest();
pudding.zhuanQian();
