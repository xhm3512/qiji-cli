#! /usr/bin/env node

const program = require('commander');
const download = require('download-git-repo');
//version 版本号
//name 新项目名称
program
    .version(require('../package').version) 
    .command('init <templateName> <projectName>')
     .description('初始化项目文件')
    .action((templateName, projectName) => {
        if (templateName === "vue") {
            console.log('clone template ...');
            download('direct:http://gitlab.ximalaya.com/qiji/qiji_creator#master', projectName,  { clone: true },function (err) {
                console.log(err ? err : 'Success')
            })
        } else if(templateName === "react") {
            console.log('clone template ...');
            download('gitlab.ximalaya.com:qiji/qiji_creator#test', projectName,  { clone: true },function (err) {
                console.log(err ? err : 'Success')
            })
        } else {
          console.error('A template name that does not exist')
        }
    });
program.parse(process.argv);
