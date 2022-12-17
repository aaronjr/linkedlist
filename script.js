class Node{
    constructor(data, next = null){
        this.data = data
        this.next = next
    }
}

class List{
    head(node){
        this.headNode = node
    }
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
    toEnd(node){
        let current = this.headNode
        let next = current.next
        while(next != null){
            current = next
            next = next.next
        }
        current.next = node
    }
    last(){
        let current = this.headNode
        let next = current.next
        while(next != null){
            current = next
            next = next.next
        } 
        return current.data
    }

}

const one = new Node(1)
const two = new Node(2)
const three = new Node(3)
const four = new Node(4)
const five = new Node(5)

// console.log(newNode.data, newNode.next)
const theList = new List()

// set head of list
theList.head(one)

// add nodes to end
theList.toEnd(two)
theList.toEnd(three)
theList.toEnd(four)
theList.toEnd(five)

// check for all data points
console.log(theList.all())

// check last data point
console.log(theList.last())