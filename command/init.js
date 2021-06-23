const download = require('download-git-repo');
const inquirer = require('inquirer');
const handlebars = require('handlebars');
const fs = require('fs');
const ora = require('ora');
const chalk = require('chalk');
const promptList = [{
  type: 'list',
  message: 'Select the template type:',
  name: 'template',
  choices: [
    "Vue",
    "React",
  ],
  filter: function (val) { // 使用filter将回答变为小写
    return val.toLowerCase();
  }
}, {
  name: 'author',
  message: 'Please enter the author name'
}, {
  name: 'description',
  message: 'Please enter an item description'
}, {
  name: 'url',
  message: 'Please enter the code address'
}
];

module.exports = (projectName) => {
  const changePackageJson = (projectName, answers) => {
    const fileName = `${projectName}/package.json`;
    if (fs.existsSync(fileName)) {
      const content = fs.readFileSync(fileName).toString();
      var obj = JSON.parse(content);
      obj.name = projectName;
      obj.description = answers.description;
      obj.author = answers.author;
      obj.url = answers.url;
      fs.writeFileSync(fileName, JSON.stringify(obj, null, 2), (err) => {
        console.log(err ? err : '')
      });
    }
    console.log(chalk.green('success'));
  }
  const detailDownloadFunc = (url, projectName, spinner, answers) => {
    download(url, projectName, { clone: true }, function (err) {
      if (err) {
        console.log(err)
      } else {
        spinner.succeed(chalk.green("Loading template success"));
        changePackageJson(projectName, answers);
        spinner.stop();
      }
      process.exit();
    })
  }
  // 文件是否存在
  const isExist = async (name) => {
    return new Promise((resolve) => {
      if (fs.existsSync(name)) {
        console.log(chalk.red('文件夹名已被占用，请更换名字重新创建'))
      } else {
        resolve();
      }
    });
  }
  isExist(projectName).then(() => {
    inquirer.prompt(promptList).then(answers => {
      const tplName = answers.template;
      // 分步接收用户输入的参数
      if (tplName == "vue" || tplName == 'react') {
        const text = 'Loading ' + tplName + ' template...';
        const spinner = ora(text).start();
        spinner.color = 'yellow';
        spinner.text = text;
        if (tplName === "vue") {
          detailDownloadFunc('direct:http://gitlab.ximalaya.com/qiji/qiji_wap', projectName, spinner, answers)
        } else if (tplName === "react") {
          // detailDownloadFunc('gitlab.ximalaya.com:qiji/qiji_creator#test', projectName, spinner, answers)
          detailDownloadFunc('direct:http://gitlab.ximalaya.com/qiji/qiji_creator#test', projectName, spinner, answers);
        }
      } else {
        console.error('A template name that does not exist')
        process.exit();
      }
    })
  })
}