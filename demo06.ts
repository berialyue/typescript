let berial:string = 'berialyue'
let yueduming:String = new String('berial')
console.log(berial)
console.log(yueduming)

console.log(berial.length)
console.log(yueduming.length)

let something:string = "清早起来打开窗，心情美美的，我要出去找小姐姐，心情美美的。"
let xiaoJieJie:string = "小姐姐"

console.log(something.indexOf(xiaoJieJie))
console.log(something.lastIndexOf(xiaoJieJie))

console.log(something.substring(8))
console.log(something.substring(8,14))

console.log(something.replace(xiaoJieJie, '小哥哥'))