export class xSet extends Set {
  constructor(value) {
    super(value);
    this.originSet = this;
  }

  isSuperset(subset) {
    if (subset.size === 0) return true;
    return [...subset].every((item) => this.originSet.has(item));
  }

  union(extraSet) {
    return new Set([...this.originSet, ...extraSet]);
  }

  difference(diffSet) {
    return new Set([...this.originSet].filter((item) => !diffSet.has(item)));
  }

  intersection(interSet) {
    return new Set([...this.originSet].filter((item) => interSet.has(item)));
  }
}
