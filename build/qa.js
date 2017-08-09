//created by fuyue 2017 08 09
var props = require('../config/config');
var cp = require('child_process');

cp.exec('svn add *.html --force && svn commit -m ""',{cwd:props.qaSvnPath}, (error, stdout, stderr) => {
  if (error) {
    console.error(`exec qa commit error: ${error}`);
    return;
  }
  console.log(`stdout: ${stdout}`);
  console.log(`stderr: ${stderr}`);
});