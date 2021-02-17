// Problem 1: How many searches?

/*
a.) Given a sorted list 3, 5, 6, 8, 11, 12, 14, 15, 17, 18 
and using the recursive binary search algorithm, 
identify the sequence of numbers that each recursive 
call will search to try and find 8.

// 1st start: 0
// 1st end: 10

// 2nd start: 0
// 2nd end: 4

// 3rd start: 3
// 3rd end: 4

// Result: position [3], value: 8



b.) Given a sorted list 3, 5, 6, 8, 11, 12, 14, 15, 17, 18 
and using the recursive binary search algorithm, 
identify the sequence of numbers that each recursive 
call will search to try and find 16.
*/

// 1st start: 0
// 1st end: 10
// 1st middle: 5

// 2nd start: 6
// 2nd end: 10
// 2nd middle: 8

// 3rd start: 6
// 3rd end: 7
// 3rd middle: 6

// 4th start: 7
// 4th end: 7
// 4th middle: 7

//Result: -1, which indicates that 16 was not found.