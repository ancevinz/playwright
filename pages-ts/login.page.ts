import type { Locator, Page } from "playwright-core";

class LoginPage {
    page: Page;
    username: Locator;
    password: Locator;
    loginButton: Locator;

    constructor(page: Page) {
        this.page=page;
        this.username=page.locator("#user-name");
        this.password=page.locator("#password");
        this.loginButton=page.locator("#login-button");
    }
    async usernamefill(username: string) {
        await this.username.fill(username);
    }
    async passwordfill(password: string) {
        await this.password.fill(password);
    }
    async clickLoginButton() {
        await this.loginButton.click();
    }   
}
export default LoginPage;