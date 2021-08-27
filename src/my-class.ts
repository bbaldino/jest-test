export class MyClass {
  constructor(s: string) {
    this.myProperty = 3;
    this.myStr = s;
  }
  somethingClassy() {
    return this.myStr;
  }
  public myProperty: number;
  public myStr: string;
}
