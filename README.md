#配置 npm 淘宝源
npm config set registry https://registry.npm.taobao.org/
#安装
npm install typescript@2.9.2 -g
npm install ts-node@7.0.0 -g

#Windows 用户，这里需要单独运行一些命令
 npm init -y
 npm i -D ts-node typescript

#配置 tsconfig.json
主要是将 sourceMap 设置为true。
~~~
{
    "compilerOptions": {
        "module": "commonjs",
        "target": "es5",
        "noImplicitAny": true,
        "outDir": "./dist",
        "sourceMap": true
    },
    "include": [
        "src/**/*"
    ]
}
~~~

#配置 launch.json
打开 DEBUG 界面，添加 配置
或者编辑 /.vscode/launch.json。
~~~
{
    "version": "0.2.0",
    "configurations": [
        {
            "name": "Current TS File",
            "type": "node",
            "request": "launch",
            "program": "${workspaceRoot}/node_modules/ts-node/dist/_bin.js",
            "args": [
                "${relativeFile}"
            ],
            "cwd": "${workspaceRoot}",
            "protocol": "inspector"
        }
    ]
}
~~~
#转换 tsc -w index.html

#调试
* 打开要调试的 ts 文件，添加debugger。
* 打开 debug 界面。
* 在DEBUG后 选择 launch.json 中对应的配置，此处为Current TS File。
* 点击运行按键或者按 F5 运行。

#最简单的命令行程序
#!/usr/bin/env ts-node
console.log('hello world')
"lib":["es2015","dom","es2016","es2017","es2018",]      声明版本

#加法
const a: number = parseInt(process.argv[2]);    parseInt类型转换
 process.exit(1)                                过程 

#族谱
class类
public chlidren     公共初始化
name:string         定义属性
n?: number          n未定义

#split()
'0123456789'.split('')    分割成字符串数组

#变量，类型
textList:Array<string>

#calculator-demo优化
给所有代码加上注释，
把注释放到class
代码顺序放到construction


`基础类型`
#JS 七种类型 + 枚举 + any + void + never
#any    不确定类型
不清楚类型的变量指定一个类型。
#枚举
enum类型是对JavaScript标准数据类型的一个补充。
#void   表示没有任何类型
当一个函数没有返回值时，其返回值类型是 void
#Null 和 Undefined
和 void相似，它们的本身的类型用处不是很大.可以赋值任何类型。
~~~
enum Gender {
  Man = 'man',
  Woman = 'woman',
}

let gender: Gender = Gender.Man
console.log(gender);
gender = Gender.Woman;
console.log(gender);
~~~

#类型断言(函数)
主观上确保类型，当你在TypeScript里使用JSX时，只有 as语法断言是被允许的。
let n: any = "this is a string";
let strLength: number = (`<string>n`).length;

#ts无法隐式转换
#用JSON.stringify()把对象转化为字符串
#用JSON.parse()把字符串变对象

#var不要用，let不能重复赋值，const不能改的常量但可以改引用

#对象的解构。
let {name,age,nation} = obj
{
    let arr = ['a','b','c']
    let [a,b,c] = arr
}
function sayHi({name,age}){}

#展开运算
let a = [1,2,3]
let b = [4,5,6]
let c = [...a,...b]


##接口
`当一个函数是一个对象的属性时，我们把这个函数称为对象的方法`
#interface  描述一个对象必须有哪些属性
#只读属性   
做为变量使用的话用 const，若做为属性则使用readonly。
~~~
interface Human{
    readonly name: string,
    readonly age: number
}
~~~

#想要传入 Interface 之外的属性，可以：

* 使用类型断言
 let mySquare = createSquare({ width: 100, opacity: 0.5 } as SquareConfig);
* 使用索引签名
 interface SquareConfig {
     color?: string;
     width?: number;
     [propName: string]: any;
 }
* 使用临时变量（不推荐）
接口就是用代码描述一个对象必须有什么属性。


#如果这个属性是函数怎么办？
interface Human{
    name: string,
    age: number,
    add(a:number, b:number): number
}

#如果这个对象是函数怎么办？
interface SearchFunc {
    (source: string, subString: string): boolean;
}

#如果这个对象是函数，而且这个对象的属性也是函数怎么办？
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

#如果这个对象是数组怎么办？
interface StringArray {
[index: number]: string;
}

let myArray: StringArray;
myArray = ["Bob", "Fred"];

let myStr: string = myArray[0];