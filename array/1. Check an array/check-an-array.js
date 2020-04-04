// Write a JavaScript function to check whether an 'input' is an array or not.

let is_array = (input) => {
    toString.call(input) === '[object Array]' ? console.log(true) : console.log(false)
}

is_array('w3resource') // false
is_array([1, 2, 4, 0]) // true