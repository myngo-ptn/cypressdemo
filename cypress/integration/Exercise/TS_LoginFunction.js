// / <reference types="cypress"/>

import loginPage from '../../support/PageObject/LoginPage';

describe('Testing Login functionality', () => {
  beforeEach(() => {
    cy.fixture('accountLoginFunction').then(function (accountLoginFunction) {
      this.testLogin = accountLoginFunction
      cy.log(this.testLogin) 
    })
    cy.visit('http://www.demo.guru99.com/V4/index.php')

  })

  it('Verify Login fail with blank userID and blank password', function () {
    //blank username and blank password
    const LoginPage = new loginPage(); 
    LoginPage.submit()
  })

  it('Verify Login fail with invalid userID and valid password', function () {
    const LoginPage = new loginPage();
    LoginPage.enterUsername(this.testLogin[1].username)
    LoginPage.enterPassword(this.testLogin[1].password)
    LoginPage.submit()
    //using account second
  })

  it('Verify Login fail with valid userID and invalid password', function () {
    const LoginPage = new loginPage();
    LoginPage.enterUsername(this.testLogin[2].username)
    LoginPage.enterPassword(this.testLogin[2].password)
    LoginPage.submit()
    //using account third
  })

  it('Verify Login fail with invalid userID and invalid password', function () {
    const LoginPage = new loginPage();
    LoginPage.enterUsername(this.testLogin[3].username)
    LoginPage.enterPassword(this.testLogin[3].password)
    LoginPage.submit()
    //using account fourth
  })

  it.only('Verify Login success with valid userID and valid password', function () {
    const LoginPage = new loginPage();
    LoginPage.enterUsername(this.testLogin[0].username)
    LoginPage.enterPassword(this.testLogin[0].password)
    LoginPage.submit()
    //get title homepage to verify login success
    cy.title()
      .should('eq',this.testLogin[0].title) 
    cy.get('.menusubnav').contains('a', 'New Customer').click();
    cy.get('#dob').type('2021-10-25');
    
  })


})


