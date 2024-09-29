// Removing Elements from an Array
// Problem: Remove 2 elements starting from index 1 in an array.

let fruits = ["apple", "banana", "orange", "grape", "mango"];
let removedFruits = fruits.splice(1, 2);  // Start at index 1, remove 2 elements

console.log(fruits);         // Output: ["apple", "grape", "mango"]
console.log(removedFruits);  // Output: ["banana", "orange"]
// Here, the splice() method removes "banana" and "orange" from the original array.

// 2. Adding Elements to an Array
// Problem: Insert "kiwi" and "peach" at index 2 without removing any elements.

let fruits = ["apple", "banana", "orange", "grape"];
fruits.splice(2, 0, "kiwi", "peach");  // Start at index 2, remove 0 elements, and add new items

console.log(fruits);  // Output: ["apple", "banana", "kiwi", "peach", "orange", "grape"]
// In this example, nothing is deleted, but "kiwi" and "peach" are inserted at index 2.

// 3. Replacing Elements in an Array
// Problem: Replace "banana" and "orange" with "kiwi" and "peach".

let fruits = ["apple", "banana", "orange", "grape"];
fruits.splice(1, 2, "kiwi", "peach");  // Start at index 1, remove 2 elements, and replace with new items

console.log(fruits);  // Output: ["apple", "kiwi", "peach", "grape"]
// Here, "banana" and "orange" are removed, and "kiwi" and "peach" replace them.

// 4. Removing Elements to Resize an Array
// Problem: Keep only the first 3 elements of an array, removing everything else.


let numbers = [10, 20, 30, 40, 50, 60, 70];
numbers.splice(3);  // Start at index 3, remove all elements from that point onwards

console.log(numbers);  // Output: [10, 20, 30]
// By using just the start index (3), the splice() method removes all elements from index 3 to the end.

// 5. Emptying an Array
// Problem: Remove all elements from the array.


let arr = [1, 2, 3, 4, 5];
arr.splice(0, arr.length);  // Start at index 0, remove all elements

console.log(arr);  // Output: []
// This will completely empty the array by removing all its elements.

// 6. Extracting a Subarray
// Problem: Extract a subarray of 3 elements from index 2 and store them in a new array.

let arr = [10, 20, 30, 40, 50, 60, 70];
let subArray = arr.splice(2, 3);  // Start at index 2, remove 3 elements

console.log(subArray);  // Output: [30, 40, 50]
console.log(arr);       // Output: [10, 20, 60, 70]
// Here, splice() removes elements from index 2 and returns them as a subarray.

// 7. Removing the Last Element
// Problem: Remove the last element from the array.

let arr = [1, 2, 3, 4, 5];
arr.splice(-1, 1);  // Start from the last index (-1), remove 1 element

console.log(arr);  // Output: [1, 2, 3, 4]
// Using a negative index (-1), you can remove the last element of the array.

// 8. Remove Duplicate Elements
// Problem: Remove the duplicate "orange" from the array.

let fruits = ["apple", "banana", "orange", "grape", "orange"];
let duplicateIndex = fruits.lastIndexOf("orange");
fruits.splice(duplicateIndex, 1);  // Start at last occurrence of "orange", remove 1 element

console.log(fruits);  // Output: ["apple", "banana", "orange", "grape"]
// This removes only the last occurrence of "orange".

// 9. Using splice() to Rotate an Array
// Problem: Move the first 3 elements to the end of the array (rotation).

let arr = [1, 2, 3, 4, 5, 6];
let firstPart = arr.splice(0, 3);  // Remove first 3 elements
arr.push(...firstPart);            // Add them to the end

console.log(arr);  // Output: [4, 5, 6, 1, 2, 3]
// This rotates the array by moving the first part to the end.

// 10. Clearing and Rebuilding an Array
// Problem: Remove all elements and add new ones to the array.


let arr = [100, 200, 300];
arr.splice(0, arr.length, 1, 2, 3);  // Remove all elements, add 1, 2, 3

console.log(arr);  // Output: [1, 2, 3]




