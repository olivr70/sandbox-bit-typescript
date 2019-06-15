/**
 * Computes the sum of its arguments
 * @name sum
 * @param {number[]} items
 * @returns {number} returns an array representing the difference between the two arrays
 * @example
 *  sum(1,2,3]) // => 6
 */
export function sum(...items: number[]): number {
  return items.reduce((sum, val) => sum + val, 0);
}
