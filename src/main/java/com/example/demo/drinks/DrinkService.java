package com.example.demo.drinks;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class DrinkService {

    private final DrinkRepository drinkRepository;

    //using dependency injection in the constructor
    @Autowired
    public DrinkService(DrinkRepository drinkRepository){
        this.drinkRepository = drinkRepository;
    }

    //returns all drinks
    public List<Drink> getDrinks() {
        return drinkRepository.findAll();
    }

    //returns instructions based on drink id
    public String getInstructions(Long id){
        boolean exists = drinkRepository.existsById(id);
        if (exists){
            return drinkRepository.findById(id).get().getInstructions();
        }
        return "No id found";
        }
}
