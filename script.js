class Node{
    constructor(data, next = null){
        this.data = data
        this.next = next
    }
}

class List{
    // get all data points from list
    all(){
        // set to head and the node following the head
        let current = this.headNode
        let next = current.next
        let allData = []
        allData.push(this.headNode.data)
        // loop through and add each data point to array
        while(next != null){
            allData.push(next.data)
            current = next
            next = next.next
        }
        // return full array
        return allData
    }
    // add to end of list
    append(node){
        // if no headNode set one
        if(!this.headNode){
            this.headNode = node
        } else {
        // set to head and the node following the head
        let current = this.headNode
        let next = current.next
        while(next != null){
            current = next
            next = next.next
        }
        // add node to end of current list
        current.next = node
        }
    }
    prepend(node){
        // change current head to next of new node
        // change the headNode to new node
        node.next = this.headNode
        this.headNode = node
    }
    size(){
        // set a counter
        // set to head and next of head
        let counter = 1;
        let current = this.headNode
        let next = current.next
        while(next != null){
            current = next
            next = next.next
            counter += 1
        }
        // return counter after looping through all items
        return counter
    }
    // get back last item
    tail(){
        let current = this.headNode
        let next = current.next
        while(next != null){
            current = next
            next = next.next
        } 
        // return current when next = null
        return current.data
    }
    at(index){
        // set counter
        let counter = 1
        let current = this.headNode
        let next = current.next
        while(counter !== index){
            current = next
            next = next.next
            counter ++
        }
        // return after loop when target matches counter
        return current.data
    }
    pop(){
        // run to end of list by checking for null
        // then change the second from last next to null
        let current = this.headNode
        let next = current.next
        while(next.next !== null){
            current = next
            next = next.next
        }
        current.next = null
    }
    contains(target){
        // set to current head and its next
        let current = this.headNode
        let next = current.next
        while(next.next !== null){
            // if it matches return true
            if(current.data == target) {
                return true
            }
            current = next
            next = next.next
        }
        // return false if no match
        return false
    }
    find(target){
        // as before set a counter to get to the correct index
        // but return the index not true or false
        let current = this.headNode
        let next = current.next
        let counter = 0
        while(current.next !== null){
            if(current.data == target) {
                return counter
            } else if (next.data == target){
                return counter
            }
            counter += 1
            current = next
            next = next.next
        }
        return null
    }
    toString(){
        // loop over the list and data using template strings
        let current = this.headNode
        let next = current.next
        let string = `(${current.data}) -> `
        while(current.next !== null){
            string += `(${next.data}) -> `
            current = next
            next = next.next
        }
        // return the string with end set to null
        return string += `(null)`
    }
    insertAt(index, node){
        // takes in an index and node
        // lopp through list to index and add node changing
        // the nexts appropatly
        let counter = 0
        let prev
        let current = this.headNode
        let next = current.next
        while(counter !== index){
            prev = current
            current = next
            next = next.next
            counter ++
        }
        if (index == 0){
            node.next = this.headNode
            this.headNode = node 
        } else {
        node.next = current
        prev.next = node
        }
    }
    removeAt(index){
        // loop through list to correct index
        // change previous.next to next
        // skipping current, thus the list forgetting it
        let counter = 0
        let prev
        let current = this.headNode
        let next = current.next
        while(counter !== index){
            prev = current
            current = next
            next = next.next
            counter ++
        }
        if(index == 0){
            this.headNode = this.headNode.next
        } else {
        prev.next = next
        }
    }
}

// create nodes
const one = new Node(1)
const two = new Node(2)
const three = new Node(3)
const four = new Node(4)
const five = new Node(5)
const six = new Node(6)

// console.log(newNode.data, newNode.next)
const theList = new List()

// set head of list
theList.append(one)
theList.append(two)
theList.append(three)
theList.append(four)
theList.append(five)

// check for head
console.log('First head:', theList.headNode.data)

// change head node
theList.prepend(six)
// check for head if changed
console.log('Changed head:', theList.headNode.data)

// check for all data points
console.log('All items:', theList.all())

// check last data point
console.log('Last item:', theList.tail())

// length of list
console.log('Length:', theList.size())

// at 3rd index
// counting from 1 not 0
// 3rd item in list
console.log('At index:', theList.at(3))

// remove last item
theList.pop()

// check new list
console.log('List after pop:', theList.all())

// find an item
// checks for 5 which was previously removed
console.log('Contains 5:', theList.contains(5))

// checks for 6 which is present
console.log('Contains 6:', theList.contains(6))

// check list and return index of the matched target
// returns the index
console.log('Find 4', theList.find(4))

// return list as a string
console.log(theList.toString())

// insert new node
const seven = new Node(7)
theList.insertAt(2, seven)
console.log('All inc 7, at 2nd index:', theList.all())

// insert new node
theList.removeAt(3)
console.log('Remove 3rd item:', theList.all())