
#  Teste de UI (User Interface) com Karate💻

Utilizando todo conhecimento obtido durante as aulas, desenvolva nomínimo 6 casos de teste para algumwebsiteda sua escolha (Pelo menos 1 caso devesernegativo). 

Atente-se para as seguintes informações:

1. Recomenda-sea utilização da ferramenta Karate DSL.

2. Não é permitido utilizar os websites já testados durante as aulas ou presentes no repositório da disciplina (globalsqa e testpages).

3. O exercício deve ser entregue viaGitHub. Com um README adequado que forneça informações relevantes (Ex: Como executar o projeto e obter o relatóriode testes).

### Projeto Desenvolvido
- Desenvolvido um pacote de testes para a API ```REST Countrie```, com isso, os testes abordados foram 
    ```
    ✅  Buscar um país pelo nome
    ✅  Buscar um país pelo código alfa-3
    ✅  Buscar um país por código de chamada inexistente
    ✅  Buscar um país com nome inexistente
    ✅  Obter todos os países
    ✅  Obter países que falam Português
    ```

### Execução dos testes 🧑‍💻git 
- Após clonar o repositório, pelo terminal, abra a pasta "aula_karate" e execute o comando a seguir: 
    ```
    mvn test -Dtest=tdaRunner
    ```
- Após a execucao dos testes, o relatório ficará salvo na pasta: 
    ```
    target/karate-reports
    ```
    Basta arrastar o arquivo html no navegador para visualiza-lo

### Feito por 🔎
```
Pedro Guilherme Fernandes Oliveira - GES - 244
Gabriel Filhagosa Guimarães - GES - 126
```



