const BinarySearchTree = require('./binarySearchTree');


// Binary Search : (MUST BE SORTED BEFOREHAND)
// takes 4 arguments: the array, value to search for, and optional start and end indices
function binarySearch(array, value, start, end){
    var start = start === undefined ? 0 : start;    // if start is omitted then the function uses the start of array
    var end = end === undefined ? array.length : end;   // if end is omitted then the function uses the end of array

    // if start is greater than end index, then the value has not been found so return -1
    if(start > end){
        return -1;
    }

    const index = Math.floor((start + end) / 2);    // find next middle index, set to index
    const item = array[index];  // set index to item

    console.log(start, end);
    // if item is equal to value, then found correct index
    if(item === value){
        return index;
    }
    // if item is less than value, recursively search in the right half of sorted array
    else if(item < value){
        return binarySearch(array, value, index+1, end);
    }
    // if item is greater than value, recursively search in the left half of sorted array
    else if(item > value){
        return binarySearch(array, value, start, index-1);
    }
}

module.exports = binarySearch;

// let list = [3, 5, 6, 8, 11, 12, 14, 15, 17, 18];
// console.log(binarySearch(list, 8));
// console.log(binarySearch(list, 16));

// Best case: O(1) constant time, find item in the middle of the array
// Worst & Average case: O(log(n)), with each iteration you cut the area to search in half.