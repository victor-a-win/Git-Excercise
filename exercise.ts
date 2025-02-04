// Exercise_3:Git&GitHub
// 1. Code to Display Multiplication Table of a Given Integer
const number_1: number = 9;
for (let i = 1; i <= 10; i++) {
    const result = i * number_1;
    console.log(`${number_1} * ${i} = ${result}`);
}
//  function multiplication
function multiplication(num: number) {
    for (let i: number = 1; i <= 10; i++) {
        console.log(`${num} x ${i}`);
    }
}

multiplication(10);



// 2. Code to Check Whether a String is a Palindrome or Not
const string_1: string = "madam";

// find the length of a string
const len = string_1.length;

// loop through half of the string
for (let i = 0; i <= len / 2; i++) { 
// check if the first and second string are same
    if (string_1[i] !== string_1[len - 1 - i]) {
        console.log("It is not a palindrome");
    } else {
        console.log("It is a palindrome")
    }
}

// alternative way No. 2 (Better Way)
function palindrome(str: string) {
    // console.log(str.split(""));
    // console.log(str.split("").reverse().join(""));
    // return str.split("").reverse().join("") === str ? "Palindrome" :"Bukan Palindrome"

    for (let i = 0; i < str.length / 2; i++) {
        if (str[i] !== str[str.length - 1 - i]) {
            return "Bukan Palindrome"
        }
    }
    return "Palindrome"
}

console.log(palindrome("madams"));



// 3. Code to Convert Centimeter to Kilometer
let centimeter: number = 2000000;
let kilometer: number = centimeter / 100000;
console.log(kilometer + " " + "km");

// alternative way of Code-3

function cmToKm (cm: number) {
    return cm / 100000 + "km";
}

console.log(cmToKm(2000000));



// 4. Code to format number as currency (IDR)
let amount: number = 10000;
let formatted = amount.toLocaleString('in-ID', {
    style: 'currency',
    currency: 'IDR'
});
console.log(formatted);

// alternative way of code-4

function convertCurrency(num: number) {
    return num.toLocaleString("id-ID", {
        currency: "IDR",
        style: "currency"
    })
}

console.log(convertCurrency(1000));



// 5. Code to Remove The First Occurrence of a given "search string" from a string
let string_2: string = "Hello world";
let _slice1: string = "Hello world";
console.log(_slice1.slice(0,1) + "o" + " " + string_2.substring(6,11))

// alternative way of code-5

function removeFirstOccured(str: string, search: string) {
    return str.replace(search, "");
}

console.log(removeFirstOccured("Hello World", "ell"));



// 6. Code to Capitalize the First Latter of Each Word in a string
let _slice2: string = "hello world";
console.log(_slice2.slice(0,1).toUpperCase() +_slice2.slice(1,6) + _slice2.slice(6,7).toUpperCase() + _slice2.slice(7));

// alternative way of code-6
function capitalizeFirstChar(str: string) {
    let split: string[] = str.split(" ");
    console.log(split);
    
    split.map((str, idx) => split[idx] = str[0].toUpperCase() + split[idx].slice(1)); // cara ke-2
    
    // cara ke-3
    // for (let i = 0; i < split.length; i++) {
    //     console.log(split[0][0])
    //     split[i] = split[i][0].toUpperCase() + split[i].slice(1);
    // }

    return split.join(" ");
}

console.log(capitalizeFirstChar("hello world"));



// 7. Code to Swap the Case of Each Character from String
let _slice3: string = "The QuiCk BrOwN Fox";
console.log(_slice3.substring(0,1).toLowerCase() + _slice3.substring(1,4).toUpperCase() + _slice3.substring(4,5).toLowerCase() + 
            _slice3.substring(5,7).toUpperCase() + _slice3.substring(7,8).toLowerCase() + _slice3.substring(8,9).toUpperCase() +
            _slice3.substring(9,11).toLowerCase() + _slice3.substring(11,12).toUpperCase() + _slice3.substring(12,13).toLowerCase() +
            _slice3.substring(13,14).toUpperCase() + _slice3.substring(14,15).toLowerCase() + _slice3.substring(15,17).toLowerCase() + 
            _slice3.substring(17,197).toUpperCase()) ;

// efficient way of code-7
function swapCapital(str: string) {
    let res: string = ""; // "" ini default untuk string kosong yang nantinya akan terisi

    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i].toUpperCase()) {
            res += str[i].toLowerCase();
        } else {
            res += str[i].toUpperCase();
        }
    }

    return res;
}

console.log(swapCapital("tHe QuIck BROwn FoX"));



// 8. Code to Find the Largest of Two Given Integers
let number_2: number = 42;
let number_3: number = 27;
let max = Math.max(number_2, number_3);
console.log(max);

// alternative way of code-8
function largest(num1: number, num2: number) {
    if (num1 > num2) {
        return num1
    } else if (num2 > num1) {
        return num2
    } else {
        return "angka sama"
    }
}

console.log(largest(5,2));



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

// alternative way of code-9
function sort(num1: number, num2: number, num3: number) {
    if (num1 < num2 && num1 < num3) {
        if (num2 < num3) {
            return [num1, num2, num3]
        } else {
            return [num1, num3, num2]
        }
    } else if (num2 < num1 && num2 < num3) {
        if (num1 < num3) {
            return [num2, num1, num3]
        } else {
            return [num2, num3, num1]
        }
    } else {
        if (num1 < num2) {
            return [num3, num1, num2]
         } else {
            return [num3, num2, num1]
        }
    }
}

console.log(sort(42,27,18));



// 10. Code to Show 1 if the input is a string, 2 if the input is a number, and 3 for others data
let dataType = "Hello"; // input Boolean (other data) masuk dalam kategori 3

if (typeof dataType === 'string'){
    console.log("1")
} else if (typeof dataType === 'number') {
    console.log("2")
} else {
    console.log("3")
};

// alternative way of code-10
function typeData(input: any) {
    if (typeof input === "string") {
        return 1
    } else if (typeof input === "number") {
        return 2;
    } else {
        return 3;
    }
}

console.log(typeData(Boolean));

console.log(typeof true);



// 11. Code to change every letter a into * from a string of input
let string_4: string = "an apple a day keeps the doctor away";
console.log(string_4.replace(/a/g, "*"));

// alternative way of code-11
    // cara ke-2
    // return str.replace(/a/gi, "*");

// recommended way to code No. 11
function changeA(str: string) {
    let res: string = "";

    for (let i = 0; i < str.length; i++) {
        if (str[i].toLowerCase() === "a") {
            res += "*";
        } else {
            res += str[i];
        }
    }
    return res;
}

console.log(changeA("An apple a day keeeps the doctor away"));

// Finish