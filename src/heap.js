"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Heap = void 0;
class Heap {
    constructor(arr = [], fn) {
        this.container = [];
        if (fn) {
            this.compare = fn;
        }
        else {
            this.compare = (v1, v2) => {
                return v1 >= v2;
            };
        }
        if (Array.isArray(arr)) {
            arr.forEach(this.offer.bind(this));
        }
    }
    offer(data) {
        const { container } = this;
        container.push(data);
        let index = container.length - 1;
        while (index) {
            let parent = Math.floor((index - 1) / 2);
            if (this.compare(container[index], container[parent])) {
                break;
            }
            this.swap(container, index, parent);
            index = parent;
        }
        return true;
    }
    clear() {
        const { container } = this;
        container.length = 0;
    }
    poll() {
        const { container } = this;
        if (!container.length) {
            return null;
        }
        return this.removeAt(0);
    }
    remove(val) {
        const { container } = this;
        let index = container.indexOf(val);
        if (index !== -1) {
            this.removeAt(index);
            return true;
        }
        return false;
    }
    removeAt(i) {
        const { container } = this;
        this.swap(container, i, container.length - 1);
        const res = container.pop();
        const length = container.length;
        let index = i, exchange = index * 2 + 1;
        while (exchange < length) {
            let right = index * 2 + 2;
            if (right < length && this.compare(container[exchange], container[right])) {
                exchange = right;
            }
            if (this.compare(container[exchange], container[index])) {
                break;
            }
            this.swap(container, exchange, index);
            index = exchange;
            exchange = index * 2 + 1;
        }
        return res;
    }
    swap(arr, i, j) {
        ;
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    isEmpty() {
        return this.container.length === 0;
    }
    peek() {
        const { container } = this;
        if (container.length === 0) {
            return null;
        }
        return this.container[0];
    }
    get size() {
        return this.container.length;
    }
}
exports.Heap = Heap;
