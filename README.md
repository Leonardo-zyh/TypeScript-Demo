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
