class Node{
    constructor(data, next = null){
        this.data = data
        this.next = next
    }
}

class List{
    // get all data points from list
    all(){
        let current = this.headNode
        let next = current.next
        let allData = []
        allData.push(this.headNode.data)
        while(next != null){
            allData.push(next.data)
            current = next
            next = next.next
        }
        return allData
    }
    // add to end of list
    append(node){
        if(!this.headNode){
            this.headNode = node
        } else {
        let current = this.headNode
        let next = current.next
        while(next != null){
            current = next
            next = next.next
        }
        current.next = node
        }
    }
    prepend(node){
        node.next = this.headNode
        this.headNode = node
    }
    size(){
        let counter = 1;
        let current = this.headNode
        let next = current.next
        while(next != null){
            current = next
            next = next.next
            counter += 1
        }
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
        return current.data
    }
    at(index){
        let counter = 1
        let current = this.headNode
        let next = current.next
        while(counter !== index){
            current = next
            next = next.next
            counter ++
        }
        return current.data
    }
    pop(){
        let current = this.headNode
        let next = current.next
        while(next.next !== null){
            current = next
            next = next.next
        }
        current.next = null
    }
    contains(target){
        let current = this.headNode
        let next = current.next
        while(next.next !== null){
            if(current.data == target) {
                return true
            }
            current = next
            next = next.next
        }
        return false
    }
    find(target){
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
        let current = this.headNode
        let next = current.next
        let string = `(${current.data}) -> `
        while(current.next !== null){
            string += `(${next.data}) -> `
            current = next
            next = next.next
        }
        return string += `(null)`
    }
}

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
// function
console.log('All inc 7:' )


// insert new node
const eight = new Node(8)
// function
console.log('All inc 8:' )