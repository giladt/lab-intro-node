class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
  }

  add(item) {
    this.items.push(item);
    this.items.sort((a,b)=> a - b);
    this.length++;
  }

  get(pos) {
    if(pos > this.length) throw new Error('OutOfBounds');
    return this.items[pos];
  }

  max() {
    if(this.length === 0) throw new Error('EmptySortedList');
    return Math.max(...this.items);
  }

  min() {
    if(this.length === 0) throw new Error('EmptySortedList');
    return Math.min(...this.items);
  }

  sum() {
    return this.items.reduce((sum,item)=>sum+=item,0);
  }

  avg() {
    if(this.length === 0) throw new Error('EmptySortedList');
    return this.items.reduce((sum,item)=>sum+=item,0)/this.length;
  }
}

module.exports = SortedList;