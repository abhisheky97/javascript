let myArray = [170, 45, 75, 90, 802, 24, 2, 66];
console.log("Original array:", myArray);
let radixArray = [[], [], [], [], [], [], [], [], [], []];
let maxVal = Math.max(...myArray);
let exp = 1;

while (maxVal / exp > 0) {
  while (myArray.length > 0) {
    let val = myArray.pop();
    let radixIndex = Math.floor((val / exp) % 10);
    radixArray[radixIndex].push(val);
  }

  for (let bucket of radixArray) {
    while (bucket.length > 0) {
      let val = bucket.pop();
      myArray.push(val);
    }
  }

  exp *= 10;
}

console.log("Sorted array:", myArray);
