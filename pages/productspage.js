class Productpage {

    constructor(page) {
        this.page = page;
        this.sortDropdown = page.locator('[data-test="product-sort-container"]');
        this.addBackpack = page.locator("#add-to-cart-sauce-labs-backpack");
        this.shoppingCart = page.locator(".shopping_cart_link");
    }

    async sortProduct() {
        await this.sortDropdown.selectOption({ index: 2 });
    }

    async addBackpackToCart() {
        await this.addBackpack.click();
    }

    async clickShoppingCart() {
        await this.shoppingCart.click();
    }
}
export default Productpage;