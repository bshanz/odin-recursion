// fibonacci sequence using a for loop
function fibs(n) {
  let final = [0, 1];

  for (let i = 2; i < n; i++) {
    final.push(final[final.length - 1] + final[final.length - 2]);
  }

  return final;
}

// fibonacci sequence with recursion
function fibsRecursive(n, arr) {
  if (n < 2) {
    return arr;
  } else {
    return fibs(n, arr.push(arr[arr.length - 1] + arr[arr.length - 2]));
  }
}
