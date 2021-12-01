const getItemByBarcode = (items, barcode) => items.find((item) => item.barcode === barcode);

const addItemToBasket = (basket, item) => {
    if (item !== undefined) return basket.push(item);
}

const getBasketTotal = basket => basket.reduce((accumulator, item) => accumulator + item.price, 0);

const removeItemFromBasket = (basket, barcode) => {
    const itemIndex = basket.findIndex(item => item.barcode === barcode);
    return basket.splice(itemIndex, 1);
};

module.exports = {
    getItemByBarcode,
    addItemToBasket,
    getBasketTotal,
    removeItemFromBasket
};
