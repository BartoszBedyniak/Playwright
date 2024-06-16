import { Page } from "@playwright/test";
import { BasePage } from "./basePage";

export class MainPage extends BasePage {
    
    private accountButton =  this.page.locator(".top-account")
    private mostWantedLocator = this.page.locator('a[title="Most Wanted"]')
    
    constructor(page: Page){
        super(page)     
    }
    async navigateToAccount(){  
        await this.accountButton.click()
    }
    async navigateToMostWantedProduct(){
        await this.mostWantedLocator.click()

    }
    

    
}


