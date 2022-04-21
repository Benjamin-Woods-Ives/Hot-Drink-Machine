package com.example.demo.drinks;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;;
import java.util.List;

@Configuration
public class DrinkConfig {

    //Maps objects to a table within a database
    @Bean
    public CommandLineRunner commandLineRunner(DrinkRepository repository){
        return args -> {
            Drink lemonTea = new Drink("Lemon Tea", "{\"instructions\": [\"Boiling water\", \"Steeping the water into the tea\", \"Pouring tea into cup\"], \"optional\":[\"lemon\"]}");
            Drink coffee = new Drink("Coffee", "{\"instructions\": [\"Boiling water\", \"Brewing coffee grounds \", \"Pouring coffee into cup\"], \"optional\":[\"milk\", \"sugar\"]}");
            Drink hotChocolate = new Drink("Hot Chocolate", "{\"instructions\": [\"Boiling water\", \"Adding hot chocolate powder\", \"Pouring hot chocolate into cup\"], \"optional\":[]}");
            repository.saveAll(List.of(hotChocolate, lemonTea, coffee));
        };
    }
}