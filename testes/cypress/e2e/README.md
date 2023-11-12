
#  Teste de UI (User Interface) com cypress💻

Utilizando todo conhecimento obtido durante as aulas, desenvolva nomínimo 6 casos de teste para algumwebsiteda sua escolha (Pelo menos 1 caso devesernegativo). 

Atente-se para as seguintes informações:

1. Recomenda-sea utilização da ferramenta cypress.

2. Nãoé permitido utilizar oswebsitesjá testados durante as aulas ou presentesno repositório da disciplina (globalsqa e testpages).

3. O código deve ser capaz de gerar o relatório final de testes. O relatório pode seromochawesomeou algum outro que forneça as informações relevantes para oteste.

4. O exercício deve ser entregue viaGitHub. Com umREADMEadequado queforneça informações relevantes (Ex: Como executar o projeto e obter o relatóriode testes).

### Projeto Desenvolvido
- Desenvolvido um pacote de testes para o site da Escola Técnica de Eletrônica Francisco Moreira da Costa ```ETE FMC```, com isso, os testes abordados foram 
    ```
    ✅  Barra de pesquisa
    ✅  Tutorial para baixar app de notas
    ✅  Cadastrar empresa
    ✅  Cadastrar vaga incorreta
    ✅  Navegação para a página de informações
    ✅  Navegação para a página de contato
    ```

### Execução dos testes 🧑‍💻git 
- Após clonar o repositório, pelo terminal, abra a pasta "Testes" e execute o comando a seguir: 
    ```
    ./node_modules/.bin/cypress open
    ```
- Após abrir o cypress com o comando acima, execute os teste com o comando abaixo:
    ```
    ./node_modules/.bin/cypress run --spec 'cypress/e2e/TesteUI.cy.js/'
    ```

- Após a execucao dos testes, o relatório ficará salvo na pasta: 
    ```
    cypress/reports
    ```
    Basta arrastar o arquivo html no navegador para visualiza-lo

### Feito por 🔎
```
Pedro Guilherme Fernandes Oliveira - GES - 244
Gabriel Filhagosa Guimarães - GES - 126
```



