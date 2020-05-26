export class Queue {
  constructor() {
    this.startNdx = 1;
    this.endNdx = 1;
    this.storage = {};
  }

  size() {
    return this.endNdx - this.startNdx;
  }

  enqueue(data) {
    this.storage[this.endNdx] = data;
    this.endNdx++;
  }

  dequeue() {
    const startNdx = this.startNdx;
    const deletedData = this.storage[this.startNdx];

    if (this.endNdx <= this.startNdx) return new Error("Очередь пуста");

    delete this.storage[startNdx];
    this.startNdx++;
    return deletedData;
  }
}