import { createContext, useContext, useState } from 'react';

const TourContext = createContext();

export const TourProvider = ({ children }) => {
  const [runTour, setRunTour] = useState(true);
  const [stepIndex, setStepIndex] = useState(0);

  // All tutorial steps in order, across all pages
  const steps = [
    { target: '.submit-button', content: 'Please enter your email.' },
    { target: '.hamburger-icon', content: 'Open the menu here.' },
    { target: '.project-step', content: 'Here’s a sample project.' },
    { target: '.customizer-step', content: 'Start designing!' },
    { target: '.products-step', content: 'Browse what’s available.' }
  ];
  

  return (
    <TourContext.Provider value={{ runTour, setRunTour, stepIndex, setStepIndex, steps }}>
      {children}
    </TourContext.Provider>
  );
};

export const useTour = () => useContext(TourContext);
