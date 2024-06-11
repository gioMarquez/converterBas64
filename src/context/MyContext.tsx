import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define the interface for the context
interface MyContextType {
  value: string | null;
  setValue: React.Dispatch<React.SetStateAction<string | null>>;
}

// Define the context with the type and an initial value
const MyContext = createContext<MyContextType | undefined>(undefined);

// Define the props of the provider
interface MyProviderProps {
  children: ReactNode;
}

// Define the provider of the context
const MyProvider: React.FC<MyProviderProps> = ({ children }) => {
  const [value, setValue] = useState<string | null>(null);

  return (
    <MyContext.Provider value={{ value, setValue }}>
      {children}
    </MyContext.Provider>
  );
};

// Custom hook to ensure context is available
const useMyContextSafe = (): MyContextType => {
  const context = useContext(MyContext);
  if (!context) {
    throw new Error("useMyContextSafe must be used within a MyProvider");
  }
  return context;
};

export { MyProvider, useMyContextSafe };
