package com.example.demo.drinks;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@CrossOrigin("*")
public class DrinkController {
    private final DrinkService drinkService;

    //using dependency injection in the constructor
    @Autowired
    public DrinkController(DrinkService drinkService) {
        this.drinkService = drinkService;
    }


    //returns all drinks
    @GetMapping(path="api/drinks")
    public List<Drink> getDrinks(){
        return drinkService.getDrinks();
    }

    //returns instructions based on provided id
    @RequestMapping(path= "api/instructions/{drinkId}")
    public String getInstructions(@PathVariable("drinkId") Long id){
        return drinkService.getInstructions(id);
    }
}
