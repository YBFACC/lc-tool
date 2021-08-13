/**
 * @copyright leetcode
 * https://leetcode-cn.com/problems/find-minimum-time-to-finish-all-jobs/solution/wan-cheng-suo-you-gong-zuo-de-zui-duan-s-hrhu/
 */

export function NumberOfTrailingZeros(number: number) {
  const num = number.toString(2)
  const multiply_De_Bruijn_position = [
    0, 1, 28, 2, 29, 14, 24, 3, 30, 22, 20, 15, 25, 17, 4, 8, 31, 27, 13, 23,
    21, 19, 16, 7, 26, 12, 18, 6, 11, 5, 10, 9
  ]
  return multiply_De_Bruijn_position[(((+num & -num) * 0x077cb531) >> 27) & 31]
}