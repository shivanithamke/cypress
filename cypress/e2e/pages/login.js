export class login{
     
    loginpage_username='[data-test="username"]'
    loginpage_password='[data-test="password"]'
    loginpage_loginbutton='[data-test="login-button"]'
    
    
    enterusername(username){
        cy.get(this.loginpage_username).type(username)
    }
    enterpassword(password){
        cy.get(this.loginpage_password).type(password)
    }
    clicklogin(){
        cy.get(this.loginpage_loginbutton).click()
    }
}