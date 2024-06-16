import test, { expect } from "@playwright/test";
import { PageManager } from "../page-objects/pageManager"

const baseUrl = "https://skleptest.pl/"
const userEmail = "Tester@test.pl"
const userPassword = "TestTest.12345"
const productName = "FITT Belts"
const productPrice ="35 zł"

test.describe("Tests E2E",()=>{
    test.beforeEach(async({page})=>{
        await page.goto(baseUrl)
    })
    test("Verify title test",async({page})=>{
        const pm = new PageManager(page)
        const title = await pm.getTitle()
        await expect(title).toBe("Generic Shop – Just another web shop")
    })
    test("Create account test",async({page})=>{
        const pm = new PageManager(page)
        await pm.main().navigateToAccount()
        await expect(page.url()).toContain("my-account")
        await pm.myAccount().login(userEmail,userPassword)  
        const  accountHeader = page.locator("//h1[.='My account']")
        await expect(accountHeader).toBeVisible();
    })
    test("My Cart test",async({page})=>{
        const pm = new PageManager(page)
        await pm.main().navigateToMostWantedProduct()
        await pm.product().viewProductDetails(productName)
        const actualProductname =await pm.product().getProductName()
        expect(productName).toEqual(actualProductname)
        const actualProductPrice = await pm.product().getProductPrice()   
        const productPrice =await pm.product().getProductPrice()
        expect(actualProductPrice).toEqual(productPrice)
        await pm.product().clickAddToCartButton()
    
    })
              
        
       









})