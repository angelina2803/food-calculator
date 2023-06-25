import React, { useState, useContext } from "react";
import "../styles/CalculateForm.css";
import "../styles/App.css";
import Card from "@mui/material/Card";
import { GlobalContext } from "../context/GlobalContext";
import CardItem from "./CardItem";

const CardList = () => {
  const initialCards = [
    {
      imageSrc:
        "https://images.pexels.com/photos/4772856/pexels-photo-4772856.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load",
      altText: "Cherry",
      text: "Cherry",
      calories: 50,
    },
    {
      imageSrc:
        "https://images.pexels.com/photos/7105220/pexels-photo-7105220.jpeg?auto=compress&cs=tinysrgb&w=1200",
      altText: "Banana",
      text: "Banana",
      calories: 100,
    },
    {
      imageSrc:
        "https://images.pexels.com/photos/3049465/pexels-photo-3049465.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load",
      altText: "Orange",
      text: "Orange",
      calories: 80,
    },
    {
      imageSrc:
        "https://images.pexels.com/photos/4230630/pexels-photo-4230630.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load",
      altText: "Pomegranate",
      text: "Pomegranate",
      calories: 80,
    },
    {
      imageSrc:
        "https://images.pexels.com/photos/6045102/pexels-photo-6045102.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load",
      altText: "Berries",
      text: "Berries",
      calories: 80,
    },
    {
      imageSrc:
        "https://images.pexels.com/photos/7214784/pexels-photo-7214784.jpeg?auto=compress&cs=tinysrgb&w=1200",
      altText: "Apple",
      text: "Apple",
      calories: 80,
    },
    {
      imageSrc:
        "https://images.pexels.com/photos/4772953/pexels-photo-4772953.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      altText: "Melon",
      text: "Melon",
      calories: 80,
    },
    {
      imageSrc:
        "https://images.pexels.com/photos/7636164/pexels-photo-7636164.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load",
      altText: "Pear",
      text: "Pear",
      calories: 80,
    },
    {
      imageSrc:
        "https://images.pexels.com/photos/4033107/pexels-photo-4033107.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load",
      altText: "Lemon",
      text: "Lemon",
      calories: 80,
    },
  ];

  return (
    <div className="conteinerCard">
      <h1>Caterogie</h1>
      <div className="cardGrid">
        {initialCards.map((card, index) => (
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
