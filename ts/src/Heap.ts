/**
 * @license MIT
 * @copyright 2021 YBFACC
 */

export class Heap<T> {
  private container: T[]
  protected compare: Function
  constructor(arr: T[] = [], fn?: Function) {
    this.container = []
    if (fn) {
      this.compare = fn
    } else {
      this.compare = (v1: T, v2: T): boolean => {
        //>= 小顶堆
        return v1 >= v2
      }
    }

    if (Array.isArray(arr)) {
      arr.forEach(this.offer.bind(this))
    }

  }

  offer(data: T): boolean {
    const { container } = this

    container.push(data)
    let index = container.length - 1
    while (index) {
      let parent = Math.floor((index - 1) / 2)
      if (this.compare(container[index], container[parent])) {
        break
      }
      this.swap(container, index, parent)
      index = parent
    }
    return true
  }

  clear(): void {
    const { container } = this
    container.length = 0
  }

  poll(): T | null {
    const { container } = this
    if (!container.length) {
      return null
    }
    return this.removeAt(0)
  }

  remove(val: T): boolean {
    const { container } = this
    let index = container.indexOf(val)
    if (index !== -1) {
      this.removeAt(index)
      return true
    }
    return false
  }
  private removeAt(i: number): T | null {
    const { container } = this
    this.swap(container, i, container.length - 1)
    const res = container.pop() as T
    const length = container.length
    let index = i,
      exchange = index * 2 + 1

    while (exchange < length) {
      let right = index * 2 + 2
      if (right < length && this.compare(container[exchange], container[right])) {
        exchange = right
      }
      if (this.compare(container[exchange], container[index])) {
        break
      }
      this.swap(container, exchange, index)
      index = exchange
      exchange = index * 2 + 1
    }
    return res
  }

  private swap(arr: T[], i: number, j: number): void {
    ;[arr[i], arr[j]] = [arr[j], arr[i]]
  }
  isEmpty(): boolean {
    return this.container.length === 0
  }
  peek(): T | null {
    const { container } = this
    if (container.length === 0) {
      return null
    }
    return this.container[0]
  }
  get size(): number {
    return this.container.length
  }
}