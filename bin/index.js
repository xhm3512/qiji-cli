#! /usr/bin/env node
const program = require('commander');
//version 版本号
//name 新项目名称
program
    .version(require('../package').version) // --version 版本

// 初始化项目
program
    .command('init <projectName>') // 初始化命令
    .description('初始化项目文件')
    .alias('i')  // 命令别名，用init和i都行
    .action((projectName) => {// 得到name 
        require('../command/init')(projectName)
    });

// 查询项目依赖文件
program
    .command('list')
    .description('list all')
    .alias('l')
    .action(cmd => {
        // validateArgsLen(process.argv.length, 3);
        require('../command/query')();
    });

program.parse(process.argv); //解析变量

if (!program.args.length) {
    program.help()
}
