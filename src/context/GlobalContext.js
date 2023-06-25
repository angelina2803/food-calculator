import React, { createContext, useState } from "react";
export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {


   
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