import HomePage, { logout } from '../../support/PageObject/HomePage/HomePage';
import LoginSauceDemoPage, { login } from '../../support/PageObject/LoginPage/LoginSauceDemoPage';

describe('Login function', () => {
    const loginPage = new LoginSauceDemoPage();
    const homePage = new HomePage();
    var testdata;
    var dataPath = 'login/accountList';

    before(function () {
        cy.fixture(dataPath).then(function (accountJsonFile) {
            testdata = accountJsonFile.accounts;
            cy.log(testdata);
        });
    });

    beforeEach(() => {
        cy.visit('/');
    });

    after(() => {
        logout();
    })

    it("Should show error messsage if login with correct username, wrong password", function () {
        var invalidAccount = testdata[0];
        login(invalidAccount.username, invalidAccount.password);
        loginPage.getErrorMessage()
            .should('be.visible')
            .invoke('text')
            .should('equal', invalidAccount.message);
    });

    it("Should login successfully with valid account", function () {
        var validAccount = testdata[1];
        login(validAccount.username, validAccount.password);
        homePage.getCartButton()
            .should('be.visible');
    });

});