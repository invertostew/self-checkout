const {
    scanItem,
    addItem,
    basketTotal,
    removeItem
} = require('../index');

// Set up constant data
const orange = {
    barcode: 789,
    price: 7
};

const pineapple = {
    barcode: 5367,
    price: 80
};

const kiwi = {
    barcode: 765,
    price: 25
};

const apple = {
    barcode: 123,
    price: 5
};

const banana = {
    barcode: 456,
    price: 6
}

const items = [
    orange,
    pineapple,
    kiwi,
    apple,
    banana
];

// basket for later use in beforeEach
let basket = [];
beforeEach(() => {
    // reset basket
    basket = [];
});

describe('scanItem', () => {
    test('returns an item based on its barcode', () => {
        expect(scanItem(items, items[0].barcode)).toBe(items[0]);
        expect(scanItem(items, items[2].barcode)).toBe(items[2]);
        expect(scanItem(items, items[4].barcode)).toBe(items[4]);
    });
});

describe('addItem', () => {
    test('add an item to the basket', () => {
        expect(addItem(basket, items[0])).toEqual([orange]);
    });
    test('add two items to the basket', () => {
        expect(addItem(basket, items[1])).toEqual([pineapple]);
        expect(addItem(basket, items[4])).toEqual([pineapple, banana]);
    });
});

describe('basketTotal', () => {
    test('returns the total price of the current basket', () => {

    });
});

describe('removeItem', () => {
    test('remove an item from the basket', () => {

    });
    test('remove two items from the basket', () => {

    });
});
