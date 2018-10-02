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
        let x: any = function (a: number, b: number): number {
            return a + b;
        };

        x.逆运算 = function (a: number, b: number): number {
            return a - b;
        };
        return x;
    }

    let add: 二则运算 = fn();
    console.log(add(1, 2));
}


//声明类
class Animal { }
class Point extends Animal {
    static xxx = 1
    x: number;
    y: number;
    private _age: number
    get age() {
        return this._age
    }
    set age(value: number) {
        if (value < 0) {
            this._age = 0
        }
    }
    constructor(x = 1, y = 2) {   //表示如何构造对象
        super();
        this.x = x;
        this.y = y;
        this.move();
    }
    move(): void {
        console.log('move');
    }
}

let frank = new Point()
console.log(Point.xxx);


//接口
interface A {
    num: number;
    b: boolean;
    str: string;
    optional?: string;
    add(n1: number, n2: number): number
    readonly r: string
}


//函数

function hi(name: string, age = 18): string | number {
    //this,agument
    console.log(`Hi,${name}${age}`);    //行参，站位
    return 1
}
hi('frink') //实参

//箭头函数，没有this和arguments
let fn = (a: number, b: number) => {
    return a + b
}

//泛型    支持广泛类型的数据
{
    function identity<T>(arg: T): T {
        return arg;
    }

    let myIdentity: <T>(arg: T) => T = identity;
    let s =identity<number>(1)

    //接口泛型
    interface add {
        (a: string, b: string): string
    }
    interface anyAdd<T> {
        (a: T, b: T): T
    }

    let stringAdd: anyAdd<string> = (a1: string, b1: string): string => {
        return a1 + b1
    }
    //泛型约束
    interface Lengthwise {
        length: number;
    }

    function loggingIdentity<T extends Lengthwise>(arg: T): T {
        console.log(arg.length);  // Now we know it has a .length property, so no more error
        return arg;
    }

    //泛型使用类
    function create<T>(c: { new(): T }) {
        return new c()
    }
    class Humer { }
    let frank = create<Humer>(Humer)
}
