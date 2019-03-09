let isDone:boolean = false

// 使用构造函数 Boolean 创建的对象不是布尔值
// let createdByNewBoolen:boolean = new Boolean(1)

let createdByNewBoolen:Boolean = new Boolean(1)

let createdByBoolean:boolean = Boolean(1)

// 数值类型
let decLiteral:number = 6
let hexLiteral:number = 0xf00d
let binaryLiteral:number = 0b1010
let octalLiteral:number = 0o744
let notANumber:number = NaN
let infinityNumber:number = Infinity

// 字符串类型
let myName:string = 'Tom'
let MyAge:number = 25

let sentence:string = `Hello, my name is ${myName}, I'll be ${MyAge + 1} years old next month`
console.log(sentence)

// 空值
function alertName():void {
  alert('My name is Tom')
}

let unusable:void = undefined

let u:undefined = undefined
let n:null = null

// let num:number = undefined

// let u1: undefined;
// let num1: number = u1;

// let u2:void
// let num2:number = u2

//类型推论
let myFavoriteNumber:any = 'seven'
myFavoriteNumber = 7

let anyThing:any = 'hello'
console.log(anyThing.myName)
// console.log(anyThing.myName.firstName)

// anyThing.setName('jerry')
// anyThing.setName('jerry').sayHello()
// anyThing.myName.setFirstName('cat')

console.log(anyThing)


//类型推论
let myFavoriteNumber1 = 'seven'
// myFavoriteNumber1 = 7
// 如果没有明确指定类型，ts会推测出一个类型

//联合类型
let myFavoriteNumber2:string | number
myFavoriteNumber2 = 'seven'
myFavoriteNumber2 = 7

// let myFavoriteNumber3:string | number
// myFavoriteNumber3 = true


// length不是string和number的共有属性，所以会报错
// function getLegth(something:string | number):number {
//   return something.length
// }

function getString(something:string | number) {
  return something.toString()
}

// 第二行的 myFavoriteNumber 被推断成了 string，访问它的 length 属性不会报错。
//而第四行的 myFavoriteNumber 被推断成了 number，访问它的 length 属性时就报错了。
let myFavoriteNumber4:string | number
myFavoriteNumber4 = 'seven'
console.log(myFavoriteNumber4.length)
myFavoriteNumber4 = 7
// console.log(myFavoriteNumber4.length)

// 接口
interface Person {
  readonly id:number
  name:string
  age?:number
  [propName:string]:any
}

let tom:Person = {
  id:  123,
  name:' Tom',
  age: 25
}

let jerry:Person = {
  id:124,
  name:'jerry'
}

console.log(jerry.id)
console.log(jerry.name)
console.log(tom.age)

let fibonacci:number[] = [1,1,2,3,5]
//数组中的项不允许出现其他类型
// let fibonacci1:number[] = [1,'1',2,3,5]

let fibonacci2:Array<number> = [1,1,2,3,5]

interface NumberArray {
  [index:number]:number
}
let fibonacci3:NumberArray = [1,1,2,3,5]

let list:any[] = ['1',1,2,{number:'5'}]
 console.log(fibonacci)
 console.log(fibonacci3)
 console.log(list)

// function sum(x,y) {
//   return x + y
// }

// let mySum = function (x,y) {
//   return x + y
// }

function sum1(x:number, y:number):number {
  return x + y
}

interface SearchFunc {
  (source:string, subString:string):boolean
}

let mySearch:SearchFunc
mySearch = function(source:string, subString:string) {
  return source.search(subString) !== -1
}

function buildName(firstName:string='tom', lastName?:string) {
  if(lastName) {
    return firstName + ' ' + lastName
  } else {
    return firstName
  }
}

let tomcat = buildName('Tom','Cat')
let tom1= buildName('tom')
let tom2= buildName()

console.log(tomcat)
console.log(tom1)
console.log(tom2)

function push(array:any[], ...items:any[]) {
  items.forEach(function(item) {
    array.push(item)
  })
}

// let a = []
// push(a,1,2,3)

function reverse(x:number):number
function reverse(x:string):string
function reverse(x:number | string): number | string {
  if(typeof x === 'number') {
    return Number(x.toString().split('').reverse().join(''))
  } else if(typeof x === 'string') {
    return x.split('').reverse().join('')
  }
  return '请输入数字或字符串'
}

console.log(reverse(123456))
console.log(reverse('hello'))

function getLength(something:string | number):number {
  if((<string>something).length) {
    return (<string>something).length
  } else {
    return something.toString().length
  }
}

// 声明文件
declare var jQuery:(selector:string) => any

// jQuery('#foo')

// 内置对象
let b:Boolean = new Boolean(1)
let e:Error = new Error('error')
let d:Date = new Date()
let r:RegExp = /[a-z]/

