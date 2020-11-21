"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RunScript = void 0;
function RunScript(commonds, inputs, classes) {
    const res = [null];
    const obj = new classes(...inputs[0]);
    for (let i = 1; i < commonds.length; i++) {
        const temp = obj[commonds[i]](...inputs[i]);
        if (temp === undefined)
            res.push(null);
        res.push(temp);
    }
    return res;
}
exports.RunScript = RunScript;
