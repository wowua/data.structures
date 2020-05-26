import { Stack } from "./index";

it("Стек добавляет элемент", () => {
  const result = {
    size: 2,
    storage: {
      0: 13,
      1: 666,
    },
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
    },
  };
  const stack = new Stack();

  stack.push(13);
  stack.push(666);

  stack.pop();

  expect(stack).toMatchObject(result);
});
