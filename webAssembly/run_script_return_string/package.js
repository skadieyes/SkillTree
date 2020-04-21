/*
 * @Author: your name
 * @Date: 2020-04-21 16:46:11
 * @LastEditTime: 2020-04-21 16:49:09
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /wasm-tranning/run_script_return_string/package.js
 */
// package.js

mergeInto(LibraryManager.library, {
	my_run_script_string: function (code) {
		var s = eval(UTF8ToString(code)) + '';
		var p = _my_run_script_string;
		if (!p.bufferSize || p.bufferSize < s.length + 1) {
			if (p.bufferSize) _free(p.buffer);
			p.bufferSize = s.length + 1;
			p.buffer = _malloc(p.bufferSize);
		}
		stringToUTF8(s, p.buffer, 1024 * 8);
		return p.buffer;
	},
});
