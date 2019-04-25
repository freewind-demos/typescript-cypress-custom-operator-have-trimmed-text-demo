describe('cypress', () => {

  it('should use custom assertion operator "have.trimmed.text"', () => {
    cy.visit('http://localhost:23423')
    cy.get('h1').should('have.trimmed.text', 'Hello')
  })

})
