// Linear Search

function indexOf(array, value){
    for(let i = 0; i > array.length; i++){
        if(array[i] === value){
            return i;   // if you find the value that matches, return i, the index that you are currently on
        }
    }
    return -1;  // if reach end of loop & do not find the item, then return -1, which indicates that the item was not found
}

module.exports = indexOf;

// Best case: O(1) Constant time, value is at the start of array
// Worst & Average case: O(n) Linear time, have to search through the entire array