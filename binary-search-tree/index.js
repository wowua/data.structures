import { Queue } from "../queue/index.js";

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

export class BinaryTree {
  constructor(value) {
    this.root = new Node(value);
    this.count = 1;
  }

  size() {
    return this.count;
  }

  insert(value) {
    this.count++;
    let nodeToInsert = new Node(value);

    const searchPlaceToInsert = (node) => {
      if (value < node.value) {
        if (!node.left) {
          node.left = nodeToInsert;
        } else {
          searchPlaceToInsert(node.left);
        }
      }

      if (value > node.value) {
        if (!node.right) {
          node.right = nodeToInsert;
        } else {
          searchPlaceToInsert(node.right);
        }
      }
    };

    searchPlaceToInsert(this.root);
  }

  min() {
    let currentNode = this.root;

    while (currentNode.left) {
      currentNode = currentNode.left;
    }

    return currentNode.value;
  }

  max() {
    let currentNode = this.root;

    while (currentNode.right) {
      currentNode = currentNode.right;
    }

    return currentNode.value;
  }

  contains(value) {
    let currentNode = this.root;

    while (currentNode) {
      if (value === currentNode.value) {
        return true;
      }

      if (value < currentNode.value) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }

    return false;
  }

  //left, root, right
  dfsInOrder() {
    let result = [];

    const traverse = (node) => {
      if (node.left) traverse(node.left);
      result.push(node.value);

      if (node.right) traverse(node.right);
    };

    traverse(this.root);

    return result;
  }

  //root, left, right
  dfsPreOrder() {
    let result = [];

    const traverse = (node) => {
      result.push(node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    };

    traverse(this.root);

    return result;
  }

  //left, right, root
  dfsPostOrder() {
    let result = [];

    const traverse = (node) => {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      result.push(node.value);
    };

    traverse(this.root);

    return result;
  }

  bfs() {
    let result = [];
    let queue = new Queue();

    queue.enqueue(this.root);

    while (queue.size()) {
      let currentNode = queue.dequeue();
      result.push(currentNode.value);

      if (currentNode.left) {
        queue.enqueue(currentNode.left);
      }

      if (currentNode.right) {
        queue.enqueue(currentNode.right);
      }
    }

    return result;
  }
}


