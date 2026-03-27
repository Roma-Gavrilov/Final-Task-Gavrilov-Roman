const logger = require('./../utils/logger');
const loginPage = require('./../po/pages/login.page');
const inventoryPage = require('./../po/pages/inventory.page');
const inventoryItemPage = require('./../po/pages/inventory-item.page');
const footerComponent = require('./../po/components/common/footer.component');
const assert = require('assert');

describe('UC-1 Product Details Verification', () => {
    beforeEach(async () => {
        await loginPage.open();
        await loginPage.login('username').setValue('standard_user');
        await loginPage.login('password').setValue('secret_sauce');
        await loginPage.loginBtn.click();
    });

    it('Click on a product title', async () => {
        await logger.info(`Checking product: ${await inventoryPage.productName.getText()}`);
        await inventoryPage.productName.click();
    });

    it('Validate price and description', async () => {
        const descriptionInv = await inventoryPage.productDescription.getText();
        const priceInv = await inventoryPage.productPrice.getText();
        await inventoryPage.productName.click();
        const descriptionItem = await inventoryItemPage.productDescription.getText();
        const priceItem = await inventoryItemPage.productPrice.getText();
        assert.strictEqual(descriptionInv, descriptionItem, 'Description does not match');
        assert.strictEqual(priceInv, priceItem, 'Price does not match');
    });

    it('Add the item to the cart from the Details Page', async () => {
        await inventoryPage.productName.click();
        await inventoryItemPage.addToCartBtn.click();
    });
});

describe('UC-2 Footer & Social Links', () => {
    beforeEach(async () => {
        await loginPage.open();
        await loginPage.login('username').setValue('standard_user');
        await loginPage.login('password').setValue('secret_sauce');
        await loginPage.loginBtn.click();
    });

    it('Scroll to the footer', async () => {
        await footerComponent.footer.scrollIntoView();
    });

    it('Verify that the Twitter, Facebook, and LinkedIn links exist', async () => {
        await expect(footerComponent.twitter).toBeExisting();
        await expect(footerComponent.facebook).toBeExisting();
        await expect(footerComponent.linkedin).toBeExisting();
    });

    it('Verify that clicking a social link opens the correct URL in a new tab/window', async () => {

    });
})