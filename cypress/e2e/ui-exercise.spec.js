describe('UI Exercise', () => {
  it('can display messages tagged as "work"', () => {
    cy.visit('/')
  })

  it('can display messages tagged as "travel"', () => {
    cy.visit('/').get('a.travel')
  })
})

// findBy
// findAllBy
// queryBy
// queryAllBy
