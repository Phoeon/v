# created by fuyue 2017 08 09
+ src
		+ api 
			+ 按照view模块结构给出serveice layer
		+ assets
			+ 静态资源

		+ components
			+ 基础组件

		+ less
			+ less 基础less
			+ base  全局基础的样式文件
			+ macro 全局less函数宏定义文件

		+ directive
			+ 与三方交接的自定义指令

		+ router
			+ 路由 动态路由和静态路由

		+ store
			+ 统一数据来源和状态管理

		+ view
			+ 业务view

		+ widget
			+ 三方的小插件或者自定义的工具

+ upload
		+ cdn 相关的上传工具（统一放置，而不是以往的邮件或者rtx相传）

+ config
		
		+ 构建和本地调试相关的配置文件
		+ config.js  开发者只要配置该文件就ok
			+ 内部包含了dev和build的所有配置（统一配置，而不是，分散到多个文件中，口口相传）
		+ index.js
			+ dev
				+ proxyTable 用来指定本地调试架设远程接口的代理配置 
