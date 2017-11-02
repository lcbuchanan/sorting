describe('Bubble Sort', function() {

    beforeEach(function() {
        spyOn(window, 'swap').and.callThrough();
    });

    it('handles an empty array', function() {
        expect(bubbleSort([])).toEqual([]);
        expect(window.swap.calls.count()).toEqual(0);
    });

    it('handles an array with length 1', function() {
        expect(bubbleSort([2])).toEqual([2]);
        expect(window.swap.calls.count()).toEqual(0);
    });

    it('handles a small array', function() {
        expect(bubbleSort([7, 5, 2])).toEqual([2, 5, 7]);
        expect(window.swap.calls.count()).toEqual(3);
    });

    it('handles a medium array', function() {
        expect(bubbleSort([1, 5, 3, 7, 2, 9])).toEqual([1, 2, 3, 5, 7, 9]);
    });

    it('handles an array with equal numbers', function() {
        expect(bubbleSort([1, 2, 1, 3, 1])).toEqual([1, 1, 1, 2, 3]);
    });

    it('counts swaps correctly', function() {
        expect(bubbleSort([1, 2, 1, 3, 1])).toEqual([1, 1, 1, 2, 3]);
        expect(window.swap.calls.count()).toEqual(3);

    });

});