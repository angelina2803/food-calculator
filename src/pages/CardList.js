import React, { useState, useContext } from "react";
import "../styles/CalculateForm.css";
import "../styles/App.css";
import Card from "@mui/material/Card";
import { GlobalContext } from "../context/GlobalContext";

const CardList = () => {
    const {counter, setCounter} = useContext(GlobalContext);
    const {cards, setCards} = useContext(GlobalContext);
  
    const incrementCounter = () => {
      setCounter(counter + 1);
    };
  
    return (
      <div className="conteinerCard">
        <h1>Caterogie</h1>
        <div className="cardGrid">
        {cards.map((card, index) => (
          <Card key={index} sx={{ maxWidth: 345 }}>
            <img src={card.imageSrc} alt={card.altText} />
            <p>{card.text}</p>
            <button onClick={incrementCounter}>+</button>
            <p>{counter}</p>
            <button>Přidat do seznamu</button>
            
          </Card>
        ))}
        </div>
      </div>
    );
  };

export default CardList;