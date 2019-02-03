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

function sum(x,y) {
  return x + y
}

let mySum = function (x,y) {
  return x + y
}

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

let a = []
push(a,1,2,3)

function reverse(x:number):number
function reverse(x:string):string
function reverse(x:number | string): number | string {
  if(typeof x === 'number') {
    return Number(x.toString().split('').reverse().join(''))
  } else if(typeof x === 'string') {
    return x.split('').reverse().join('')
  }
}

console.log(reverse(123456))
console.log(reverse('hello'))