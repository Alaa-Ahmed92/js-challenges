// Write a simple JavaScript program to join all elements of the following array into a string.

/*

Sample array : myColor = ["Red", "Green", "White", "Black"];
Expected Output :
"Red,Green,White,Black"
"Red,Green,White,Black"
"Red+Green+White+Black"

*/

// let myColor = ["Red", "Green", "White", "Black"];
// let stringArray = myColor.toString();


// console.log(typeof myColor);
// console.log(stringArray);
// console.log(typeof stringArray);

let myStringColor = (array) => {
    if ( array == null ) {
        return void 0;
    }
    let stringArray = array.toString();
    // let stringArray = array.join(' + ');
    return stringArray;
}

console.log(myStringColor(["Red", "Green", "White", "Black"]));
