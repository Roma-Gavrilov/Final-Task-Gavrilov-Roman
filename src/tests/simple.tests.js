const logger = require('./../utils/logger');
const loginPage = require('./../po/pages/login.page');
const inventoryPage = require('./../po/pages/inventory.page');
const inventoryItemPage = require('./../po/pages/inventory-item.page');
const assert = require('assert');

describe('UC-1 Product Details Verification', () => {
    beforeEach(async () => {
        await loginPage.open();
        await loginPage.login('standard_user', 'secret_sauce');
    });

    it('Click on a product title', async () => {
        const productName = await inventoryPage.getProductName(3);
        logger.info(`Checking product: ${productName}`);
        await inventoryPage.productBtn(3);
    });

    it('Validate price and description', async () => {
        const descriptionInventory = await inventoryPage.getProductDescription(3);
        const priceInventory = await inventoryPage.getProductPrice(3);
        await inventoryPage.productBtn(3);
        const descriptionItem = await inventoryItemPage.getDescription();
        const priceItem = await inventoryItemPage.getPrice();
        assert.strictEqual(descriptionInventory, descriptionItem, 'Description does not match');
        assert.strictEqual(priceInventory, priceItem, 'Price does not match');
    });

    it('Add the item to the cart from the Details Page', async() => {
        await inventoryPage.productBtn(3);
        await inventoryItemPage.addToCart();
    });
})