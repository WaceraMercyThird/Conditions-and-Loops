// Fizz, Buzz, FizzBuzz

for (var i = 1; i < 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) console.log("FizzBuzz");
    else if (i % 3 === 0) console.log("Fizz");
    else if (i % 5 === 0) console.log("Buzz");
    else console.log(i);

}
// sum the multiples of 3 and 5
let sum = 0;
for (let i = 0; i <= 1000; i++) {

if (i % 3 === 0 && i % 5 === 0) {
  sum += i;
    }
    console.log(sum)
  }
//  odd or even 

for (var x=0; x<=20; x++) {
    if (x === 0) {
            console.log(x +  " is even");
    }
    else if (x % 2 === 0) {
            console.log(x + " is even");   
    }
    else {
            console.log(x + " is odd");
    }
}

// The largest
let num = [-2, 4,-5, 6,0]
var largest= num[0]

for (let i=0; i<num.length; i++){
    if(num[i]>largest){
        largest=num[i]
    }
}
console.log("The largest item is" +largest)

// check the condition
var a = 10;
var b= 40;
if (a == b) {
    console.log(a + " is equal to " + b);
} else if (a > b) {
    console.log(a + " is larger than " + b);
} else {
    console.log(a + " is less than " + b);
}

// Leap Year

for (var i=1890; i < 2010; ++i) {
    if ((i%4)&&(i%100)||(i%400) ) console.log(i+ "is a leap year");
  }