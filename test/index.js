const assert = require("assert");
const fizzbuzz = require("../index");

describe("fizzbuzz", () => {
	if ( "return FizzBuzz when value is divisible by 15", () => {
		assert( fizzbuzz(30) === "FizzBuzz" );
	});

	if ( "return Fizz when value is divisible by 3", () => {
		assert( fizzbuzz(9) === "Fizz" );
	});

	if ( "return Buzz when value is divisible by 5", () => {
		assert( fizzbuzz(10) === "Buzz" );
	});

	if ( "return the value when value is divisible by 3 or 5", () => {
		assert( fizzbuzz(7) === "7" );
	});
});
	

	

