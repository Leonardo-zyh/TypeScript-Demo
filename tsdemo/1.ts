//枚举
enum Gender {
    Man = 'man',
    Woman = 'woman',
  }
  
  let gender: Gender = Gender.Man
  console.log(gender);
  gender = Gender.Woman;
  console.log(gender);


{
    interface 二则运算 {
        (a: number, b: number): number;
        逆运算(a: number, b: number): number;
    }
    let fn = (): 二则运算 => {
        let x: any = function(a: number, b: number): number {
            return a + b;
        };
    
        x.逆运算 = function(a: number, b: number): number {
            return a - b;
        };
        return x;
    }
    
    let add: 二则运算 = fn();
    console.log(add(1, 2));
}


//声明类
class Animal{}
class Point extends Animal{
    static xxx = 1
    x: number;
    y: number;
    private _age:number
    get age(){
        return this._age
    }
    set age(value:number){
        if(value<0){
            this._age=0
        }
    }
    constructor(x=1,y=2){   //表示如何构造对象
        super();
        this.x = x;
        this.y = y;
        this.move();
    }
    move():void{
        console.log('move');  
    }
}

let frank = new Point()
console.log(Point.xxx);


//接口
interface A {
    num: number;
    b:boolean;
    str:string;
    optional?:string;
    add(n1:number,n2:number):number
    readonly r:string
}

