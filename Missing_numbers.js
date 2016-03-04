/*
You will get an array of numbers.

Every preceding number is smaller than the one following it.

Some numbers will be missing, for instance:

[-3,-2,1,5] //missing numbers are: -1,0,2,3,4
Your task is to return an array of those missing numbers:

[-1,0,2,3,4]
*/

function findMissingNumbers(arr){
  newArr = [];
  for (var i = 0; i<arr.length; i++){
    var diff = (arr[i+1]-arr[i]);
    if (diff>1){
      for (var x=0; x<diff-1; x++)
        newArr.push(arr[i]+(x+1));
          }
        }
    return newArr;
}