const download = require('download-git-repo');
const inquirer = require('inquirer');
const ora = require('ora');
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
}];

module.exports = (projectName) => {
  const detailDownloadFunc = (url, projectName, spinner) => {
    download(url, projectName, { clone: true }, function (err) {
      if (err) {
        console.log(err)
      } else {
        spinner.succeed("Loading template success")
        spinner.stop()
      }
      process.exit();
    })
  }
  inquirer.prompt(promptList).then(answers => {
    const tplName = answers.template;
    // 分步接收用户输入的参数
    if (tplName == "vue" || tplName == 'react') {
      const text = 'Loading ' + tplName + ' template';
      const spinner = ora(text).start();
      spinner.color = 'yellow';
      spinner.text = text;
      if (tplName === "vue") {
        detailDownloadFunc('direct:http://gitlab.ximalaya.com/qiji/qiji_wap', projectName, spinner)
      } else if (tplName === "react") {
        detailDownloadFunc('gitlab.ximalaya.com:qiji/qiji_creator#test', projectName, spinner)
      }
    } else {
      console.error('A template name that does not exist')
      process.exit();
    }
  })

}