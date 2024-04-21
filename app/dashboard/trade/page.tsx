"use client";

import Chart from "@/components/trade/TradingChart";
import TradingConsole from "@/components/trade/Console";
import React from "react";
import TradingChart from "@/components/trade/TradingChart";
import TradingProvider from "@/context/TradingContext";
import OrderBook from "@/components/trade/OrderBook";

export default function TradingPage() {
  return (
    <TradingProvider>
      <div className="p-3">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {/* chart */}
          <TradingChart />
          {/* sell and put */}
          <TradingConsole />
        </div>
        {/* Order books */}
        <div>
          <OrderBook />
        </div>
      </div>
    </TradingProvider>
  );
}
