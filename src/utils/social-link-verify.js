require('./../po/components/common/footer.component');

async function socialLinksVerify(link) {
    const mainWindow = await browser.getWindowHandle();
    await link.element.click();
    await browser.waitUntil(async () => (await browser.getWindowHandles()).length > 1, { timeout: 5000 });
    const newWindow = (await browser.getWindowHandles()).find(handle => handle !== mainWindow);
    await browser.switchToWindow(newWindow);
    await browser.waitUntil(async () => await browser.getUrl() !== 'about:blank', { timeout: 5000 });
    await expect(await browser.getUrl()).toContain(link.expected);
    await browser.closeWindow();
    await browser.switchToWindow(mainWindow);
}

module.exports = { socialLinksVerify };