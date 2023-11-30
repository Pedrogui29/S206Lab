describe('Criando cenário de teste para o site XYZ', () => {
  it.skip("Caso de teste: Cadastrar login", () => {
    criarLogin(false);
  });

  it.skip("Caso de teste: Deletando usuário criado com sucesso", () => {
    criarLogin(true);
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

