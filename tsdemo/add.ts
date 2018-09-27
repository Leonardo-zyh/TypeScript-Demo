#!/usr/bin/env ts-node
{
    const a: number = parseInt(process.argv[2]);
    const b: number = parseInt(process.argv[3]);
    
    if (Number.isNaN(a) || Number.isNaN(b)) {
      console.error('输入不合法');
      process.exit(1);
    }
    if (b === 0) {
        console.log('0不能为除数');
        process.exit(2);
    }

    console.log(a / b);
    process.exit(0);
}