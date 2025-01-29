// Exercise_2:Conditional-Loop-Statement
// Code-1
const n1: number = 25;

if (n1 % 2 === 0) {
    console.log("genap")
} else {
    console.log("ganjil")
};

// lines 2-9 sama dengan line 10 (ternary operator)
console.log(n1 % 2 === 0 ? "genap" : "ganjil");

//Code-2

const n2: number = 7;
let isPrime: boolean = n2 >= 2 ? true : false;

for (let i = 2; i < n2; i++) {
    if (n2 % i === 0) {
        isPrime = false;
        break;
    }
};

console.log(isPrime ? "bilangan prima" : "bukan bilangan prima");

//Code-3
// 1 + 2 + 3 + 4 + 5 = 15
// loop sebanyak 5 kali

/* 
iterasi 1
i = 1
sum = 0

sum += i;
0 += i = 1;

iterasi 2
i = 2 karena ada increment i++
sum = 1

sum += i;
1 += i = 3;

etc
*/
const n3: number = 5;
// penggunaan variabel penampung jumlahnya
let sum: number = 0;

for (let i = 1; i <= n3; i++) {
    console.log(i);
    console.log(sum);
    // modify in place
    sum += i; // sum = sum + i;
    console.log(sum);
};

console.log(sum);

// Code-4
const n4: number = 6;
let factorial1: number = 1;

for (let i = n4; i >= 1; i--) {
    console.log(i);
    console.log(factorial1);
    factorial1 *= i;
    console.log(factorial1);
};

console.log(factorial1);

// lines 63 to 71 = lines 76-86
const n5: number = 6;
let factorial2: number = 1;

for (let i = 1; i <= n5; i++) {
    console.log(i);
    console.log(factorial2);
    factorial2 *= i;
    console.log(factorial2);
};

console.log(factorial2);


// Code-5
function fibonacci(num) {
    let n6: number = 1;
    let n7: number = 1;
    let sum2;
    if (num === 1) {
        return n6;
    } else if (num === 2) {
        return n7;
    } else {
        for (let i = 3; i <= num; i++) {
            sum2 = n6 + n7;
            n6 = n7;
            n7 = sum2;
        }
        return n7;
    }
}

console.log(fibonacci(15));