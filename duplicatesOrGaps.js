function duplicatesOrGaps(arr) {
    let set = new Set();
    for (let i = 0; i < arr.length; i++) {
      if (set.has(arr[i])) {
        return true;
      } else {
        set.add(arr[i]);
      }
    }
    let min = Math.min(...set);
    let max = Math.max(...set);
    if (max - min + 1 === set.size) {
      return false;
    } else {
      return true;
    }
  }
   console.log(duplicatesOrGaps([5, 1, , 2, 4, 3, 6, 7]));  // false
  //console.log(duplicatesOrGaps([1, 3, 4, 5, 6]));  // true
  // console.log(duplicatesOrGaps([4, 5, 4, 1, 2, 5, 6, 3, 4]));  // true
  
  
//The time complexity of this implementation is O(n) since it iterates through the array once 