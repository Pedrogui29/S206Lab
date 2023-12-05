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
