"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Trie = void 0;
class TrieNode {
    constructor() {
        this.next = {};
        this.isEnd = false;
    }
}
class Trie {
    constructor() {
        this.root = new TrieNode();
    }
    insert(word) {
        let node = this.root;
        for (let i = 0; i < word.length; i++) {
            if (!node.next[word[i]]) {
                node.next[word[i]] = new TrieNode();
            }
            node = node.next[word[i]];
        }
        node.isEnd = true;
        return;
    }
    search(word) {
        let count = 0;
        let node = this.root;
        for (let i = 0; i < word.length; i++) {
            if (node.isEnd)
                count++;
            node = node.next[word[i]];
        }
        if (node.isEnd)
            count++;
        return count > 1;
    }
}
exports.Trie = Trie;
