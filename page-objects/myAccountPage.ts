import { Page } from "@playwright/test";
import { BasePage } from "./basePage";

export class MyAccountPage extends BasePage{

    constructor(page:Page){
        super(page)
    }
    async inputEmailAdress(name:string){
        const inputFieldLocator =  this.page.locator('input[name="email"]')
        await inputFieldLocator.clear()
        await inputFieldLocator.type(name)
    }
    async inputPassowrd(password:string){
        const inputPasswordLocator =this.page.locator(".u-column2").locator('input[name="password"]')
        await inputPasswordLocator.hover()
        await inputPasswordLocator.click()
        await inputPasswordLocator.fill(password)
        await this.page.keyboard.press("Space")
        await inputPasswordLocator.click()
        
    }
    async clickRegisterButton(){
        await this.page.getByRole("button",{name:"Register"}).click()
    }
    async login(email:string,password:string){
        await this.inputEmailAdress(email)
        await this.inputPassowrd(password)
        await this.clickRegisterButton()
    }
}