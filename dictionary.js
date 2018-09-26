class Dictionary{
  dataStore = {};
  add = function add(key, value){
    this.dataStore[key] = value;
  }
  find = function find(key) {
    return this.dataStore[key];
  }
  remove = function remove(key) {
    delete this.dataStore[key];
  }
  showAll = function showAll(){
    for(let key of Object.keys(this.dataStore)){
      console.log(`${key} -> ${this.dataStore[key]}`);
    }
  }
  showSorted = function showSorted() {
    for(let key of Object.keys(this.dataStore).sort()){
      console.log(`${key} -> ${this.dataStore[key]}`);
    }
  }
  count = function count(){
    let n = 0;
    for(let key of Object.keys(this.dataStore)){
      ++n;
    }
    return n;
  }
  clear = function clear() {
    for(let key of Object.keys(this.dataStore)){
      delete this.dataStore[key];
    }
  }
}

module.exports = Dictionary;
