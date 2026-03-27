class InventoryItemPage {
    get productDescription() {
        return $('.inventory_details_desc');
    }

    get productPrice() {
        return $('.inventory_details_price');
    }

    get addToCartBtn() {
        return $('[name="add-to-cart"]');
    }
}

module.exports = new InventoryItemPage();