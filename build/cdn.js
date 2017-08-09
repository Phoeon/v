//created by fuyue 2017 08 09
var props = require('../config/config');
var exec = require('child_process').exec;
var path = require("path");
var gulp = require("gulp");
var chalk = require('chalk');
var rm = require('rimraf');

const cdn = ()=>{
	var cmd = `${props.cdnUploader} qupload ${props.cdnUploadConf}`;
	exec(cmd, (error, stdout, stderr) => {
	  if (error) {
	    console.error(`exec cdn upload error: ${error}`);
	    return;
	  }
	  console.log(`stdout: ${stdout}`);
	  console.log(`stderr: ${stderr}`);
	});
}

console.log(chalk.cyan(' clean up previous cdn static files.\n'))
rm(props.assetsLocalCdn,err=>{
	console.log(chalk.cyan(' clean up success.\n'));

	console.log(chalk.cyan('  assets files copy to local cdn path.\n'))
	gulp.src(path.join(props.qaSvnPath,"static/**/*.*"))
	.pipe(gulp.dest(props.assetsLocalCdn));
	console.log(chalk.cyan('  assets files copy complete.\n'))

	cdn();
});
