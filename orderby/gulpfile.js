var gulp = require("gulp");
var uglify = require("gulp-uglify");//压缩js文件
var webserver = require("gulp-webserver");//启动服务
var sass = require("gulp-sass");//编译sass
var minify = require("gulp-minify-css");//压缩css
var named = require("vinyl-named");//模块化
var webpack = require("gulp-webpack");//模块化
var rev = require("gulp-rev");// 引入版本控制插件
var revCollecotr = require("gulp-rev-collector");// 引入自动替换文件名

var sassFile = ["./app/src/styles/**/*.scss"];//编译sass的路径
var jsFile = ["./app/src/scripts/app.js"];//js入口文件
var cssDistFile = ["./app/prd/styles/app.css"];
var jsDistFile = ["./app/prd/scripts/app.js"];
//拷贝文件
//copy 定义的名字   在命令行  gulp copy 调用
gulp.task("copy",function(){//格式就是这样子  .pipe就是这样连缀着写
	gulp.src("./index.html")//查找文件
		.pipe(gulp.dest("./app"));//复制到哪里
});
//启动服务
gulp.task("webserver",function(){
	gulp.src("./")//在本目录下开启服务
	
		.pipe(webserver({//配置
			port:80,  
	    	livereload:true, // 页面保存浏览器自动刷新  在上边开启的服务上运行
	    	directoryListing:{   // 目录结构的配置
	    		enable:true,     // 显示目录
	    		path:"./"     // 显示具体路径下的目录
	    	}
		}))
});

//编译sass
gulp.task("sass",function(){
	//需要编译的目录
	gulp.src(sassFile)
		//执行编译
		.pipe(sass())
		//压缩编译后的代码
		.pipe(minify())
		//把最后的文件发放在此文件下
		.pipe(gulp.dest("./app/prd/styles"));
});
//模块化
gulp.task("packjs",function(){
    gulp.src(jsFile)
        .pipe(named())//没有它生成文件的名字就是main
        .pipe(webpack({
        	output:{
        		filename:'[name].js'
        	}, 
        	modules:{
        		loaders:[
                  {
                  	test:/\.js$/,
                  	loader:'imports?define=>false'
                  }
        		]
        	}
        }))
        .pipe(uglify().on("error",function(e){
            console.log("\x07",e.lineNumber,e.message);
            return this.end();
        }))
        .pipe(gulp.dest("./app/prd/scripts"));
});
//版本控制
gulp.task("ver",function(){
	gulp.src(cssDistFile)
		.pipe(rev())//生成md5文件
		.pipe(gulp.dest("./app/prd/styles"))//md5文件的存放路径
		.pipe(rev.manifest())//生成json文件自动替换使用
		.pipe(gulp.dest("./app/ver/styles"));
	gulp.src(jsDistFile)
		.pipe(rev())//生成md5文件
		.pipe(gulp.dest("./app/prd/scripts"))//md5文件的存放路径
		.pipe(rev.manifest())//生成json文件自动替换使用
		.pipe(gulp.dest("./app/ver/scripts"))//存放路径
})
//html文件自动将入口文件的文件名替换为md5加密的
gulp.task("revCollector",function(){
	gulp.src(["./app/ver/**/*.json","./app/index.html"])
		.pipe(revCollecotr())
		.pipe(gulp.dest("./app"))
})
gulp.task("min",["ver","revCollector"]);//版本控制和引入md5操作一次就可以  所以在做完项目运行 gulp min就行了
//监测的任务
gulp.task("watch",function(){
	//检测到index.html发生改变 调用copy的任务 从新复制
	gulp.watch("index.html",["copy"]);
	gulp.watch(sassFile,["sass"]);//编译scss
	gulp.watch("./app/src/scripts/**/*.js",["packjs"]);
});

//设置默认操作  把需要执行的任务放在数组里  直接用 gulp调用
gulp.task("default",["watch","webserver"]);

