function checkError(message) {
  this.name = 'check';
  this.message = message || '错误图片';
  this.stack = (new Error()).stack;
}
checkError.prototype = Object.create(Error.prototype);
checkError.prototype.constructor = checkError;