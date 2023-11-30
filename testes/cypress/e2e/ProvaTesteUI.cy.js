describe('Criando cenário de teste para o site XYZ', () => {
  it.skip("Caso de teste: Cadastrar login", () => {
    criarLogin(false);
  });

  it.skip("Caso de teste: Deletando usuário criado com sucesso", () => {
    criarLogin(true);
  });
  it.skip("Caso de teste: Fazendo login com user do site", () => {
    fazerLogin();
  });

  it("Caso de teste: Sacando valor insuficiente", () => {
    fazerLogin();
    cy.get('[ng-class="btnClass3"]').click()
    cy.get('.form-control').type('200')
    cy.get('form.ng-dirty > .btn').click()
    cy.get('.error').should('have.text', 'Transaction Failed. You can not withdraw amount more than the balance.')

  });

});

function criarLogin(flag) {
  let horas = new Date().getHours().toString();
  let minutos = new Date().getMinutes().toString();
  let seg = new Date().getSeconds().toString();
  let nome = horas + minutos + seg + 'First';
  let sobrenome = horas + minutos + seg + 'Last';
  let postCode = horas + minutos + seg;

  cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/manager');
  cy.wait(8000);
  cy.get('[ng-class="btnClass1"]').click();
  cy.get(':nth-child(1) > .form-control').type(nome);
  cy.get(':nth-child(2) > .form-control').type(sobrenome);
  cy.get(':nth-child(3) > .form-control').type(postCode);
  cy.get('form.ng-dirty > .btn').click();
  cy.wait(2000);
  cy.get('[ng-class="btnClass3"]').click();
  cy.wait(3000);
  cy.get('.marTop').should('contain.text', nome);

  if (flag === true) {
    // Clicando no botão para deletar
    cy.get(':nth-child(6) > :nth-child(5) > button').click();
    cy.get('.marTop').should('not.contain.text', nome);
  }
}
function fazerLogin(){
    cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/customer')
    cy.wait(8000);  
    cy.get('#userSelect').select('Harry Potter')
    cy.get('form.ng-valid > .btn').click()
    cy.get('.fontBig').should('contain.text', 'Harry Potter')
  
  }