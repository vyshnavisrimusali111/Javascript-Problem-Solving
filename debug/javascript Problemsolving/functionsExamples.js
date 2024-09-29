//for of

//Sum of an Array
function sumArray(numbres){
    let sum = 0;
    for (const num of numbers){
        sum += num;
    }
    return sum;
}


let numbers = [1,3,2,4,5];
result=sumArray(numbers);
console.log(result);

//=====================================================================
//Finding the Longest String
function findLongestString(strings){
    let longest = "";

    for (const str of strings){
        if (str.length > longest.length){
            longest = str;
        }
    }
    return longest;
}
let words =["apple", "banana", "cherry", "kiwi"]
res=findLongestString(words)
console.log(res);
//===============================================================================
//Flattening an Array of Arrays
function flattenArray(arrays) {
    let flatArray = [];
    for (const array of arrays) {
        for (const item of array) {
            flatArray.push(item);
        }
    }
    return flatArray;
}

let nestedArrays = [[1, 2], [3, 4], [5]];
console.log(flattenArray(nestedArrays)); 


function MultiplicationTable(n){
    let table = [];
    for (let i=1;i<=10;i++){
        table.push(`${n} *${i}=${n*i}`);
    }
    return table;
}
console.log(MultiplicationTable(5));



function countVowels(str){
    const vowels = "aeiouAEIOU";
    let count = 0;
    for (const char of str) {
        if(vowels.includes(char)){
            count++;
        }
    
    }
    return count;
}

console.log(countVowels('Hello World'));



let str = "hello World";
let ptrn = /^[A-Z]/;
console.log(ptrn.test(str));

function isFirstUpper(str){
    if(str.length === 0 ){
        return false;
    }else{
        return str[0].toUpperCase() === str[0];
    }
}
result= isFirstUpper("Hello");
console.log(result);

function startsWithDigit(str) {
    return !isNaN(str.charAt(0));
  }
  

  console.log(startsWithDigit('123abc')); 

  function removeDuplicates(arr) {
    return arr.filter((item, index) => {
      console.log(`item: ${item}, index: ${index}, firstIndex: ${arr.indexOf(item)}`);
      return arr.indexOf(item) === index;
    });
  }

  const duplicateArray = [1, 2, 2, 3, 4, 4, 5, 1];
  console.log(removeDuplicates(duplicateArray));
  
  function isPrime(num) {
    if (num <= 1) return false;  
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;  
      }
    }
    return true;  
  }
  

  console.log(isPrime(2)); 
