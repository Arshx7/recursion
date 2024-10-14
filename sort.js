function mergeSort(array) {
    if(array.length <= 1){
        return array;
    }

    let mid = Math.floor(array.length / 2);
    let left = mergeSort(array.slice(0, mid))
    let right = mergeSort(array.slice(mid))

    return merge(left, right);
}

function merge(left, right) {
    let sortedArray = []

    let i = 0;
    let j = 0;

    while( i < left.length && j < right.length) {
        if(left[i] < right[j]) {
            sortedArray.push(left[i]);
            i++;
        } else {
            sortedArray.push(right[j])
            j++;
        }
    }

    for(k = i; k < left.length; k++) {
        sortedArray.push(left[k]);
    }
    for(k = j; k < right.length; k++) {
        sortedArray.push(right[k]);
    }
    return sortedArray;
}
const array = [105, 79, 100, 110];
const sortedArray = mergeSort(array);
console.log(sortedArray);
