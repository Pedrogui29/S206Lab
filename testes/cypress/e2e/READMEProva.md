
#  Teste de UI (User Interface) com cypress💻

Utilizando todo conhecimento obtido durante as aulas, desenvolva no mínimo 3 casosde teste para algumwebsiteda sua escolha observando a lista de exceções (Pelo menos 1 caso devesernegativo). Atente-se para as seguintes informações:

1. Obrigatórioa utilização da ferramenta cypress.

2. Nãoé permitido utilizar oswebsitesjá testados durante as aulas ou presentes no repositórioda disciplina (Observar as lista de exceções).

3. Deve conter obrigatoriamente uma função.4. O código deve ser capaz de gerar o relatório final de testes. O relatório pode ser omochawe-someou algum outro que forneça as informações relevantes para o teste.

4. O exercício deve ser entregue viaGitHub. Com umREADMEadequado queforneça informações relevantes (Ex: Como executar o projeto e obter o relatóriode testes).

### Projeto Desenvolvido
- Desenvolvido um pacote de testes para o site  ```BankingProject XYZ```, com isso, os testes abordados foram 
    ```
    ✅  Criar login
    ✅  Deletando usuário criado com sucesso
    ✅  Fazendo login com user do site
    ✅  Sacando valor insuficiente
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



