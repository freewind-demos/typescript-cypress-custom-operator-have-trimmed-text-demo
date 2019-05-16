describe('cypress', () => {

  it('should use custom assertion operator "have.trimmed.text"', () => {
    cy.visit('index.html')
    cy.get('h1').should('have.trimmed.text', 'Hello')
  })

})
