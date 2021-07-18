export class MonotoneQueue {
  list: number[]
  compare: Function
  constructor(fn: Function) {
    this.list = []
    this.compare = fn
  }
  insert(num: number) {
    const list = this.list
    while (list.length > 0 && this.compare(list[list.length - 1], num)) {
      list.pop()
    }
    list.push(num)
  }
  pop(num: number) {
    const list = this.list
    if (list.length > 0 && list[0] === num) {
      list.shift()
    }
  }
  top() {
    return this.list[0]
  }
}
