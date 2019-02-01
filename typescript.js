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
// let num:number = undefined
// let u1: undefined;
// let num1: number = u1;
// let u2:void
// let num2:number = u2
//类型推论
var myFavoriteNumber = 'seven';
myFavoriteNumber = 7;
var anyThing = 'hello';
console.log(anyThing.myName);
// console.log(anyThing.myName.firstName)
// anyThing.setName('jerry')
// anyThing.setName('jerry').sayHello()
// anyThing.myName.setFirstName('cat')
console.log(anyThing);
//类型推论
var myFavoriteNumber1 = 'seven';
// myFavoriteNumber1 = 7
// 如果没有明确指定类型，ts会推测出一个类型
//联合类型
var myFavoriteNumber2;
myFavoriteNumber2 = 'seven';
myFavoriteNumber2 = 7;
// let myFavoriteNumber3:string | number
// myFavoriteNumber3 = true
// length不是string和number的共有属性，所以会报错
// function getLegth(something:string | number):number {
//   return something.length
// }
function getString(something) {
    return something.toString();
}
// 第二行的 myFavoriteNumber 被推断成了 string，访问它的 length 属性不会报错。
//而第四行的 myFavoriteNumber 被推断成了 number，访问它的 length 属性时就报错了。
var myFavoriteNumber4;
myFavoriteNumber4 = 'seven';
console.log(myFavoriteNumber4.length);
myFavoriteNumber4 = 7;
var tom = {
    id: 123,
    name: ' Tom',
    age: 25
};
var jerry = {
    id: 124,
    name: 'jerry'
};
console.log(jerry.id);
console.log(jerry.name);
console.log(tom.age);
