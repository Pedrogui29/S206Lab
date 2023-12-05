Feature: Testando API Pokemon.

Background: Executa antes de cada teste
    * def url_base = 'https://pokeapi.co/api/v2/'

Scenario: Testando retorno .
        Given url 'https://pokeapi.co/api/v2/pokemon/pikachu'
        When method get
        Then status 200

Scenario: Testando retorno people/1/ com informações inválidas.
        Given url 'https://pokeapi.co/api/v2/pokemon/chocolate'
        When method get
        Then status 404
        
Scenario: Testando retorno pikachu e verificando o JSON.
    Given url url_base
    And path '/pokemon/pikachu'
    When method get
    Then status 200
    And match response.name == "pikachu"
    And match response.id == 25


Scenario: Testando retorno pokemon Rede entrando em um dos elementos do array de idiomas e testando retorno JSON
    Given url url_base
    And path '/version/1/'
    When method get
    Then status 200
    And def idioma = $.names[5].language.url
    And print idioma
    And url idioma
    When method get
    Then status 200
    And match response.name == "es"
    And match response.id == 7






Scenario: Testando informações do Pokémon Charmander.
    Given url url_base
    And path '/pokemon/charmander'
    When method get
    Then status 200
    And match response.name == "charmander"
    And match response.types[0].slot == 1

Scenario: Testando habilidades de um Pokémon específico.
    Given url url_base
    And path '/pokemon/25' 
    When method get
    Then status 200
    And match response.abilities[*].ability.name contains "static"

Scenario: Testando uma habilidade específica por ID.
    Given url url_base
    And path '/ability/34'  
    When method get
    Then status 200
    And match response.name == "chlorophyll"
    And match response.effect_entries[0].short_effect contains "Sonnenlicht"

Scenario: Testando a lista de tipos de Pokémon.
    Given url url_base
    And path '/type'
    When method get
    Then status 200
    And match response.results[0].name == "normal"
    And match response.results[1].name == "fighting"

Scenario: Testando a lista de movimentos aprendidos por um Pokémon.
    Given url url_base
    And path '/pokemon/6'  
    When method get
    Then status 200
    And def move_url = response.moves[0].move.url
    And url move_url
    When method get
    Then status 200
    And match response.name == "mega-punch"
    And match response.type.name == "normal"

Scenario: Testando retorno people/1/ com informações inválidas.
    Given url '/pokemon/QualidadeSoftware'
    When method get
    Then status 404
    