import React from "react";
import CoffeeCard from "./CoffeeCard";
import { Grid } from "@material-ui/core";
import coffeeMakerList from "./constants"; 

const Content = () => {

    const getcoffeeMakerCard = (coffeeMakerObj) => {
        // const { title, price, description, avatarUrl, imageUrl } = coffeeMakerObj
        return (
            <Grid item xs={12} sm={4}>
               <CoffeeCard {...coffeeMakerObj} /> 
            </Grid>
            
        );
    };

    return (
        // in material ui, you have a default theme, and spacing is defined in that theme.
        // spacing is defined as a value of 8px.
        //hence spacing={2} means 2*8px = 16px.
        <Grid container spacing={4}>
            {coffeeMakerList.map(coffeeMakerObj => getcoffeeMakerCard(coffeeMakerObj))}

        </Grid>
    );

};

export default Content;