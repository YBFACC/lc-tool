export declare class Node {
    val: number;
    left: Node | null;
    right: Node | null;
    parent: Node | null;
    random: Node | null;
    constructor(val?: number, left?: Node | null, right?: Node | null, random?: Node | null, parent?: Node | null);
}
