import React, { useState, useContext } from "react";
import "../styles/CalculateForm.css";
import "../styles/App.css";
import Card from "@mui/material/Card";
import { GlobalContext } from "../context/GlobalContext";
import CardItem from "./CardItem";
import CalculationForm from "./CalculationForm";

const CardList = () => {
  const { cards, setCards } = useContext(GlobalContext);

  const addToTable = (card) => {
    const updatedCards = [...cards, card];
    setCards(updatedCards);
  };

  return (
    <div className="conteinerCard">
      <h1>Caterogie</h1>
      <div className="conteinerBox">
      <div className="cardGrid">
        {cards.map((card, index) => (
          <CardItem
            key={index}
            imageSrc={card.imageSrc}
            altText={card.altText}
            text={card.text}
            addToTable={addToTable}
          />
        ))}
      </div >
      <div className="calculationForm">
      <CalculationForm data={cards} />
    </div>
    </div>
    </div>
  );
};

export default CardList;
