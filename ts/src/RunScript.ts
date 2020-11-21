/**
 * @license MIT
 * @copyright 2020 YBFACC
 */

export function RunScript(commonds: string[], inputs: any[], classes: any): any[] {
  const res: any[] = [null]

  const obj = new classes(...inputs[0])

  for (let i = 1; i < commonds.length; i++) {
    const temp = obj[commonds[i]](...inputs[i])
    if (temp === undefined) res.push(null)
    res.push(temp)
  }

  return res
}