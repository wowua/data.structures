export class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

export class LinkedList {
  constructor(headNodeVal) {
    const node = new ListNode(headNodeVal);
    this.head = node;
  }

  append(val) {
    const newNode = new ListNode(val);

    const findTailAndAppend = (node) => {
      if (node.next === null) {
        return (node.next = newNode);
      }

      findTailAndAppend(node.next);
    };

    findTailAndAppend(this.head);
  }

  prepend(val) {
    const listCopy = { ...this.head };
    const newNode = new ListNode(val, listCopy);
    this.head = newNode;
  }

  deleteHead() {
    const listBody = this.head.next;
    this.head = listBody;
  }

  deleteTail() {
    const findTail = (node) => {
      if (node.next.next === null) {
        return (node.next = null);
      }

      findTail(node.next);
    };

    findTail(this.head);
  }

  search(valToFind) {
    let currentVal = this.head;

    while (currentVal.next !== null) {
      if (currentVal.val === valToFind) {
        return currentVal;
      }

      currentVal = currentVal.next;
    }

    return null;
  }
}

const list = new LinkedList(1);

list.append(2);
list.append(3);

list.deleteTail();

console.log(list);
