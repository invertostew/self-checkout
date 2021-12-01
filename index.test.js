const {
    getItemByBarcode,
    addItemToBasket,
    getBasketTotal,
    removeItemFromBasket
} = require('./index');

describe('getItemByBarcode', () => {
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

    it('returns an item by its barcode', () => {
        expect(getItemByBarcode(items, 456)).toEqual(banana);
        expect(getItemByBarcode(items, 5367)).toEqual(pineapple);
        expect(getItemByBarcode(items, 765)).toEqual(kiwi);
    });
});

describe('addItemToBasket', () => {
    it('adds an item to the basket', () => {
        const basket = [];

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
        expect(addItemToBasket(basket, items[0])).toEqual(1);
        expect(addItemToBasket(basket, items[6])).toEqual(undefined);
        expect(addItemToBasket(basket, items[3])).toEqual(2);
    });
});

describe('getBasketTotal', () => {
    const orange = {
        barcode: 789,
        price: 7
    };
    
    const kiwi = {
        barcode: 765,
        price: 25
    };
    
    const banana = {
        barcode: 456,
        price: 6
    }

    const testBasketA = [orange];
    const testBasketB = [orange, kiwi];
    const testBasketC = [orange, kiwi, banana, banana];

    it('gets the correct total with an orange', () => {
        expect(getBasketTotal(testBasketA)).toEqual(orange.price);
    });
    it('gets the correct total with an orange and a kiwi', () => {
        expect(getBasketTotal(testBasketB)).toEqual(orange.price + kiwi.price);
    });
    it('gets the correct total with an orange, a kiwi, and two bananas', () => {
        expect(getBasketTotal(testBasketC)).toEqual(orange.price + kiwi.price + (banana.price * 2));
    });
});

describe('removeItemFromBasket', () => {
    const orange = {
        barcode: 789,
        price: 7
    };
    
    const kiwi = {
        barcode: 765,
        price: 25
    };
    
    const banana = {
        barcode: 456,
        price: 6
    }

    const testBasketC = [orange, kiwi, banana, banana];

    it('removes an item from the basket', () => {
        expect(removeItemFromBasket(testBasketC, 765)).toEqual([kiwi]);
    });
});
