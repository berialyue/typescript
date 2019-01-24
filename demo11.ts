class Berial {
  public name:string
  public age:number
  public skill:string
  constructor(name:string, age:number, skill:string) {
    this.name = name
    this.age = age
    this.skill = skill
  }
  public interest() {
    console.log('coding')
  }
}

let berialyue1:Berial = new Berial('berialyue', 30, 'web')
berialyue1.interest()

class Pudding extends Berial {
  public fav:string = 'loading'
  public interest() {
    super.interest()
    console.log('100')
  }
  public zhuanQian() {
    console.log('1 million')
  }
}

let pudding:Pudding = new Pudding('pudding', 1, 'pa')
pudding.interest()
pudding.zhuanQian()