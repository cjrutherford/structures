class Queue{
  dataStore = [];
  enqueue = function enqueue(element){ this.dataStore.push(element);}
  dequeue = function dequeue(){ return this.dataStore.shift();}
  front = function front(){ return this.dataStore[0];}
  back = function back(){ return this.dataStore[this.dataStore.length-1];}
  toString = function toString(){
    let restr = '';
    this.dataStore.forEach(x => {
      restr += x + "\n";
    });
    return restr;
  }
  empty = function empty(){
    if(this.dataStore.length === 0){
      return true;
    }else{
      return false;
    }
  }
}

module.exports = Queue;
