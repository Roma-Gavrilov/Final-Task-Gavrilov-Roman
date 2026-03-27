class InventoryPage {
    async getProductByIndex(index) {
        const items = await $$('.inventory_item');
        return items[index];
    }

    async productBtn(index) {
        const item = await this.getProductByIndex(index);
        await item.$('.inventory_item_name').click();
    }

    async getProductName(index) {
        const item = await this.getProductByIndex(index);
        return await item.$('.inventory_item_name').getText();
    }

    async getProductDescription(index) {
        const item = await this.getProductByIndex(index);
        return await item.$('.inventory_item_desc').getText();
    }

    async getProductPrice(index) {
        const item = await this.getProductByIndex(index);
        return await item.$('.inventory_item_price').getText();
    }
}

module.exports = new InventoryPage();