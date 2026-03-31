class InventoryItemPage {
    get getProductName() {
        return $('.inventory_details_name');
    }
    
    get getProductDescription() {
        return $('.inventory_details_desc');
    }

    get getProductPrice() {
        return $('.inventory_details_price');
    }

    get addToCartBtn() {
        return $('[name="add-to-cart"]');
    }
}

module.exports = new InventoryItemPage();