"use client"
import React, { createContext, useContext, useState } from 'react';

interface AppContextProps {
  suggestions: string[];
  addSuggestion: (pokemon: string) => void;
  clearSuggestion: () => void;
  selectedSuggestion: number;
  setSelectedSuggestion: (value: number) => void;
}

const AppContext = createContext<AppContextProps | undefined>(undefined);

interface AppProviderProps {
  children: React.ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [selectedSuggestion, setSelectedSuggestion] = useState<number>(0);

  const addSuggestion = (pokemon: string) => {
    setSuggestions((prevSuggestions) => [...prevSuggestions, pokemon]);
  };

  const clearSuggestion = () => {
    setSuggestions([])
  }


  return (
    <AppContext.Provider value={{ suggestions, addSuggestion, clearSuggestion, selectedSuggestion, setSelectedSuggestion }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};
