import { Page } from "@playwright/test";

import { BasePage } from "./basePage";
import { MainPage } from "./mainPage";
import { MyAccountPage } from "./myAccountPage";
import { MostWantedProduct } from "./mostWantedProduct";

export class PageManager extends BasePage{
    private readonly mainPage: MainPage
    private readonly myAccountPage: MyAccountPage
    private readonly mostWantedProduct: MostWantedProduct
    

    constructor(page: Page){
        super(page)  
        this.mainPage = new MainPage(this.page)
        this.myAccountPage = new MyAccountPage(this.page)
        this.mostWantedProduct = new MostWantedProduct(this.page)
    }
    main(){
        return this.mainPage
    }
    myAccount(){
        return this.myAccountPage
    }
    product(){
        return this.mostWantedProduct
    }

        
    
    
}