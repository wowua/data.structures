import { LinkedList } from "./index";

// 1 -> 2 -> 3
let list = {};

beforeEach(() => {
  list = new LinkedList(1);

  list.append(2);
  list.append(3);
});

it("Формирует список корректно", () => {
  const result = {
    head: {
      val: 1,
      next: {
        val: 2,
        next: {
          val: 3,
          next: null,
        },
      },
    },
  };

  expect(list).toEqual(result);
});

it("Добавляет элемент в начало списка", () => {
  list.prepend(66);

  const result = {
    head: {
      val: 66,
      next: {
        val: 1,
        next: {
          val: 2,
          next: {
            val: 3,
            next: null,
          },
        },
      },
    },
  };

  expect(list).toEqual(result);
});

it("Удаляет элемент из начала", () => {
  list.deleteHead();

  const result = {
    head: {
      val: 2,
      next: {
        val: 3,
        next: null,
      },
    },
  };

  expect(list).toEqual(result);
});

it("Удаляет элемент с конца", () => {
  list.deleteTail();

  const result = {
    head: {
      val: 1,
      next: {
        val: 2,
        next: null,
      },
    },
  };
  expect(list).toEqual(result);
});

it("Находит нужный элемент", () => {
  const item = list.search(2);

  const result = {
    val: 2,
    next: {
      val: 3,
      next: null,
    },
  };

  expect(item).toEqual(result);
});
