import {test, expect } from "@playwright/test";
import Loginpage  from "../pages/loginpage.js";
import Productpage  from "../pages/productspage.js";
import Cartpage  from "../pages/cartpage.js";
import Checkoutpage  from "../pages/checkoutpage.js";
import Backpage  from "../pages/backpage.js";
import testdata from "../testdata/testdata.json" with { type: "json" };
test('saucedemosite test', async({page}) => {
  /*await page.goto("https://www.saucedemo.com/");
  await page.locator("#user-name").fill("standard_user");
  await page.locator("#password").fill("secret_sauce");
  await page.locator("#login-button").click();
  await page.waitForTimeout(2000);
  await expect(page).toHaveTitle("Swag Labs");
  await expect(page.locator(".title")).toHaveText("Products");*/
const loginPage = new Loginpage(page);
let usernamevalue = testdata.username;
let passwordvalue= testdata.password;
await page.goto("https://www.saucedemo.com/");
await loginPage.enterUsername("usernamevalue");
await loginPage.enterPassword("passwordvalue");
await loginPage.clickLogin();
await expect(page).toHaveTitle("Swag Labs");
await expect(page.locator(".title")).toHaveText("Products");
await page.waitForTimeout(2000);
  /*const dropdown = page.locator('[data-test="product-sort-container"]');
  await dropdown.selectOption({index: 2});
  await page.locator('#add-to-cart-sauce-labs-backpack').click();
  await page.locator('.shopping_cart_link').click();*/
const productPage = new Productpage(page);
await productPage.sortProduct();
await productPage.addBackpackToCart();
await productPage.clickShoppingCart();
await page.waitForTimeout(2000);
   /*await page.locator('#checkout').click();*/
const cartPage = new Cartpage(page);
await cartPage.clickCheckout();
  /*await page.locator('#first-name').fill("John");
  await page.locator('#last-name').fill("Doe");
  await page.locator('#postal-code').fill("12345");
  await page.locator('#continue').click();
  await page.locator('#finish').click();*/
const checkoutPage = new Checkoutpage(page);
await checkoutPage.enterFirstName("John");
await checkoutPage.enterLastName("Doe");
await checkoutPage.enterPostalCode("12345");
await checkoutPage.clickContinue();
await checkoutPage.clickFinish();
  /*await page.locator('#back-to-products').click();*/
const backPage = new Backpage(page);
await backPage.clickBack();

await page.waitForTimeout(2000);
await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
});