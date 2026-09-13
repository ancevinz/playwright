class Checkoutpage {

    constructor(page) {
        this.page = page;
        this.firstName = page.locator("#first-name");
        this.lastName = page.locator("#last-name");
        this.postalCode = page.locator("#postal-code");
        this.continueButton = page.locator("#continue");
        this.finishButton = page.locator("#finish");
        this.backToProductsButton = page.locator("#back-to-products");
    }

    async enterFirstName(firstName) {
        await this.firstName.fill(firstName);
    }

    async enterLastName(lastName) {
        await this.lastName.fill(lastName);
    }

    async enterPostalCode(postalCode) {
        await this.postalCode.fill(postalCode);
    }

    async clickContinue() {
        await this.continueButton.click();
    }

    async clickFinish() {
        await this.finishButton.click();
    }

    async clickBackToProducts() {
        await this.backToProductsButton.click();
    }
}
export default Checkoutpage;