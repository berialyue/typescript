class XiaoJieJie {
  name:string;
  age:number;
  constructor(name:string,age:number) {
    this.name = name
    this.age = age
  }
  say() {
    console.log('berialyue')
  }
}

let jiejie:XiaoJieJie = new XiaoJieJie('fbb', 18)
console.log(jiejie)
jiejie.say()