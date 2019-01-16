function add1(n1:number, n2:number):number {
  return n1+n2
}
console.log(add1(1,2))

let add2 = function(n1:number, n2:number):number {
  return n1+n2
}
console.log(add2(2,3))

let add3 = (n1:number, n2:number):number => {
  return n1+n2
}
console.log(add3(3,4))