describe('Criando cenario de teste para o site ETE FMC', () =>{

    it("Caso de teste: Barra de pesquisa", ()=>{
      cy.visit('https://www.etefmc.com.br/admissaonovosalunos')
      cy.get('.form-inline > .input-group > #q').type('projete')
      cy.get('.form-inline > .input-group > .input-group-prepend > .btn').click()
      cy.get('#resInfo-0').should('contain.text', 'resultados')
    })

    it("Caso de teste: Tutorial para baixar app de notas", ()=>{
        cy.visit('https://www.etefmc.com.br/admissaonovosalunos')
        cy.get('.text-right > .btn-group > .btn-success').click()
        cy.get(':nth-child(3) > [style="text-align: center;"] > a > .img-fluid').click()
        cy.get('h3 > span').should('have.text', 'App EduCONNECT')
        
      })

      it("Caso de teste: Cadastrar Empresa", ()=>{
      criarEmpresa()

      })  
    
     it('Caso de teste: Cadastrar Vaga incorreta', ()=>{
        criarEmpresa()
        cy.get('#VagaCadastroAjaxForm > .submit > .btn').click()
        cy.get('.col-md-12 > .error-message').should('have.text', 'Campo obrigatório!')
     })

     it('Caso de teste: Navegação para a página de informações', () => {
        cy.visit('https://www.etefmc.com.br/admissaonovosalunos');
        cy.get('.col-md-12 > .navbar > .navbar-toggler > .navbar-toggler-icon').click()
        cy.get('#menu > .navbar-nav > :nth-child(3) > .nav-link').click()
        cy.url().should('include', '/informacoes');
      
      });
    
      it('Caso de teste: Navegação para a página de contato', () => {
        cy.visit('https://www.etefmc.com.br/admissaonovosalunos');
        cy.get('.col-md-12 > .navbar > .navbar-toggler > .navbar-toggler-icon').click()
        cy.get(':nth-child(13) > .nav-link').click()
        cy.url().should('include', 'faleconosco');
        
      });

})  

function criarEmpresa(){
    let horas = new Date().getHours().toString()
    let minutos = new Date().getMinutes().toString()
    let seg = new Date().getSeconds().toString()
    let nomeEmpresa = horas+ minutos+ seg+ 'EmrpesaFicticia'
    let email = horas + minutos + seg + 'qualidadeSite@gmail.com'
    let empresaContato = 'Sr. Teste Automatizado'
    let empresaTelefone = horas + minutos + seg
    let empresaEndereco = 'Rua de Teste automatizados, '+ minutos + seg
  
    cy.visit('https://www.etefmc.com.br/admissaonovosalunos')
    cy.get('.col-md-12 > .navbar > .navbar-toggler').click()
    cy.get(':nth-child(9) > .nav-link').click()
    cy.get('[href="https://www.etefmc.com.br/vagas/cadastro"]').click()
    cy.get('#EmpresaNome').type(nomeEmpresa)
    cy.get('#EmpresaCep').type('37540000')
    cy.get('#EmpresaContato').type(empresaContato)
    cy.get('#EmpresaEmail1').type(email)
    cy.get('#EmpresaTelefone1').type(empresaTelefone)
    cy.get('#EmpresaEndereco').type(empresaEndereco)
    cy.get('#EmpresaBairro').type('BairoDosTestes')
    cy.get('.submit > .btn').click()
    cy.get('.alert-success > h4').should('contain.text', 'Sucesso!')
  
  }
