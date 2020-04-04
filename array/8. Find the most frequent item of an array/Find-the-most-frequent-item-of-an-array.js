// Write a JavaScript program to find the most frequent item of an array.

/*

Sample array : var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
Sample Output : a ( 5 times )

*/
const arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
// var arr1 = ['Tom','Fluffy','Tom','Bella','Chloe','Tom','Chloe'];
console.log(arr1.length);

(function (array) {
    // We are going to count occurrence of item here
    let counts = [];
    // We are going to compare using stored value
    let compare = 0;
    // We are going to store most frequent item
    let mostFrequent;

    for (let i = 0, len = arr1.length; i < len; i++) {
        let letter = arr1[i];
        console.log(letter);
        
        if (counts[letter] === undefined) { // if counts[letter] doesn't exist
            counts[letter] = 1; // set counts[letter] value to 1
        } else { // if exists
            counts[letter] = counts[letter] + 1; // increment existing value
        }

        if (counts[letter] > compare) { // counts[letter] > 0 (first time)
            compare = counts[letter]; // set compare to counts[word]
            mostFrequent = arr1[i]; // set mostFrequent value
        }
    }

    console.log(mostFrequent, compare);

})(arr1);