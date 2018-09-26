class Stack{
  dataStore = [];
  top = 0;
  push = function push(element){
    this.dataStore[this.top++] = element;
  }
  pop = function pop(){
    return this.dataStore[--this.top];
  }
  peek = function peek(){
    return this.dataStore[this.top -1];
  }
  length = function length(){
    return this.top;
  }
  clear = function clear(){
    this.top = 0;
  }
}

module.exports = Stack;
