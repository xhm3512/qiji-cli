const download = require('download-git-repo');
const prompt = require('co-prompt')
const co = require('co')
// inquirer
module.exports = (templateName, projectName) => {
  co(function* () {

  })
  if (templateName === "vue") {
    console.log('clone template ...');
    download('direct:http://gitlab.ximalaya.com/qiji/qiji_wap', projectName, { clone: true }, function (err) {
      console.log(err ? err : 'Success')
    })
  } else if (templateName === "react") {
    console.log('clone template ...');
    download('gitlab.ximalaya.com:qiji/qiji_creator#test', projectName, { clone: true }, function (err) {
      console.log(err ? err : 'Success')// 进行输出
    })
  } else {
    console.error('A template name that does not exist')
  }
}