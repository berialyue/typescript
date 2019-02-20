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
var fibonacci = [1, 1, 2, 3, 5];
//数组中的项不允许出现其他类型
// let fibonacci1:number[] = [1,'1',2,3,5]
var fibonacci2 = [1, 1, 2, 3, 5];
var fibonacci3 = [1, 1, 2, 3, 5];
var list = ['1', 1, 2, { number: '5' }];
console.log(fibonacci);
console.log(fibonacci3);
console.log(list);
// function sum(x,y) {
//   return x + y
// }
// let mySum = function (x,y) {
//   return x + y
// }
function sum1(x, y) {
    return x + y;
}
var mySearch;
mySearch = function (source, subString) {
    return source.search(subString) !== -1;
};
function buildName(firstName, lastName) {
    if (firstName === void 0) { firstName = 'tom'; }
    if (lastName) {
        return firstName + ' ' + lastName;
    }
    else {
        return firstName;
    }
}
var tomcat = buildName('Tom', 'Cat');
var tom1 = buildName('tom');
var tom2 = buildName();
console.log(tomcat);
console.log(tom1);
console.log(tom2);
function push(array) {
    var items = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        items[_i - 1] = arguments[_i];
    }
    items.forEach(function (item) {
        array.push(item);
    });
}
function reverse(x) {
    if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''));
    }
    else if (typeof x === 'string') {
        return x.split('').reverse().join('');
    }
    return '请输入数字或字符串';
}
console.log(reverse(123456));
console.log(reverse('hello'));
function getLength(something) {
    if (something.length) {
        return something.length;
    }
    else {
        return something.toString().length;
    }
}
jQuery('#foo');
// 内置对象
var b = new Boolean(1);
var e = new Error('error');
var d = new Date();
var r = /[a-z]/;
var body = document.body;
var allDiv = document.querySelectorAll('div');
document.addEventListener('click', function (e) {
    // do something
});
function getName(n) {
    if (typeof n === 'string') {
        return n;
    }
    else {
        return n();
    }
}
function handleEvent(ele, event) {
    //do something
}
handleEvent(document.getElementById('hello'), 'scroll');
// handleEvent(document.getElementById('world'),'dbclick')
// 元祖
var xcatliu = ['Xcat liu', 25];
var berial;
berial[0] = 'berialyue';
berial[1] = 25;
berial[0].slice(1);
berial[1].toFixed(2);
console.log(berial);
// 枚举
var Days;
(function (Days) {
    Days[Days["Sun"] = 7] = "Sun";
    Days[Days["Mon"] = 1] = "Mon";
    Days[Days["Tue"] = 2] = "Tue";
    Days[Days["Wed"] = 3] = "Wed";
    Days[Days["Thu"] = 4] = "Thu";
    Days[Days["Fri"] = 5] = "Fri";
    Days[Days["Sat"] = 6] = "Sat";
})(Days || (Days = {}));
console.log(Days["Sun"] === 0); // true
console.log(Days["Mon"] === 1); // true
console.log(Days["Tue"] === 2); // true
console.log(Days["Sat"] === 6); // true
console.log(Days[0] === "Sun"); // true
console.log(Days[1] === "Mon"); // true
console.log(Days[2] === "Tue"); // true
console.log(Days[6] === "Sat"); // true
console.log(Days["Sun"] === 7); // true
console.log(Days["Mon"] === 1); // true
console.log(Days["Tue"] === 2); // true
console.log(Days["Sat"] === 6); // true
// 类
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.sayHi = function () {
        return "My Name is " + this.name;
    };
    return Animal;
}());
var a = new Animal('Jack');
console.log(a.sayHi());
