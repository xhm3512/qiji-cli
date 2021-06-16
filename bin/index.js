#! /usr/bin/env node
const program = require('commander');
//version 版本号
//name 新项目名称
program
    .version(require('../package').version) // --version 版本

program
    .command('init <projectName>') // 初始化命令
    .description('初始化项目文件')
    .action((projectName) => {// 得到name 
        require('../command/init')( projectName)
    });
program.parse(process.argv); //解析变量

if (!program.args.length) {
    program.help()
}
