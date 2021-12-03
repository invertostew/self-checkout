const scanItem = (items, barcode) => {
    const item = items.find(item => {
        return item.barcode === barcode;
    });
    return item;
};

const addItem = (basket, item) => {
    basket.push(item);
    return basket;
};

const basketTotal = basket => {
    const total = basket.reduce((accumulator, item) => {
        return accumulator + item.price;
    }, 0);
    return total;
};

const removeItem = (basket, barcode) => {
    const itemIndex = basket.findIndex(item => {
        return item.barcode === barcode;
    });
    return basket.splice(itemIndex, 1);
};

module.exports = {
    scanItem,
    addItem,
    basketTotal,
    removeItem
};
