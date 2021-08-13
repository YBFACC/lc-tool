/**
 * @license MIT
 * @copyright 2021 YBFACC
 * @tutorial 链式前向星存图  https://malash.me/200910/linked-forward-star/ 
 */


export class LinkedEdge {
  head: number[]
  to: number[]
  next: number[]
  vals: number[]
  index: number
  constructor(n: number) {
    this.head = Array.from({ length: n }, () => -1)
    this.to = Array.from({ length: n }, () => -1)
    this.next = Array.from({ length: n }, () => -1)
    this.vals = Array.from({ length: n }, () => -1)
    this.index = -1
  }

  add(a: number, b: number, c: number): void {
    this.next[++this.index] = this.head[a]
    this.to[this.index] = b
    this.vals[this.index] = c
    this.head[a] = this.index
  }

  search(target: number): number[][] {
    const temp: number[][] = []
    for (let i = this.head[target]; i != -1; i = this.next[i]) {
      temp.push([target, this.to[i], this.vals[i]])
    }
    return temp
  }
}