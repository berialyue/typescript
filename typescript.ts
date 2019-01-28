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

let num:number = undefined

let u1: undefined;
let num1: number = u1;

let u2:void
let num2:number = u2




