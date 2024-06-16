import { Page } from "@playwright/test"

export class BasePage{
    readonly page: Page

    constructor(page: Page){
        this.page = page
    }
    async waitForNumberOfSeconds(timieInSeconds:number){
        await this.page.waitForTimeout(timieInSeconds*1000)
    }
     async getTitle(){
        return await this.page.title() 
    }
}