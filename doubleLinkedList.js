class Node{
  constructor(element){
    this.element = element;
    this.next = null;
    this.prev = null;
  }
}

class DoubleLinkedList{
  head = new Node('Head');
  find = function find(element){
    let curNode = this.head;
    while(curNode.element !== element){
      curNode = curNode.next;
    }
    return curNode;
  }
  insert = function insert(newElement, item){
    let newNode = new Node(newElement);
    let current = this.find(item);
    newNode.next = current.next;
    newNode.prev = current;
    current.next = newNode;
  }
  display = function display(){
    let curNode = this.head;
    while(!(curNode.next === null)){
      console.log(curNode.next.element);
      curNode = curNode.next;
    }
  }
  remove = function remove(item){
    let curNode = this.find(item);
    if(!(curNode.next === null)){
      curNode.prev.next = curNode.next;
      curNode.next.prev = curNode.prev;
      curNode.next = null;
      curNode.prev = null;
    }
  }
  findLast = function findLast(){
    let curNode = this.head;
    while(!(curNode.next === null)){
      curNode = curNode.next;
    }
    return curNode;
  }
  displayReverse = function displayReverse(){
    let curNode = this.findLast();
    while(!(curNode.prev === null)){
      console.log(curNode.element);
      curNode = curNode.prev;
    }
  }
}

module.exports = DoubleLinkedList;
