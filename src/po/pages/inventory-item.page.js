class InventoryItemPage {
    get productDescription() {
        return $('.inventory_details_desc');
    }

    get productPrice() {
        return $('.inventory_details_price');
    }

    get addToCartButton() {
        return $('[name="add-to-cart"]');
    }

    async getDescription() {
        return await this.productDescription.getText();
    }

    async getPrice() {
        return await this.productPrice.getText();
    }

    async addToCart() {
        await this.addToCartButton.click();
    }
}

module.exports = new InventoryItemPage();