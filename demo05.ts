let berialyue = {
  name: 'berialyue',
  website: 'pmhello.com',
  age: 30,
  saySomething:function() {
    console.log('wow')
  }
}

console.log(berialyue.name)
berialyue.saySomething()

let arr1:number[] = []
let arr2:Array<string> = ['berial','月读命']

let arr3:number[] = [1,2,3,4,5]

let arr4:Array<boolean> = [true, false, false]

let arr5:number[] = new Array()

let arr6:number[] = new Array(1,2,3,4,5)

let arr7:Array<string> = new Array('berialyue', 'berial', '月读命')

let arr8:Array<boolean> = new Array(true,true,false)

let x:[string, number]

x = ['hello', 10]

console.log(arr1)
console.log(arr2)
console.log(arr3)
console.log(arr4)
console.log(arr5)
console.log(arr6)
console.log(arr7)
console.log(arr8)
console.log(x)
