import { Stack, Queue } from "./index";

it("Стек добавляет элемент", () => {
  const result = {
    size: 2,
    storage: {
      0: 13,
      1: 666
    }
  };
  const stack = new Stack();

  stack.push(13);
  stack.push(666);

  expect(stack).toMatchObject(result);
});

it("Стек удаляет элемент", () => {
  const result = {
    size: 1,
    storage: {
      0: 13,
    }
  };
  const stack = new Stack();

  stack.push(13);
  stack.push(666);

  stack.pop();

  expect(stack).toMatchObject(result);
});

it("Очередь добавляет элемент", () => {
  const queue = new Queue();
  queue.enqueue(1);
  queue.enqueue(2);
  
  const storage = {
    1: 1,
    2: 2
  };

  expect(queue.storage).toMatchObject(storage);
});


it("Очередь удаляет элемент", () => {
  const queue = new Queue();
  queue.enqueue(1);
  queue.enqueue(2);

  queue.dequeue();
  
  const storage = {
    2: 2
  };

  expect(queue.storage).toMatchObject(storage);
});

it("Очередь считает индексы", () => {
  const queue = new Queue();
  queue.enqueue(1);
  queue.enqueue(2);
  queue.enqueue(3);
  
  const ndxes = {
    startNdx: 1,
    endNdx: 4
  };

  expect(queue).toMatchObject(ndxes);
});

it("Очередь коррекно считает размер", () => {
  const queue = new Queue();
  queue.enqueue(1);
  queue.enqueue(2);
  queue.enqueue(3);
  queue.enqueue(4);

  queue.dequeue();
  
  expect(queue.size()).toBe(3);
});


