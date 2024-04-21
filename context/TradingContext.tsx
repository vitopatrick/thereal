import { createContext, useState } from "react";

export const TradingContext = createContext<any | null>(null);

function TradingProvider({ children }: any) {
  // chart States
  const [selectedCoin, setSelectedCoin] = useState("bitcoin");

  return (
    <TradingContext.Provider value={{ selectedCoin, setSelectedCoin }}>
      {children}
    </TradingContext.Provider>
  );
}

export default TradingProvider;
