class Node {
    constructor(value) {
      this.value = value;
      this.nextNode = null;
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
    }
  
    append(value) {
      const newNode = new Node(value);
      if (!this.head) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        this.tail.nextNode = newNode;
        this.tail = newNode;
      }
    }
  
    prepend(value) {
      const newNode = new Node(value);
      newNode.nextNode = this.head;
      this.head = newNode;
      if (!this.tail) {
        this.tail = newNode;
      }
    }
  
    size() {
      let count = 0;
      let current = this.head;
      while (current) {
        count++;
        current = current.nextNode;
      }
      return count;
    }
  
    at(index) {
      if (index < 0) return null;
      let current = this.head;
      let currentIndex = 0;
      while (current && currentIndex < index) {
        current = current.nextNode;
        currentIndex++;
      }
      return current;
    }
  
    pop() {
      if (!this.head) return;
      if (this.head === this.tail) {
        this.head = null;
        this.tail = null;
        return;
      }
      let current = this.head;
      while (current.nextNode !== this.tail) {
        current = current.nextNode;
      }
      current.nextNode = null;
      this.tail = current;
    }
  
    contains(value) {
      let current = this.head;
      while (current) {
        if (current.value === value) {
          return true;
        }
        current = current.nextNode;
      }
      return false;
    }
  
    find(value) {
      let current = this.head;
      let currentIndex = 0;
      while (current) {
        if (current.value === value) {
          return currentIndex;
        }
        current = current.nextNode;
        currentIndex++;
      }
      return null;
    }
  
    toString() {
      let current = this.head;
      let result = "";
      while (current) {
        result += `(${current.value}) -> `;
        current = current.nextNode;
      }
      return result + "null";
    }
  
    insertAt(value, index) {
      if (index === 0) {
        this.prepend(value);
        return;
      }
      const newNode = new Node(value);
      const previousNode = this.at(index - 1);
      if (previousNode) {
        newNode.nextNode = previousNode.nextNode;
        previousNode.nextNode = newNode;
        if (newNode.nextNode === null) {
          this.tail = newNode;
        }
      }
    }
  
    removeAt(index) {
      if (index === 0) {
        this.head = this.head ? this.head.nextNode : null;
        if (!this.head) {
          this.tail = null;
        }
        return;
      }
      const previousNode = this.at(index - 1);
      if (previousNode && previousNode.nextNode) {
        previousNode.nextNode = previousNode.nextNode.nextNode;
        if (!previousNode.nextNode) {
          this.tail = previousNode;
        }
      }
    }
  }
  
  // Example usage:
  
  const linkedList = new LinkedList();
  linkedList.append(0);
  linkedList.append(2);
  linkedList.prepend(3);
  linkedList.prepend(4);
  linkedList.prepend(1);
  console.log(linkedList.toString());

  linkedList.insertAt(1.5, 2);
  console.log('insertAt is at position',linkedList.find(1.5));
  console.log(linkedList.toString());
  
  linkedList.removeAt(2);
  
  console.log('size of list = ', linkedList.size());
  console.log('head value = ', linkedList.head.value);
  console.log('tail value = ',linkedList.tail.value);
  console.log('value at selected position is ',linkedList.at(1).value);
  console.log('input constains ' ,linkedList.contains(2));
  console.log('value found at position ', linkedList.find(3));
  