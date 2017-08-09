var path = require('path');

module.exports = {
	//本地调试远程接口token  --- 对应认证成功后的cookie : PHPSESSID
	accessToken : "XXX",
	//静态资源在index.html 中的路径生成
	assetsDir : "static",
	//静态资源 上传cdn的本地copy目录
	assetsLocalCdn : path.resolve(__dirname,"../../cdn/static/pc/static"),
	//静态资源的cdn网络根目录
	assetsCdn : "http://static.soyoung.com/pc/",
	//不同静态资源的dir划分
	cdnDist : "saasv1",
	//qa库本地库目录
	qaSvnPath : path.resolve(__dirname,"../../qa/"),
	//qa库本地库入口文件
	qaIndex : path.resolve(__dirname,"../../qa/index.html"),

	//cdn quploadr platform download url : https://developer.qiniu.com/kodo/tools/1302/qshell#download
	//cdn upload exe  --- 对应qshell_windows_amd64 本地的路径
	cdnUploader : path.resolve(__dirname,"../upload/qshell_windows_amd64.exe"),
	//cdn upload config --- 上传cdn所需的配置文件
	cdnUploadConf : path.resolve(__dirname,"../upload/static.conf")
}