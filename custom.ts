
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

    /**
     * Return the absolute difference between 2 values out of n possible values,
     * handling negative values which can be used with arrays and other logic.
     * @param sprite self
     * @param target sprite
     * @returns dir
     */
    //% block
    export function calcDirTo(sprite: Sprite, target: Sprite):number {
        let selfPos = sprite.tilemapLocation()
        let targetPos = sprite.tilemapLocation()
        let diffX = targetPos.x - selfPos.x
        let diffY = targetPos.y - selfPos.y
        if (diffX < 0 && Math.abs(diffX) > Math.abs(diffY)) {
            return 2;
        } else if (diffX > 0 && Math.abs(diffX) > Math.abs(diffY)) {
            return 0;
        } else if (diffY > 0) {
            return 3;
        } else if (diffY < 0) {
            return 1;
        }
        return 0;
    }

}
