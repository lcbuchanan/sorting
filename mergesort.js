function mergeSort(arr) {
    if (arr.length === 1 || arr.length === 0) return arr;

    var twoArrays = split(arr);
    return merge(mergeSort(twoArrays[0]), mergeSort(twoArrays[1]));
}

function merge(arr1, arr2) {
    if (!arr1.length) return arr2;
    if (!arr2.length) return arr1;

    var output = [];
    var i = 0;
    var j = 0;
    while (output.length < arr1.length + arr2.length) {
        if (arr1[i] <= arr2[j] || arr2[j] === undefined) {
            output.push(arr1[i]);
            i++;
        } else {
            output.push(arr2[j]);
            j++;
        }
    }

    return output;
}

function split(arr) {
    var firstHalf = arr.slice(0, Math.floor(arr.length / 2));
    var secondHalf = arr.slice(Math.floor(arr.length / 2));
    return [firstHalf, secondHalf];
}