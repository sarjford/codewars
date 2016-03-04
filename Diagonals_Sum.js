//Create a function that receives a (square) matrix and calculates the sum of both diagonals (main and secondary)

//Matrix = array of n length whose elements are n length arrays of integers.

function sum(matrix) {

var sum = 0;

    for(var i = 0; i<matrix.length; i++){
        sum = sum + matrix[i][i];   
    }

    for (var x = 0; x<matrix.length; x++){
        sum = sum + matrix[x][matrix.length-x-1];
    }

    return sum;
}