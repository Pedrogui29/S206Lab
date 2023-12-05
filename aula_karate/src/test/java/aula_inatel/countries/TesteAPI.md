
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

# Exercicio 2 

1. Quantas suítes de testes você desenvolveu?

Desenvolvi uma suíte de testes que inclui seis cenários diferentes. Cada cenário testa uma funcionalidade específica da API REST Countries.

2. Os testes desenvolvidos são manuais ou automatizados?

Os testes desenvolvidos são automatizados. Eles foram escritos usando a ferramenta Karate DSL, que é uma ferramenta específica para automação de testes de APIs.

3. Onde os testes se localizam na pirâmide apresentada?

Na pirâmide de testes, estes testes se localizam na base, que é o nível de testes de unidade e integração. Como são testes de API, eles se enquadram mais especificamente nos testes de integração, verificando como diferentes partes do sistema (neste caso, as diferentes funcionalidades da API) trabalham juntas.


4. Os testes desenvolvidos são funcionais ou não-funcionais?

Os testes desenvolvidos são funcionais. Eles verificam se a API está funcionando conforme esperado, testando as funcionalidades específicas como a busca de informações de países, validando respostas e status de retorno.

5. Alguns dos testes desenvolvidos são testes Fim-a-Fim (End-To-End)?

Não, os testes desenvolvidos não são testes fim-a-fim. Eles são testes de API, focados em validar funcionalidades específicas da REST Countries API, e não o fluxo completo de um processo de ponta a ponta que envolveria a interação do usuário com uma interface.

6. O que se deve fazer para que os testes desenvolvidos funcionem em modo regressão?

Para que os testes funcionem em modo de regressão, eles devem ser integrados a um pipeline de CI/CD (Integração Contínua / Entrega Contínua), de modo que sejam executados automaticamente sempre que houver mudanças no código ou na API. Isso assegura que as funcionalidades continuem funcionando conforme esperado após atualizações ou mudanças. Também é importante garantir que os testes sejam mantidos atualizados e refletindo as funcionalidades atuais da API.


### Feito por 🔎
```
Pedro Guilherme Fernandes Oliveira - GES - 244
Gabriel Filhagosa Guimarães - GES - 126
```



