package aula_inatel.pokemonProva;

import com.intuit.karate.junit5.Karate;

class PokeProvaRunner {
    
    @Karate.Test
    Karate testPokemon() {
        return Karate.run("pokemonProva").relativeTo(getClass());
    }      

}