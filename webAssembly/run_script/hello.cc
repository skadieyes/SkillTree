// jscode是一个表示JavaScript代码的c语言指针
// 第二个参数 是int类型参数
extern "C" void my_run_script(const char *jsCode, int arg);

int main() {
	my_run_script("console.log($arg)", 42);
	return 0;
}
