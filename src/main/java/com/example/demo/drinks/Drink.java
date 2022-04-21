package com.example.demo.drinks;

import javax.persistence.*;

@Entity
@Table
public class Drink {

    //generates a unique id for the  "id" attribute if no id is passed in constructor
    @Id
    @SequenceGenerator(name = "drink_sequence", sequenceName = "drink_sequence", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "drink_sequence")
    private Long id;
    private String name;
    private String instructions;

    public String getInstructions() {
        return instructions;
    }

    public void setInstructions(String instructions) {
        this.instructions = instructions;
    }

    public Drink() {
    }

    public Drink(Long id, String name, String instructions) {
        this.id = id;
        this.name = name;
        this.instructions = instructions;
    }

    public Drink(String name, String instructions) {
        this.name = name;
        this.instructions = instructions;
    }

    public Long getId() {return id; }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Override
    public String toString() {
        return "Drink{" +
                "id=" + id +
                ", name='" + name +
                '}';
    }
}
