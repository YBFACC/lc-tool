//代码参考--https://www.cnblogs.com/xenny/p/9739600.html
/**
 * @author YBFACC
 * @license MIT
 * @copyright 2020 YBFACC
 */

abstract class abstract_SegmentTree {
  protected sum1: number[]
  protected length: number
  constructor(length: number) {
    this.length = length + 1
    this.sum1 = new Array(this.length).fill(0)
  }

  protected _init(list: number[]): void {
    for (let i = 0; i < list.length; i++) {
      this._update(i + 1, list[i])
    }
  }
  protected _diffInit(list: number[]): void {
    this._update(1, list[0])
    for (let i = 1; i < list.length; i++) {
      this._update(i + 1, list[i] - list[i - 1])
    }
  }

  /**
  * @description 计算lowbit
  * @param x 
  */
  protected _lowbit(x: number): number { return x & (-x) }

  /**
  * @description 更新A[i]，更新所有包含有A[i]位置
  */
  protected _update(index: number, val: number): void {
    const length = this.length
    const sum1 = this.sum1
    while (index <= length) {
      sum1[index] += val
      index += this._lowbit(index)
    }
  }

  /**
  * @description 计算0-i的区间和
  */
  protected _getSum(i: number): number {
    const sum1 = this.sum1
    let res = 0
    while (i > 0) {
      res += sum1[i]
      i -= this._lowbit(i)
    }
    return res
  }

  /**
  * @description 计算[x,y]的区间和
  */
  // protected _getInterval(start: number, end: number): number {
  //   return this._getSum(end) - this._getSum(start - 1)
  // }

}



/**
 * @extends 树状数组抽象类
 * @description 单点更新，区间查询
 * @class 树状数组
 */
export class SegmentTree extends abstract_SegmentTree {
  constructor(list: number[] | number) {
    super(Array.isArray(list) ? list.length : list)
    if (Array.isArray(list)) {
      this._init(list)
    }
  }

  public update(index: number, val: number): void {
    return this._update(index, val)
  }

  public query(i: number): number {
    return this._getSum(i)
  }
  // public getInterval(start: number, end: number): number {
  //   return this._getInterval(start, end)
  // }
}



// /**
//  * @extends 树状数组抽象类
//  * @description 区间更新，单点更新
//  * @class 差分树状数组
//  */
// class diff_SegmentTree extends abstract_SegmentTree {
//   constructor(list: number[]) {
//     super(list.length)
//     this._diffInit(list)
//   }
//   /**
//   * @description 更新[x,y]的区间和
//   */
//   updateInterval(x: number, y: number, val: number): void {
//     this._update(x, val)
//     this._update(y + 1, -val)
//   }

//   getIndex(i: number): number {
//     return this._getSum(i)
//   }
// }



// /**
//  * @extends 树状数组抽象类
//  * @description 区间更新，区间查询
//  * @class 差分树状数组
//  */

// class two_SegmentTree extends abstract_SegmentTree {
//   protected sum2: number[]
//   constructor(list: number[]) {
//     super(list.length)
//     this.sum2 = new Array(10000).fill(0)
//     this._diffInit(list)
//   }

//   protected _update(index: number, val: number): void {
//     index++
//     let x = index
//     const length = this.length
//     const sum1 = this.sum1
//     const sum2 = this.sum2
//     while (index < length) {
//       sum1[index] += val
//       sum2[index] += val * (x - 1)
//       index += this._lowbit(index)
//     }
//   }

//   protected _getSum(i: number): number {
//     const sum1 = this.sum1
//     const sum2 = this.sum2
//     i++
//     let x = i
//     let res = 0
//     while (i > 0) {
//       res += sum1[i] * x - sum2[i]
//       i -= this._lowbit(i)
//     }
//     return res
//   }
//   public getInterval(start: number, end: number): number {
//     return this._getInterval(start, end)
//   }
//   public updateInterval(x: number, y: number, val: number): void {
//     this._update(x, val)
//     this._update(y + 1, -val)
//   }
// }


