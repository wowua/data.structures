import { xSet } from "./index";
it("Проверяет является ли одно множетсво подмножеством другого", () => {
  const setA = new xSet([1, 2, 3, 4, 5, 6]);
  const setB = new xSet([2, 3, 4]);

  expect(setA.isSuperset(setB)).toBe(true);
});

it("Объединяет множества", () => {
  const setA = new xSet([1, 2, 3]);
  const setB = new xSet([4, 5, 6]);

  const result = Array.from(setA.union(setB));
  expect(result).toEqual([1, 2, 3, 4, 5, 6]);
});

it("Выводит разность", () => {
  const setA = new xSet([1, 2, 3, 4]);
  const setB = new xSet([3, 4, 5, 6]);

  const result = Array.from(setA.difference(setB));
  expect(result).toEqual([1, 2]);
});

it("Вычисляет пересечение", () => {
  const setA = new xSet([1, 2, 3, 9, 4, 5]);
  const setB = new xSet([1, 2, 6, 13, 4, 5]);

  const result = Array.from(setA.intersection(setB));
  expect(result).toEqual([1, 2, 4, 5]);
});
