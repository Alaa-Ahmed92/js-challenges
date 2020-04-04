// Write a JavaScript program to sort the items of an array. [Medium]

/*

Sample array : var arr1 = [ 3, 8, 7, 6, 5, -4, 3, 2, 1 ];
Sample Output : -4,1,2,3,5,6,7,8
'Droid Sans Mono', 'monospace', monospace, 'Droid Sans Fallback'
*/

var arr1 = [-3, 8, 7, 6, 5, -4, 3, 2, 1];

console.log(arr1.sort());
console.log(arr1.sort((a, b) => a - b));
