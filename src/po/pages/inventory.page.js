class InventoryPage {
    get productIndex() {
        return $$('.inventory_item')[3];
    }

    get productName() {
        return this.productIndex.$('.inventory_item_name');
    }

    get productDescription() {
        return this.productIndex.$('.inventory_item_desc');
    }

    get productPrice() {
        return this.productIndex.$('.inventory_item_price');
    }
}

module.exports = new InventoryPage();