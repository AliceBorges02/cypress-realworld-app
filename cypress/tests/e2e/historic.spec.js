describe('Visualizar histórico de transações com sucesso', () => {
  it('Deve exibir o histórico de transações de um usuário corretamente', () => {
    cy.visit('http://localhost:3000/signin')
    cy.get('#username').type('TesteUser')
    cy.get('#password').type('1234')
    cy.get('[data-test="signin-submit"]').click()
    cy.get('[data-test="nav-personal-tab"]').click()
    cy.get('[data-test="transaction-amount-y1_njsKsb"]').contains('-$20.00')
  })
})

describe('Tentar visualizar o histórico de transações sem transações anteriores', () => {
  it('Deve exibir uma mensagem indicando que o usuário não possui transações anteriores', () => {
    cy.visit('http://localhost:3000/signin')
    cy.get('#username').type('TesteUser')
    cy.get('#password').type('1234')
    cy.get('[data-test="signin-submit"]').click()
    cy.get('[data-test="nav-contacts-tab"]').click()
    cy.get('[data-test="empty-list-header"] > .MuiTypography-root').contains('No Transactions')
  })
})