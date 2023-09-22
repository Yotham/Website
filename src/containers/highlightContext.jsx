import React, { createContext, useState, useContext } from 'react';

export const HighlightContext = createContext();

export const HighlightProvider = ({ children }) => {
  const [isContactClicked, setIsContactClicked] = useState(false);

  return (
    <HighlightContext.Provider value={{ isContactClicked, setIsContactClicked }}>
      {children}
    </HighlightContext.Provider>
  );
};
