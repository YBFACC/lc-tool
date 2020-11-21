class linked {
  tump: linkedNode
  tail: linkedNode
  cache_num: number
  constructor() {
    this.tump = new linkedNode(NaN)
    this.tail = new linkedNode(NaN)
    this.tump.next = this.tail
    this.tail.pre = this.tump
    this.cache_num = 0
  }
  shift(): number {
    this.cache_num--
    const target = this.tump.next as linkedNode
    if (target.val === NaN) return NaN
    const next = target.next as linkedNode
    this.tump.next = next
    next.pre = this.tump
    return target.val
  }
  insert(val: number): void {
    this.cache_num++
    const target = new linkedNode(val)
    const pre = this.tail.pre as linkedNode
    const next = this.tail as linkedNode
    target.pre = pre
    pre.next = target

    target.next = next
    next.pre = target
  }
  get length(): number {
    return this.cache_num
  }
}
class linkedNode {
  val: number
  next: linkedNode | undefined
  pre: linkedNode | undefined
  constructor(val: number) {
    this.val = val
    this.next
    this.pre
  }
}