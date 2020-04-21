/*
 * @Author: skady
 * @Date: 2020-04-21 16:46:11
 * @LastEditTime: 2020-04-21 16:51:11
 * @LastEditors: Please set LastEditors
 * @Description: run_script_return_string
 * @FilePath: /wasm-tranning/run_script_return_string/hello.cc
 */
#include <stdlib.h>
#include <emscripten.h>

#include <string>

extern "C" char *my_run_script_string(const char *s, ...);

int main()
{
	std::string s0 = my_run_script_string("'hello'");
	std::string s1 = my_run_2script_string("'world'");
	printf("%s, %s\n", s0.c_str(), s1.c_str());
	return 0;
}