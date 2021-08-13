"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumberOfTrailingZeros = void 0;
function NumberOfTrailingZeros(number) {
    const num = number.toString(2);
    const multiply_De_Bruijn_position = [
        0, 1, 28, 2, 29, 14, 24, 3, 30, 22, 20, 15, 25, 17, 4, 8, 31, 27, 13, 23,
        21, 19, 16, 7, 26, 12, 18, 6, 11, 5, 10, 9
    ];
    return multiply_De_Bruijn_position[(((+num & -num) * 0x077cb531) >> 27) & 31];
}
exports.NumberOfTrailingZeros = NumberOfTrailingZeros;
