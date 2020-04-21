// package.js
// Emscripten提供的mergeInfo辅助函数将我们定义的函数注入LibraryManager.library对象中
// 这样就可以被C++代码使用了
//  emcc --js-library package.js hello.cc 执行命令进行编译
mergeInto(LibraryManager.library, {
	my_run_script: function(code, $arg) {
		eval(UTF8ToString(code));
	},
});
