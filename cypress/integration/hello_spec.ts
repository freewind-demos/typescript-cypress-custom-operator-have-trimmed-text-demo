describe('cypress', () => {

  it('should use custom assertion operator', async () => {
    cy.visit('http://localhost:23423')
    cy.get('h1').should('have.textTrimmed', '   Hello  ')
  })

})
