function bubbleSort(arr) {
    var sorted = false;
    while (!sorted) {
        var changes = 0;
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] > arr[i + 1]) {
                swap(arr, i);
                changes++;
            }
        }
        if (changes === 0) {
            sorted = true;
        }
    }
    return arr;
}

function swap(arr, i) {
    var temp = arr[i + 1];
    arr[i + 1] = arr[i];
    arr[i] = temp;
}