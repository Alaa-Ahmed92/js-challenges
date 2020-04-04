// Write a JavaScript program which accept a number as input and insert dashes (-) between each two even numbers.

/*

For example if you accept 025468 the output should be 0-254-6-8.

*/

// if (0 % 2 == 0) {
//     console.log('Even Number');
// } else {
//     console.log('Odd Number');
// }

// variable number
var num = window.prompt();


// convert number to string
var str = num.toString();

console.log(str.length);

// 
var result = [str[0]];

for (var i = 1; i < str.length; i++) {
    if (str[i - 1] % 2 === 0 && str[i] % 2 === 0) {
        result.push('-', str[i])
    } else {
        result.push(str[i])
    }
}

console.log(result.join(''));
