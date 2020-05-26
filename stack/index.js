export class Stack {
  constructor() {
    this.size = 0;
    this.storage = {};
  }

  push(data) {
    const size = this.size++;
    this.storage[size] = data;
  }

  pop() {
    const size = --this.size

    if (size < 0) return new Error("Отрицательный размер стека");

    const deletedData = this.storage[size];

    delete this.storage[size];

    return deletedData;
  }
}
