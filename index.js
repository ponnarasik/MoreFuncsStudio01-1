//1) Create a function with an array of numbers as its parameter. The function should iterate through the array and return the minimum value from the array. Hint: Use what you know about if statements to identify and store the smallest value within the array.
let nums1 = [5, 10, 2, 42];
let nums2 = [-2, 0, -10, -44, 5, 3, 0, 3];
let nums3 = [200, 5, 4, 10, 8, 5, -3.3, 4.4, 0];

function getMinimum(arr){
  let i =0; let min = 0;
  for (i=0; i < arr.length; i++){
    min=arr[0];
    if(min>arr[i]){
      min=arr[i];
      }
  }
  return min;
  }

console.log(getMinimum(nums1));
//arr , lastIndexSearched starts at arr.length -1, temp holds the min
function getMinimumRec(arr, lastIndexSearched, min){
if(lastIndexSearched < 0){
return;
}

if(arr[lastIndexSearched] < min){
  return (getMinimum(arr, lastIndexSearched - 1, arr[lastIndexSearched]) )
}
return ( getMinimum(arr, lastIndexSearched - 1, min) )
}

console.log(getMinimumRec(nums1));


//Sample arrays for testing:





//Using one of the test arrays as the argument, call your function inside the console.log statement below.

console.log(/* your code here */);
