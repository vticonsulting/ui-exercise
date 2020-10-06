describe('UI Exercise', () => {
  it('can display messages tagged as "work"', () => {
    cy.visit('/')
      .get('nav.px-2 > .space-y-1 > .nuxt-link-exact-active')
      .then(subject => {
        // debugger
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

// findBy
// findAllBy
// queryBy
// queryAllBy
