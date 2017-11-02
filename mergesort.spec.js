describe('Merge Sort', function() {

    beforeEach(function() {
        spyOn(window, 'swap').and.callThrough();
    });

    it('handles an empty array', function() {
        expect(mergeSort([])).toEqual([]);
    });

    it('handles an array with length 1', function() {
        expect(mergeSort([2])).toEqual([2]);
    });

    it('handles a small array', function() {
        expect(mergeSort([7, 5, 2])).toEqual([2, 5, 7]);
    });

    it('handles a medium array', function() {
        expect(mergeSort([1, 5, 3, 7, 2, 9])).toEqual([1, 2, 3, 5, 7, 9]);
    });

    it('handles an array with equal numbers', function() {
        expect(mergeSort([1, 2, 1, 3, 1])).toEqual([1, 1, 1, 2, 3]);
    });

    it('counts swaps correctly', function() {
        expect(mergeSort([1, 2, 1, 3, 1])).toEqual([1, 1, 1, 2, 3]);
    });

});

describe('Merge Function', function() {

    it('is able to merge two sorted arrays into one sorted array', function() {
        expect(merge([2, 4, 5], [3, 6, 7])).toEqual([2, 3, 4, 5, 6, 7]);
    });

    it('is able to merge two sorted arrays of different lengths into one sorted array', function() {
        expect(merge([2, 4, 5], [3, 6, 7, 9, 10])).toEqual([2, 3, 4, 5, 6, 7, 9, 10]);
    });

    it('is able to merge an array of 1 and another array into one sorted array', function() {
        expect(merge([3], [2, 6, 7, 9, 10])).toEqual([2, 3, 6, 7, 9, 10]);
        expect(merge([2, 6, 7, 9, 10], [3])).toEqual([2, 3, 6, 7, 9, 10]);
    });

    it('merges two single arrays', function() {
        expect(merge([3], [2])).toEqual([2, 3]);
    });

});

describe('Split Array function', function() {
    it('is able to split an array into two halves', function() {
        expect(split([1, 2, 3, 4, 5, 6])).toEqual([
            [1, 2, 3],
            [4, 5, 6]
        ]);
    });
});