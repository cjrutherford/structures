class HashTable{
  table = new Array(250);
  simpleHash = function simpleHash(data){
    let total = 0;
    for(let i=0; i< data.length; ++i){
      total += data.charCodeAt(i);
    }
    console.log(`Hash value: ${data} -> ${total}`);
    return total % this.table.length;
  }
  betterHash = function betterHash(data){
    const h = 37;
    let total = 0;
    for(let i=0; i< data.length ; ++i){
      total += H * total + data.charCodeAt(i);
    }
    total = total % this.table.length -1;
    if(total < 0){
      total += this.table.length-1
    }
    return parseInt(total);
  }
  showDistro = function showDistro(){
    let n = 0;
    for(let i=0; i< this.table.length; ++i){
      console.log(`${i}:${this.table[i]}`);
    }
  }
  put = function put(data){
    let pos = this.betterHash(data);
    this.table[pos] = data;
  }
}
