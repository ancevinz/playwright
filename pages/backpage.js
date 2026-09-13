class Backpage {
    constructor(page) {
        this.page = page;
        this.backButton = page.locator("#back-to-products");
    }

    async clickBack() {
        await this.backButton.click();
    }
}
export default Backpage;