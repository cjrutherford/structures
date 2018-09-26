class Node{
  constructor(element){
    this.element = element;
    this.next = null;
  }
}

class LinkedList{
  head = new Node("Head");
  find = function find(element){
    let curNode = this.head;
    while(curNode !== element){
      curNode = curNode.next;
    }
    return curNode;
  }
  insert = function insert(newElement, item){
    let newNode = new Node(newElement);
    let current = this.find(item);
    newNode.next = current.next;
    current.next = newNode;
  }
  remove = function remove(item){
    let prevNode = this.findPrevious(item);
    if(!(prevNode.next === null)){
      prevNode.next = prevNode.next.next;
    }
  }
  display = function display(){
      let curNode = this.head;
      while(!(curNode.next === null)){
        console.log(curNode.next.element);
        curNode = curNode.next;
      }
  }
  findPrevious = function findPrevious(item) {
    let curNode = this.head;
    while(!(curNode.next === null) && (curNode.next !== item)){
      curNode = curNode.next;
    }
    return curNode;
  }
}

module.exports = LinkedList;
