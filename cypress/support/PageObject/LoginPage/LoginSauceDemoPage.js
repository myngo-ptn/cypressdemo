class LoginSauceDemoPage {
    
    getUsernameTextBox() {
        return cy.get('[data-test=username]');
    }

    getPasswordTextBox() {
        return cy.get('[data-test=password]');
    }

    getLoginButton() {
        return cy.get('[data-test=login-button]');
    }

    getErrorMessage(){
        return cy.get('[data-test="error"]');
    }

};

export default LoginSauceDemoPage;

/**
 * function to login into SauceDemo website
* @param {string} username - User name
* @param {string} password - Password
*/
export function login(username, password) {
    const loginPage = new LoginSauceDemoPage();
    loginPage.getUsernameTextBox()
        .clear()
        .type(username);
    loginPage.getPasswordTextBox()
        .clear()
        .type(password);
    loginPage.getLoginButton()
        .click();
}