const {Heap} = require("./index");

it("adds items to the heap", () => {
  const heap = new Heap();

  heap.insert(6);
  heap.insert(3);
  heap.insert(12);
  heap.insert(1);

  expect(heap.getHeap()).toEqual([12, 3, 6, 1]);
});

it("removes min", () => {
  const heap = new Heap();

  heap.insert(6);
  heap.insert(3);
  heap.insert(12);
  heap.insert(1);

  expect(heap.removeMin()).toBe(1);
  expect(heap.getHeap()).toEqual([12, 3, 6]);
});

it("removes max", () => {
  const heap = new Heap();

  heap.insert(6);
  heap.insert(3);
  heap.insert(12);
  heap.insert(1);


  expect(heap.removeMax()).toBe(12);
  expect(heap.getHeap()).toEqual([6, 3, 1]);
});




