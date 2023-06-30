describe('Home page', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('displays the us airports', () => {
    cy.contains('h1', 'US Airports')
  })
})
