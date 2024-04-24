//Define a function to perform Bubble Sort on an array
//Bubble Sort is a simple sorting algorithm that repetedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order creating the sorted array
function bubbleSort(arr){

    //Loop through the array defining until when the iteration process runs 
    for (let i = 0; i < arr.length - 1; i++){
        //Last elements are already in place so we don't need to check them 
        //Make the inner loop
        for (let j = 0; j < arr.length - i - 1; j++){
            //Compare adjacent elements
            if (arr[j] > arr[j + 1]){
                //Swap if they are in the wrong order
                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            } 
        }
    }
    //Return the sorted array
    return arr;
}




//Example of array
const unsortedArray = [10, 2, 23, 16, 8];
const sortedArray = bubbleSort(unsortedArray);
console.log("Sorted array:", sortedArray);
