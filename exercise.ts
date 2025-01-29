// 1. Code to Display Multiplication Table of a Given Integer
const number_1: number = 9;
for (let i = 1; i <= 10; i++) {
    const result = i * number_1;
    console.log(`${number_1} * ${i} = ${result}`);
}


// 2. Code to Check Whether a String is a Palindrome or Not
const string_1: string = "madam";

// find the length of a string
const len = string_1.length;

// loop through half of the string
for (let i = 2; i <= len / 2; i++) { 
// check if the first and second string are same
    if (string_1[i] !== string_1[len - 1 - i]) {
        console.log("It is not a palindrome");
    } else {
        console.log("It is a palindrome")
    }
}


// 3. Code to Convert Centimeter to Kilometer
let centimeter: number = 2000000;
let kilometer: number = centimeter / 100000;
console.log(kilometer + " " + "km")


// 4. Code to format number as currency (IDR)
let amount: number = 10000;
let formatted = amount.toLocaleString('in-ID', {
    style: 'currency',
    currency: 'IDR'
});
console.log(formatted);


// 5. Code to Remove The First Occurrence of a given "search string" from a string
let string_2: string = "Hello world";
let _slice1: string = "Hello world";
console.log(_slice1.slice(0,1) + "o" + " " + string_2.substring(6,11))


// 6. Code to Capitalize the First Latter of Each Word in a string
let _slice2: string = "hello world";
console.log(_slice2.slice(0,1).toUpperCase() +_slice2.slice(1,6) + _slice2.slice(6,7).toUpperCase() + _slice2.slice(7));


// 7. Code to Swap the Case of Each Character from String
let _slice3: string = "The QuiCk BrOwN Fox";
console.log(_slice3.substring(0,1).toLowerCase() + _slice3.substring(1,4).toUpperCase() + _slice3.substring(4,5).toLowerCase() + 
            _slice3.substring(5,7).toUpperCase() + _slice3.substring(7,8).toLowerCase() + _slice3.substring(8,9).toUpperCase() +
            _slice3.substring(9,11).toLowerCase() + _slice3.substring(11,12).toUpperCase() + _slice3.substring(12,13).toLowerCase() +
            _slice3.substring(13,14).toUpperCase() + _slice3.substring(14,15).toLowerCase() + _slice3.substring(15,17).toLowerCase() + 
            _slice3.substring(17,197).toUpperCase()) ;


// 8. Code to Find the Largest of Two Given Integers
let number_2: number = 42;
let number_3: number = 27;
let max = Math.max(number_2, number_3);
console.log(max);


// 9. Conditional Statement to Sort Three Numbers
let number_4: number = 42;
let number_5: number = 27;
let number_6: number = 18;

if (number_4 < number_5 && number_4 < number_6) {
    if (number_5 < number_6) {
        console.log(number_4 + ", " + number_5 + ", " + number_6);
    } else {
        console.log(number_4 + ", " + number_6 + ", " + number_5);
    }
} else if (number_5 < number_4 && number_5 < number_6) {
    if (number_4 < number_6) {
        console.log(number_5 + ", " + number_4 + ", " + number_6);
    } else {
        console.log(number_5 + ", " + number_6 + ", " + number_4)
    }
} else if (number_6 < number_4 && number_6 < number_5) {
    if (number_4 < number_5) {
        console.log(number_6 + ", " + number_4 + ", " + number_5);
    } else {
        console.log(number_6 + ", " + number_5 + ", " + number_4)
    }
}


// 10. Code to Show 1 if the input is a string, 2 if the input is a number, and 3 for others data
let dataType = "Hello"; // input Boolean (other data) masuk dalam kategori 3

if (typeof dataType === 'string'){
    console.log("1")
} else if (typeof dataType === 'number') {
    console.log("2")
} else {
    console.log("3")
};


// 11. Code to change every letter a into * from a string of input
let string_4: string = "an apple a day keeps the doctor away";
console.log(string_4.replace(/a/g, "*"));