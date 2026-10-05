describe('SauceDemo Login', () => {
  it('logs in with valid credentials', () => {
    cy.visit('https://www.saucedemo.com')
    cy.get('#user-name').type('standard_user')
    cy.get('#password').type('secret_sauce')
    cy.get('#login-button').click()
    cy.url().should('include', '/inventory.html')
  })

  it('shows an error with invalid credentials', () => {
    cy.visit('https://www.saucedemo.com')
    cy.get('#user-name').type('wrong_user')
    cy.get('#password').type('wrong_password')
    cy.get('#login-button').click()
    cy.get('[data-test="error"]').should('contain', 'Username and password do not match')
  })

  it('shows an error when fields are empty', () => {
  cy.visit('https://www.saucedemo.com')
  cy.get('#login-button').click()
  cy.get('[data-test="error"]').should('contain', 'Username is required')
})
})