let body:HTMLElement = document.body
let allDiv:NodeList = document.querySelectorAll('div')
document.addEventListener('click', function(e:MouseEvent){
  // do something
})

// 类型别名
type Name = string
type NameResolver = () => string
type NameOrResolver = Name | NameResolver
function getName(n:NameOrResolver):Name {
  if(typeof n === 'string') {
    return n
  } else {
    return n()
  }
}

// 字符串字面量类型
type EventNames = 'click' | 'scroll' | 'mousemove'
function handleEvent(ele:HTMLElement | null, event:EventNames) {
  //do something
}

handleEvent(document.getElementById('hello'),'scroll')
// handleEvent(document.getElementById('world'),'dbclick')

// 元祖
let xcatliu:[string,number] = ['Xcat liu',25]

// let berial:[string,number];
// berial[0] = 'berialyue';
// berial[1] = 25;

// berial[0].slice(1);
// berial[1].toFixed(2);

// console.log(berial)

// 枚举
enum Days {Sun = 7, Mon = 1, Tue, Wed, Thu, Fri, Sat}

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
class Animal {
  name = 'Jack'
  constructor(name:any) {
    this.name = name
  }
  sayHi() {
    return  `My Name is ${this.name}`
  }
}

let a = new Animal('Jack')
console.log(a.sayHi())

// 类的继承
class Cat extends Animal{
  constructor(name:any) {
    super(name)
    console.log(this.name)
  }
  sayHi() {
    return 'Meow, ' + super.sayHi()
  }
}

let cat = new Cat('Tom')
console.log(cat.sayHi())

// 存取器
class Animal1 {
  constructor(name:any) {
    this.name = name
  }
  get name() {
    return 'Jack'
  }
  set name(value) {
    console.log('setter' + value)
  }
}

let newA = new Animal1('Kitty')
newA.name = 'Tom'
console.log(newA.name)

// 静态方法
class Animal2 {
  name = ''
  constructor(name:any) {
    this.name = name
  }
  static isAnimal(a:any) {
    return a instanceof Animal2
  }
}

let aa = new Animal1('Jack')
aa.name = 'Tom'
console.log(aa.name)

// public
class Animal3 {
  public name:any
  public constructor(name:any) {
    this.name = name
  }
}

let aaa = new Animal3('Jack')
console.log(aaa.name)
aaa.name = 'Tom'
console.log(aaa.name)

// private
class Animal4 {
  private name:any
  public constructor(name:any) {
    this.name = name
  }
}

let a4 = new Animal4('Jack')
// console.log(a4.name)
// a.name = 'Tom'

// 抽象类
abstract class Animal5 {
  public name:any
  public constructor(name:any) {
    this.name = name
  }
  public abstract sayHi():any
}

class Cat5 extends Animal5 {
  public sayHi() {
    console.log(`Meow, My name is ${this.name}`)
  } 
}

let cat5 = new Cat5('Tom')

// 类的类型
class Animal6 {
  name:string = ''
  constructor(name:string) {
    this.name = name
  }
  sayHi():string {
    return `My name is ${this.name}`
  }
}

let A:Animal6 = new Animal6('Jack')
console.log(A.sayHi())

// 类实现接口
interface Alarm {
  alert():any
}

interface Light {
  lightOn():any
  lightOff():any
}

class Door {

} 

class SecurityDoor extends Door implements Alarm {
  alert() {
    console.log('SecurityDoor Alert')
  }
}

class Car implements Alarm, Light {
  alert() {
    console.log('Car Alert')
  }
  lightOn() {
    console.log('Car light on')
  }
  lightOff() {
    console.log('Car light off')
  }
}

// 接口继承接口
interface LightableAlarm extends Alarm {
  lightOn():any
  lightOff():any
}

// 接口继承类
class Point {
  x:number = 0
  y:number = 0
}

interface Point3d extends Point {
  z:number
}

let point3d: Point3d = {
  x: 1,
  y: 2,
  z: 3
}

// 混合类型
interface SearchFunc {
  (source:string, subString:string):boolean
}

let mySearch1:SearchFunc
mySearch1 = function(source:string,subString:string) {
  return source.search(subString) !== -1
}

interface Counter {
  (start:number):string
  interval:number
  reset():void
}

function getCounter():Counter {
  let counter = <Counter>function (start:number) {}
  counter.interval = 123
  counter.reset = function() {}
  return counter
}

let cc = getCounter()
cc(10)
cc.reset()
cc.interval = 5.0

// 泛型
function createArray<T>(length:number,value:T):Array<T> {
  let result:T[] = []
  for(let i = 0; i < length; i++) {
    result[i] = value
  }
  return result
}

createArray<string>(3, 'x')

// 多个类型参数
function swap<T, U>(tuple:[T, U]):[U, T] {
  return [tuple[1], tuple[0]]
}

swap([7, 'seven'])