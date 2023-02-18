import React, { createContext, useContext, useState } from "react";

export const CharacterContext = createContext();

export const CharProvider = ({ children }) => {
  const [character, setCharacter] = useState(null);

  return (
    <CharacterContext.Provider value={{ character, setCharacter }}>
      {children}
    </CharacterContext.Provider>
  );
};

export const useCharacter = () => useContext(CharacterContext);
