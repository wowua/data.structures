import { BinaryTree } from "./index";

/*
             18
          /      \
         5        40
        / \       / \     
       2   15    38  55
*/

let bst = {};

beforeEach(() => {
  bst = new BinaryTree(18);

  bst.insert(5);
  bst.insert(40);
  bst.insert(2);
  bst.insert(15);
  bst.insert(38);
  bst.insert(55);
});

it("возвращает корректно кол-во узлов", () => {
  expect(bst.size()).toEqual(7);
});

it("коректно добавляет элемент", () => {
  bst.insert(13);
  bst.insert(66);

  const itemInRightBranch = bst.root.right.right.right;
  const itemInLeftBranch = bst.root.left.right.left;

  expect(itemInRightBranch.value).toEqual(66);
  expect(itemInLeftBranch.value).toEqual(13);
});

it("находит минимальное значение", () => {
  expect(bst.min()).toEqual(2);
});

it("находит максимальное значение", () => {
  expect(bst.max()).toEqual(55);
});

it("возвращает присутствие элемента в дереве", () => {
  expect(bst.contains(2)).toBe(true);
  expect(bst.contains(666)).toBe(false);
});

describe("BST Depth-first search", () => {
  it("возвращает коррекно элементы при симметричном обходе (inOrder)", () => {
    const result = bst.dfsInOrder();
    expect(result).toEqual([2, 5, 15, 18, 38, 40, 55]);
  });

  it("возвращает коррекно элементы при прямом обходе (preOrder)", () => {
    const result = bst.dfsPreOrder();
    expect(result).toEqual([18, 5, 2, 15, 40, 38, 55]);
  });

  it("возвращает коррекно элементы при обратном обходе (postOrder)", () => {
    const result = bst.dfsPostOrder();
    expect(result).toEqual([2, 15, 5, 38, 55, 40, 18]);
  });
});

describe("BST Breadth-first search", () => {
  it("возвращает коррекно элементы при обходе в ширину", () => {
    const result = bst.bfs();
    expect(result).toEqual([18, 5, 40, 2, 15, 38, 55]);
  });
});
