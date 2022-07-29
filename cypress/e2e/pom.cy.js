/// <reference types="cypress" />
import{login}from "./pages/login"
const loginpage= new login()
beforeEach(function(){
    cy.visit('https://www.saucedemo.com/')
})
describe('All login test',()=>{

    
    it('login test1',()=>{

        
        loginpage.enterusername('standard_user')
        loginpage.enterpassword('secret_sauce')
        loginpage.clicklogin()
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
             
    });
    it('login test2',()=>{
    
       
        loginpage.enterusername('standar8hd_user')
        loginpage.enterpassword('secret_sauce')
        loginpage.clicklogin()
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    
             
    });



})

it('invalide login test',()=>{
    
       
    loginpage.enterusername('standar8hd_user')
    loginpage.enterpassword('secret_sauce')
    loginpage.clicklogin()
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()

         
});
