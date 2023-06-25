import React, { createContext, useState } from "react";
export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {

    const initialCards = [
        {
          imageSrc: './img/ovoce/photo1.jpg',
          altText: 'Cherry',
          text: 'Cherry',
          calories: 50
        },
        {
          imageSrc: './img/ovoce/photo2.jpg',
          altText: 'Banana',
          text: 'Banana',
          calories: 100
        },
        {
          imageSrc: './img/ovoce/photo3.jpg',
          altText: 'Apple',
          text: 'Apple',
          calories: 80
        },
        {
          imageSrc: './img/ovoce/photo3.jpg',
          altText: 'Apple',
          text: 'Apple',
          calories: 80
        },
        {
          imageSrc: './img/ovoce/photo3.jpg',
          altText: 'Apple',
          text: 'Apple',
          calories: 80
        },
        {
          imageSrc: './img/ovoce/photo3.jpg',
          altText: 'Apple',
          text: 'Apple',
          calories: 80
        },
        {
          imageSrc: './img/ovoce/photo3.jpg',
          altText: 'Apple',
          text: 'Apple',
          calories: 80
        },
        {
          imageSrc: './img/ovoce/photo3.jpg',
          altText: 'Apple',
          text: 'Apple',
          calories: 80
        },
        {
          imageSrc: './img/ovoce/photo3.jpg',
          altText: 'Apple',
          text: 'Apple',
          calories: 80
        },
      ];

    const [counter, setCounter] = useState(0);
    const [cards, setCards] = useState(initialCards);


return (
    <GlobalContext.Provider
      value={{
        counter,
        setCounter,
        cards,
        setCards
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};