Feature: Testes da API REST Countries

Background:
  * url 'https://restcountries.com/v3.1/'

Scenario: Buscar um país pelo nome
  Given path 'name/brazil'
  When method get
  Then status 200
  And match $[0].name.common == 'Brazil'

Scenario: Buscar um país pelo código alfa-3
  Given path 'alpha/bra'
  When method get
  Then status 200
  And match $[0].cca3 == 'BRA'

Scenario: Buscar um país por código de chamada inexistente
  Given path 'callingcode/9999'
  When method get
  Then status 404

Scenario: Buscar um país com nome inexistente
  Given path 'name/Atlantis'
  When method get
  Then status 404

Scenario: Obter todos os países
  Given path 'all'
  When method get
  Then status 200
  And match each $[*].name contains { common: '#string' }

Scenario: Obter países que falam Português
  Given path 'lang', 'por'
  When method get
  Then status 200
  And match each $[*].languages contains { por: '#string' }