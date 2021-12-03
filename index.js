const scanItem = (items, barcode) => {
    const item = items.find(item => {
        return item.barcode === barcode;
    });
    
    return item;
};

const addItem = (basket, item) => {

};

const basketTotal = basket => {

};

const removeItem = (basket, barcode) => {

};

module.exports = {
    scanItem,
    addItem,
    basketTotal,
    removeItem
};
