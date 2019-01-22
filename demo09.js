"use strict";
var XiaoJieJie = /** @class */ (function () {
    function XiaoJieJie(name, age) {
        this.name = name;
        this.age = age;
    }
    XiaoJieJie.prototype.say = function () {
        console.log('berialyue');
    };
    return XiaoJieJie;
}());
var jiejie = new XiaoJieJie('fbb', 18);
console.log(jiejie);
jiejie.say();
