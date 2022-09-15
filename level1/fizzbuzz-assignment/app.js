for (var i = 1; i < 101; i++) {
    if (i % 15 == 0) console.log("FizzBuzz"); // if the remainder of 15 is equal to zero, then I get the word "fizzbuzz"
    else if (i % 3 == 0) console.log("Fizz"); // if not, then the remainder of 3 is equal to zero, then I get the word "fizz"
    else if (i % 5 == 0) console.log("Buzz"); //if not, then the remainder of 5 is equal to zero, then I get the word "buzz"
    else console.log(i); // if it's none of the above, then it will continue to count from the current number it is on. 
}