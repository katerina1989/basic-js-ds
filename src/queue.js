const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.head = null; //1-ый элемент
    this.last= null;
  }
  

  getUnderlyingList() {
    return this.head;
  }

 
  enqueue(value) {
    if (this.head === null) {
      this.head = new ListNode(value);
      this.last = this.head;
    } else {
      this.last.next = new ListNode(value);
      this.end = this.end.next;
    }
  }

  dequeue() {
    let current = this.head;

    this.head = current.next;

    return current.value;
  }
}


module.exports = {
  Queue
};
