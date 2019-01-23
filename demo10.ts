class XiaoJieJie2 {
  public sex:string
  protected name:string
  private age:number
  public constructor(sex:string, name:string, age:number) {
    this.sex = sex
    this.name = name
    this.age = age
  }
  public sayHello() {
    console.log('berial')
  }
  protected sayLove() {
    console.log('i love you')
  }
}

let jiejie2:XiaoJieJie2 = new XiaoJieJie2('女', '热巴', 22)

console.log(jiejie2.sex)
console.log(jiejie2.name)
console.log(jiejie2.age)

jiejie2.sayHello()
jiejie2.sayLove()

class Man {
  public readonly sex:string = '男'
}

let man:Man = new Man()
man.sex = '女'