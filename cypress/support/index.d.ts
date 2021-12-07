
declare namespace Cypress {
    interface Chainable<Subject> {
      /**
       * Login to the system with username and password
       * @example cy.login('admin', 'password')
       */
      login(username: string, password: string): Chainable<any>

      /**
       * Log user out of system 
       * @example cy.logout()
       */
      logout(): Chainable<any>
    }
  }