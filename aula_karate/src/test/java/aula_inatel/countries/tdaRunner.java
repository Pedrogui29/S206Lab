package aula_inatel.countries;

import com.intuit.karate.junit5.Karate;

class tdaRunner {
    
    @Karate.Test
    Karate testTdaRunner() {
        return Karate.run("countries").relativeTo(getClass());
    }    

}