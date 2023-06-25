import React, { useState, useContext } from "react";
import "../styles/CalculateForm.css";
import "../styles/App.css";
import Card from "@mui/material/Card";
import { GlobalContext } from "../context/GlobalContext";

const CardItem = ({ imageSrc, altText, text, calories }) => {
  const { counter, setCounter } = useContext(GlobalContext);

  const incrementCounter = () => {
    setCounter(counter + 1);
  };
  return (
    <Card sx={{ maxWidth: 345 }}>
      <img
        src={imageSrc}
        alt={altText}
        style={{
          width: "100%",
          height: "80px",
          objectFit: "cover",
          objectPosition: "center",
        }}
      />
      <p style={{ textAlign: "center" }}>{text}</p>
      <div className="buttonText">
        <button className="button" onClick={incrementCounter}>
          +
        </button>
        <p style={{ display: "inline", marginLeft: "10px" }}>{counter}/ks</p>
      </div>
      <button className="buttonAdd">Přidat do seznamu</button>
    </Card>
  );
};

export default CardItem;
