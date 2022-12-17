# Linked list

This code is a 'solution' to The Odin Project's Linked Lists Project, part of their Computer Science course.

Run with Node installed: node script.js

### Two classes:

- LinkedList class, which will represent the full list.
- Node class, containing a value function and a link to the nextNode.

### Build the following functions in your linked list class:

- Append(value) adds a new node containing value to the end of the list
- Prepend(value) adds a new node containing value to the start of the list
- Size returns the total number of nodes in the list
- Head returns the first node in the list
- Tail returns the last node in the list at(index) returns the node at the given index
- Pop removes the last element from the list
- Contains(value) returns true if the passed in value is in the list and otherwise returns false.
- Find(value) returns the index of the node containing value, or null if not found.
- ToString represents your LinkedList objects as strings, so you can print them out and preview them in the console. The format should be: ( value ) -> ( value ) -> ( value ) -> null

### Extra Credit

- InsertAt(value, index) that inserts a new node with the provided value at the given index.
- RemoveAt(index) that removes the node at the given index.