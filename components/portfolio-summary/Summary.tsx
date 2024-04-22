"use client";

import { useFetchUser } from "@/hooks/useFetchUser";
import { formatCurrency } from "@/lib/format";
import React from "react";

export default function Summary() {
  const { userState }: any = useFetchUser();
  let wallets = userState?.wallets;

  return (
    <div className="py-4 space-y-2">
      {/* header */}
      <h3 className="text-xl lg:text-2xl">Portfoilo Summary</h3>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4">
        {userState && (
          <>
            <div className="bg-stone-800 p-4 rounded-2xl space-y-2">
              <h4 className="text-neutral-200">Balance</h4>
              <p className="text-2xl">{formatCurrency(userState.balance, 3)}</p>
            </div>
            <div className="bg-stone-800 p-4 rounded-2xl space-y-2">
              <h4 className="text-neutral-200">Profit</h4>
              <p className="text-2xl">{formatCurrency(userState.profit, 3)}</p>
            </div>
          </>
        )}
      </div>
      <h3 className="text-xl lg:text-2xl mt-8">Wallets</h3>
      {/* container */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
        {wallets && (
          <>
            {/* bitcoin */}
            <div className="bg-stone-800 p-3 rounded-xl flex gap-3 items-center">
              <img
                src="https://cryptologos.cc/logos/bitcoin-btc-logo.svg?v=031"
                alt="logo"
                className="w-[15%]"
              />

              <div>
                <h3>Bitcoin</h3>
                <p>{wallets?.btc}</p>
              </div>
            </div>
            {/* Ethereum */}
            <div className="bg-stone-800 rounded-xl p-4 flex gap-3 items-center">
              <img src="/eth.png" alt="logo" className="w-[15%]" />
              <div>
                <h3>Ethereum</h3>
                <p>{wallets?.eth}</p>
              </div>
            </div>
            {/* Tron */}
            <div className="bg-stone-800 rounded-xl p-4 flex items-center gap-3">
              <img src="/tron.png" alt="logo" className="w-[15%]" />
              <div>
                <h3>Tron</h3>
                <p>{wallets?.trx}</p>
              </div>
            </div>
            {/* USDT */}
            <div className="bg-stone-800 rounded-xl p-4 flex items-center gap-3">
              <img
                src="https://cryptologos.cc/logos/tether-usdt-logo.png?v=031"
                alt="logo"
                className="w-[15%] rounded-full"
              />
              <div>
                <h3>USDT</h3>
                <p> {wallets?.usdt}</p>
              </div>
            </div>
          </>
        )}
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-3"></div>
    </div>
  );
}
