class List{
  listSize = 0;
  pos = 0;
  listData = [];
  clear = function clear(){
    delete this.listData;
    this.listData = [];
    this.listSize = this.pos = 0;
  }
  find = function find(element) {
      this.listData.forEach(e => {
        if(e === element){
          return listData.indexOf(e);
        }
      });
      return -1;
  }
  toString = function toString(){
    return this.listData;
  }
  insert = function insert(element, after){
    let insertPos = this.find(after);
    if(insertPos > -1){
      this.listData.splice(insertPos + 1, 0, element);
      ++this.listSize;
      return true;
    }
    return false;
  }
  append = function append(element){
    this.listData[this.listSize++] = element;
  }
  prev = function prev(){
    if(this.pos > 0){
      --this.pos;
    }
  }
  remove = function remove(element){
    let foundat = this.find(element);
    if(foundat > -1){
      this.listData.splice(foundat, 1);
      --this.listSize;
      return true;
    }
    return false;
  }
  front = function front(){ this.pos = 0; }
  end = function end(){ this.pos = this.listSize -1;}
  next = function next(){
    if(this.pos < this.listSize -1){
      ++this.pos;
    }
  }
  length = function length(){
    return this.listSize;
  }
  currentPosition = function currentPosition(){return this.pos;}
  moveTo = function moveTo(position){
    this.pos = position;
  }
  getElement = function getElement(){return this.listData[this.pos];}
  length = function length(){}
  contains = function contains(element){
    this.listData.forEach(e => {
      if(e === element){
        return true;
      }
    });
    return false;
  }
}

module.exports = List;
