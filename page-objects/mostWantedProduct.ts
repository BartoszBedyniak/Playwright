import { Page } from "@playwright/test";
import { BasePage } from "./basePage";


export class MostWantedProduct extends BasePage{

    constructor(page:Page){
        super(page)
    }
    async viewProductDetails(productName:string){
        const productDetails = await this.page.locator('.product')
        .filter({has:this.page.locator('h2[class="woocommerce-loop-product__title"]')})
        .getByText(productName).click()
    }
    async getProductName(){
        const productName = await this.page.locator(".product_title").textContent()
        return productName

    }
    async getProductPrice(){
        const productPrice = await this.page.locator(".summary .price .woocommerce-Price-amount").textContent()
        return productPrice

    }
    async getDescription(){
        const productDescription = await this.page.locator(".woocommerce-product-details__short-description").locator("p")
        

    }
    async clickAddToCartButton(){
        await this.page.locator(".single_add_to_cart_button ").click()
    
    }
}
