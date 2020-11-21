
/**
 * @copyright 2020 YBFACC
 * @license MIT
 */

class TrieNode {
  next: any
  isEnd: boolean
  constructor() {
    this.next = {}
    this.isEnd = false
  }
}

export class Trie {
  root: TrieNode
  constructor() {
    this.root = new TrieNode()
  }
  insert(word: string): void {
    let node = this.root
    for (let i = 0; i < word.length; i++) {
      if (!node.next[word[i]]) {
        node.next[word[i]] = new TrieNode()
      }
      node = node.next[word[i]]
    }
    node.isEnd = true
    return
  }
  search(word: string): boolean {
    let count = 0
    let node = this.root
    for (let i = 0; i < word.length; i++) {
      if (node.isEnd) count++
      node = node.next[word[i]]
    }
    if (node.isEnd) count++
    return count > 1
  }
}
