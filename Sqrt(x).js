/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    if (x === 0) {
        return 0; 
    }
    
    let left = 1;
    let right = x;
    
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        let sqr = mid * mid;
        
        if (sqr === x) {
            return mid;
        } else if (sqr < x) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    
    return right; // Return the floor value of the square root
}