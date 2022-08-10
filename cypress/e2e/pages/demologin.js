export class demologin{
     
    login_username='#userName'
    login_email='#userEmail'
    login_address='#currentAddress'
    login_address1='#permanentAddress'
    submit='#submit'
    
    
    username(name){
        cy.get(this.login_username).type(name)
    }
   email(email){
        cy.get(this.login_email).type(email)
    }
    address(address){
        cy.get(this.login_address).type(address)
    }
    address1(address1){
        cy.get(this.login_address1).type(address1)
    }
   submit1(){
        cy.get(this.submit).click()
    }
}