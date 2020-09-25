describe('UI Exercise', () => {
  it('can display messages tagged as "work"', () => {
    cy.visit('/')
      .get('a.work')
      .then(subject => {
        debugger
        return subject
      })
      .click()
      .should('have.class', 'is-active')
      .get('table')
      .contains('Hello again')
  })

  it('can display messages tagged as "travel"', () => {
    cy.visit('/')
      .get('a.travel')
      .click()
      .should('have.class', 'is-active')
      .get('table')
      .contains('Important information about your account')
  })
})
