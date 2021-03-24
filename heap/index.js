// max heap (the root is greater then the others)

class Heap {
  constructor() {
    this.storage = [];
  }

  insert(item) {
    const storage = this.storage;

    storage.push(item);
    let ndx = storage.length - 1;

    //sift up
    while (ndx > 0 && storage[ndx] > storage[this.getParent(ndx)]) {
      this.swap(ndx, this.getParent(ndx));
      ndx = (ndx - 1) / 2;
    }
  }

  removeMin() {
    return this.storage.pop();
  }

  removeMax() {
    const storage = this.storage;
    const maxItem = storage[0];
    const lastNdx = storage.length - 1;

    storage[0] = storage[lastNdx];
    storage.pop();

    let ndx = 0;

    //sift down
    while (true) {
      let currentNdx = ndx;
      let leftChildNdx = this.getChildNdx(ndx).left;
      let rightChildNdx = this.getChildNdx(ndx).right;

      if (
        leftChildNdx < lastNdx &&
        storage[leftChildNdx] > storage[currentNdx]
      ) {
        currentNdx = leftChildNdx;
      }

      if (
        rightChildNdx < lastNdx &&
        storage[rightChildNdx] > storage[currentNdx]
      ) {
        currentNdx = rightChildNdx;
      }

      if (ndx === currentNdx) break;

      this.swap(ndx, currentNdx);

      ndx = currentNdx;
    }

    return maxItem;
  }

  getHeap() {
    return this.storage;
  }

  swap(a, b) {
    const storage = this.storage;
    [storage[a], storage[b]] = [storage[b], storage[a]];
  }

  getParent(ndx) {
    return Math.floor((ndx - 1) / 2);
  }

  getChildNdx(ndx) {
    return {
      left: 2 * ndx + 1,
      right: 2 * ndx + 2,
    };
  }
}

module.exports = {
  Heap,
};
