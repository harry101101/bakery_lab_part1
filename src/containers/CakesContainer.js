import { useState } from "react";

const CakesContainer = () => {
    
    const cakes = [
        // Victora Sponge
    {
        cakeName: "Victoria Sponge",
        ingredients: [
            "eggs",
            "butter",
            "sugar",
            "self-raising flour",
            "baking powder",
            "milk"
        ],
        price: 5,
        rating: 5
    },

    // Tea Loaf
    {
        cakeName: "Tea Loaf",
        ingredients: [
            "eggs",
            "oil",
            "dried fruit",
            "sugar",
            "self-raising flour",
            "strong tea",
        ],
        price: 2,
        rating: 3
    },

    // Carrot Cake
    {
        cakeName: "Carrot Cake",
        ingredients: [
            "carrots",
            "walnuts",
            "oil",
            "cream cheese",
            "flour",
            "sugar",
        ],
        price: 8,
        rating: 5
    }]

    return(
    <section>
        {
            cakes.map((cake, index) => {
                return(
                    <div key={index}>
                        <h3>{cake.cakeName}</h3>
                        <ul>
                            {cake.ingredients.map((ingredient, index) => {
                                return(
                                    <li key={index}>{ingredient}</li>
                                )
                            })}
                        </ul>
                    </div>
                )
            })
        }
    </section>)


}
export default CakesContainer;