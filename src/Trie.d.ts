declare class TrieNode {
    next: any;
    isEnd: boolean;
    constructor();
}
export declare class Trie {
    root: TrieNode;
    constructor();
    insert(word: string): void;
    search(word: string): boolean;
}
export {};
