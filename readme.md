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
5. **&#955;**
