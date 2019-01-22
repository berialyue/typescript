let reg1:RegExp = new RegExp('berial')

console.log(reg1)

let reg2:RegExp = new RegExp('berialyue', 'gi')

console.log(reg2)

let reg3:RegExp = /berial/
let reg4:RegExp = /berialyue/gi
console.log(reg3)
console.log(reg4)

let reg5:RegExp = /pudding/i
let website:string = 'pudding.design'

console.log(reg5.test(website))
console.log(reg5.exec(website))