// 1. Push Front
// Given an array and an additional value, insert this value at the beginning of the array. You may use .push(), you are able do this without it though!
function pushFront(arr, x) {
    for (i=arr.length; i >= 0; i--) {
        arr[i] = arr[i-1]
    }
    arr[0] = x;
    console.log(arr);
    return arr
}
pushFront([5,7,2,3], 8)
pushFront([99], 7)

// 2. Pop Front
// Given an array, remove and return the value at the beginning of the array. Prove the value is removed from the array by printing it. You may use .pop(), you are able do this without it though!
function popFront(arr) {
    x = arr[0]
    for (i=0; i<arr.length; i++) {
        arr[i] = arr[i+1]
    }
    arr.pop();
    console.log(x);
    console.log(arr);
    return x
}

popFront([0,5,10,15])
popFront([4,5,7,9])
// A built in function that could do the above is "shift".

// 3. Insert At
// Given an array, index, and additional value, insert the value into array at given index. You can think of pushFront(arr,val) as equivalent to insertAt(arr,0,val). You may use .push(), you are able do this without it though!
function insertAt(arr,index,x) {
    for (i=arr.length; i >= index; i--) {
        arr[i] = arr[i-1]
        if (i == index) {
            arr[i] = x
        }
        else {continue}
    }
    console.log(arr);
    return arr
}

insertAt([100,200,5], 2, 311)
insertAt([9,33,7], 1, 42)

// 4. BONUS: Remove At
// Given an array and an index into array, remove and return the array value at that index. Prove the value is removed from the array by printing it. Think of popFront(arr) as equivalent to removeAt(arr,0).


// 5. BONUS: Swap Pairs
// Swap positions of successive pairs of values of given array. If length is odd, do not change the final element.


// 6. BONUS: Remove Duplicates
// Given a sorted array, remove duplicate values. Because array elements are already in order, all duplicate values will be grouped together. If you already made the Remove At function, you are welcome to use that! If you solved this using nested loops, for an extra challenge, try to do it without any nested loops!
