
/**
* Use this file to define custom functions and blocks.
* Read more at https://arcade.makecode.com/blocks/custom
*/


/**
 * Custom blocks
 */
//% weight=100 color=#0fbc11 icon=""
namespace custom {
    /**
     * TODO: return the absolute difference between 2 values out of n possible values,
     * handling negative values which can be used with arrays and other logic.
     * @param a value a
     * @param b value b
    * @param n divisor
     */
    //% block
    export function diff(a: number, b: number, n: number): number {
        a = a-b
        while(a < 0) {
            a += n
        }
        while(a >= n) {
            a -= n
        }
        if(a > n/2) {
            a = n - a
        }
        return a
    }

}
