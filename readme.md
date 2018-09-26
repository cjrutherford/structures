# Data Structures in JavaScript

## Overview:
Data structures provide a method of both storing and processing data. Each one has a *"Best Case Use"* and should be understood before using them. This Repository provides an implementation of these data structures that are best suited for primitive data types. *This is due to the nature of JavaScript, dynamically typed, and probably should not be used in production.*

## List

The List is the most basic data structure. It is essentially an array, but this array is controlled by the `add`, `remove`, etc. functions. The list can be accessed by index, like the array, and can be treated very similarly to an array.

### List Details:
1. List Size `listSize` - determines the length of the list. (Coincides with the number of elements in the list.)
2. Position `pos` - represents the current position in the list.
3. List Data `listData` - Private property that is the actual list, but the overarching class structure controls interactions with the array to enforce specific operations and access.
4. **&#955;** Clear : `clear()` - removes all elements from the list.
5. **&#955;** Find: `find(element)` - finds an element in the list based on the element passed.
6. **&#955;** ToString: `toString()` - Returns the array in whole for the purposes of printing the list.
7. **&#955;** Insert: `insert(element, after)` - Inserts an element passed to the function after the index passed to the function. _returns true if successful, false if not._
8. **&#955;** Append: `append(element)` - Adds the provided element at the end of the list.
9. **&#955;** Remove: `remove(element)`: removes the element passed to the function from the list.
10. **&#955;** Front: `front()`: sets the current position of the list as the first element. (_index will be zero_)
11. **&#955;** End: `end()`: sets the current position of the list as the last element. (_index will be `listData.length -1`_)
12. **&#955;** Prev: `prev()` - sets the current position of the list as the next lowest index.
13. **&#955;** Next: `next()` - sets the current position of the list as the next highest index.
14. **&#955;** Length: `length()` - returns the length of the list.
15. **&#955;** Current Position: `currentPosition()` - returns the index of the currently selected element of the list.
16. **&#955;** MoveTo: `moveTo(position)` - sets the current position of the list to the passed in index.
17. **&#955;** GetElement: `getElement()` - returns the currently selected element of the list.
18. **&#955;** Contains: `contains(element)` - returns true if the element is contained in the list, otherwise returns false.

## Stack

The Stack is a Last In First Out (*LIFO*) data structure. To get an idea of an analog representation of a Stack, think of a physical stack of paper. For the purposes of consistency, we limit ourselves to only being able to add or remove items to the top of the stack. This means that the data structure is intended only to be accessed at one end of the structure.

### Stack Details:

1. Data Store: `dataStore` - private property that is essentially an array of data, that is the underlying storage of the data.
2. Top: `top` - Represents the index of the underlying array, and the only point of entry into the stack. The top is the boundary that we access the stack.
3. **&#955;** Push: `push(element)` - Adds an element to the stack. Since we can only modify from the "top" of the stack, this new element becomes the top of the stack and will be the first returned by `pop()`.
4. **&#955;** Pop: `pop()` - returns the element at the "top" of the stack. This also "removes" the item from the stack. (**this item is not actually removed from the underlying array, it is simply "no longer the top", when a new element is added by `push()` it will be overwritten.**)
5. **&#955;** Peek: `peek()` - Returns the element immediately below `top`. (_`top - 1`_)
6. **&#955;** Length: `length()` - returns the value of `Top`, which is essentially the number of elements remaining in the stack.
7. **&#955;** Clear: `clear()` - Sets top to 0. This essentially clears the entire stack of items. (Mainly because `push()` will overwrite any existing element that is above `top`)


## Queue

The Queue data structure is similar to the Stack, because we can only access the data from one "end" of the structure, but instead of adding and removing from the same end, as in LIFO, we add and remove from opposite "ends" to create a First In First Out (FIFO) flow for this data structure.

### Queue Key Terms
1. **Enqueue** - Means that we are adding to the queue.
2. **Dequeue** - Means that we are taking away from the queue.

### Queue Details
1. Data Store: `dataStore` - Implemented as a private array, this serves as the basis of the queue.
2. **&#955;** Enqueue: `enqueue(element)` - Adds an element to the queue. (on the newest "end" of the queue.)
3. **&#955;** Dequeue: `dequeue()` - removes an element from the queue. (on the oldest "end" of the queue.)
4. **&#955;** Front: `front()` - returns the first element of the queue. (True 0 index of the underlying array.)
5. **&#955;** Back: `back()` - returns the last element of the queue. (True `dataStore.length -1` index of the underlying array.)
6. **&#955;** To String: `toString()` - provides a string representation of the entire queue as currently instantiated.

## Linked List

The Linked List is a data structure similar to the original list, except that instead the list isn't simply an array behind the scenes, and each element of the list is a "Node" object. The node is simply the value, and a pointer to the next node in the list. The pointer is the "Link" part of the linked list. The Linked List described can be called a "Singly Linked List" as each node in the list is linked to the next node in the list only. There are no "back" links to previous nodes.

### Linked List Details

Linked Lists include Nodes and nodes are simply the value of the node, and a link to the next node denoted by the `next` property.

#### Node
1. Element: `element` - Value of the Node.
2. Next: `next` - Link to the next Node.

#### Linked List
1. Head: `head` - Represents the start of the Linked List.
2. **&#955;** Find: `find(element)` - finds the Node with the value passed to the function.
3. **&#955;** Insert: `insert(newElement, item)` - Creates a new Node to add to the list based on the `newElement` parameter. Then it finds the location in the list to add the new node, and inserts the new node in the appropriate spot in the Linked List.
4. **&#955;** Remove: `remove(item)` - Locates the item to be removed, and removes the item from the Linked List.
5. **&#955;** Display: `display()` - logs to the console each item in the Linked List.
6. **&#955;** Find Previous: `findPrevious(item)` - determines the node prior to the one passed as a parameter.
