class Cartpage {

    constructor(page) {
        this.page = page;
        this.checkoutButton = page.locator("#checkout");
    }

    async clickCheckout() {
        await this.checkoutButton.click();
    }
}
export default Cartpage;