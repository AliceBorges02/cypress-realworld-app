describe('Registro de novo usuário com sucesso', () => {
  it('Deve registrar um novo usuário com informações válidas', () => {
    cy.visit('http://localhost:3000/signin')
    cy.get('[data-test="signup"]').click()
    cy.get('#firstName').type('Teste')
    cy.get('#lastName').type('User')
    cy.get('#username').type('TesteUser')
    cy.get('#password').type('1234')
    cy.get('#confirmPassword').type('1234')
    cy.get('[data-test="signup-submit"]').click()
    cy.get(".SignInForm-paper").contains('Sign in')
  })
})

describe('Login com sucesso', () => {
  it('Deve fazer login com um usuário válido', () => {
    cy.visit('http://localhost:3000/signin')
    cy.get('#username').type('TesteUser')
    cy.get('#password').type('1234')
    cy.get('[data-test="signin-submit"]').click()
    cy.get('[data-test="user-onboarding-dialog-title"]').contains('Get Started with Real World App')
  })
})

describe('Tentar fazer login com credenciais inválidas', () => {
  it('Deve exibir uma mensagem de erro ao fazer login com credenciais inválidas', () => {
    cy.visit('http://localhost:3000/signin')
    cy.get('#username').type('TesteUser1')
    cy.get('#password').type('12345')
    cy.get('[data-test="signin-submit"]').click()
    cy.get('[data-test="signin-error"]').contains('Username or password is invalid')
  })
})

describe('Tentar registrar um novo usuário com informações incompletas', () => {
  it('Deve exibir mensagens de erro ao tentar registrar um novo usuário sem preencher todas as informações obrigatórias', () => {
    cy.visit('http://localhost:3000/signin')
    cy.get('[data-test="signup"]').click()
    cy.get('#firstName').type('Teste2')
    cy.get('#lastName').type('User2')
    cy.get('#username').type('TesteUser2')
    cy.get('#password').type('1234')
    cy.get('#confirmPassword').type('123')
    cy.get('#confirmPassword-helper-text').contains('Password does not match')
  })
})