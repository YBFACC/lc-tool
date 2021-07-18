export declare class Node {
    val: number;
    left: Node | null;
    right: Node | null;
    parent: Node | null;
    random: Node | null;
    children: Node[];
    constructor(val?: number, left?: Node | null, right?: Node | null, random?: Node | null, parent?: Node | null, children?: Node[]);
}
