"use strict";
var isDone = false;
// 使用构造函数 Boolean 创建的对象不是布尔值
// let createdByNewBoolen:boolean = new Boolean(1)
var createdByNewBoolen = new Boolean(1);
var createdByBoolean = Boolean(1);
// 数值类型
var decLiteral = 6;
var hexLiteral = 0xf00d;
var binaryLiteral = 10;
var octalLiteral = 484;
var notANumber = NaN;
var infinityNumber = Infinity;
// 字符串类型
var myName = 'Tom';
var MyAge = 25;
var sentence = "Hello, my name is " + myName + ", I'll be " + (MyAge + 1) + " years old next month";
console.log(sentence);
// 空值
function alertName() {
    alert('My name is Tom');
}
var unusable = undefined;
var u = undefined;
var n = null;
var num = undefined;
var u1;
var num1 = u1;
var u2;
var num2 = u2;
var myFavoriteNumber = 'seven';
myFavoriteNumber = 7;
var anyThing = 'hello';
console.log(anyThing.myName);
console.log(anyThing.myName.firstName);
anyThing.setName('jerry');
anyThing.setName('jerry').sayHello();
anyThing.myName.setFirstName('cat');
console.log(anyThing);
