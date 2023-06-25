import React, { useState, useContext } from "react";
import "../styles/CalculateForm.css";
import "../styles/App.css";
import Card from "@mui/material/Card";
import { GlobalContext } from "../context/GlobalContext";
import CardItem from "./CardItem";

const CardList = () => {
  const { cards, setCards } = useContext(GlobalContext);

  return (
    <div className="conteinerCard">
      <h1>Caterogie</h1>
      <div className="cardGrid">
        {cards.map((card, index) => (
          <CardItem
            key={index}
            imageSrc={card.imageSrc}
            altText={card.altText}
            text={card.text}
          />
        ))}
      </div>
    </div>
  );
};

export default CardList;
