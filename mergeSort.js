function mergeSort(arr) {
  // If arr has one element or empty, return it
  if (arr.length <= 1) {
    return arr;
  }
  // Find the middle of array
  const middle = Math.floor(arr.length / 2);

  // Dividing the array into left and right
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);

  // Us recursion to combine the left and right
  return merge(mergeSort(left), mergeSort(right));
}

// Merge the two arrays: left and right
function merge(left, right) {
  let resultArray = [],
    leftIndex = 0,
    rightIndex = 0;

  // We will concatenate values into the resultArray in order
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      resultArray.push(left[leftIndex]);
      leftIndex++; // move left array cursor
    } else {
      resultArray.push(right[rightIndex]);
      rightIndex++; // move right array cursor
    }
  }

  // Concat results
  return resultArray
    .concat(left.slice(leftIndex))
    .concat(right.slice(rightIndex));
}

const arr = [4, 7, 2, 1, 8];
