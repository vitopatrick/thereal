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
      <h3 className="text-lg lg:text-lg">Portfolio Summary</h3>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-4">
        {userState && (
          <>
            <div className="bg-stone-800 p-4 rounded-2xl space-y-2">
              <h4 className="text-neutral-400">Main Account</h4>
              <p className="text-xl">
                {formatCurrency(userState.main_balance, 3)}
              </p>
            </div>
            <div className="bg-stone-800 p-4 rounded-2xl space-y-2">
              <h4 className="text-neutral-400">Staking Account</h4>
              <p className="text-xl">
                {formatCurrency(userState.staking_balance, 3)}
              </p>
            </div>
            <div className="bg-stone-800 p-4 rounded-2xl space-y-2">
              <h4 className="text-neutral-400">Profit</h4>
              <p className="text-xl">{formatCurrency(userState.profit, 3)}</p>
            </div>
          </>
        )}
      </div>
      <h3 className="text-lg lg:text-lg mt-8">Wallets</h3>
      {/* container */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mt-6">
        {wallets && (
          <>
            {/* bitcoin */}
            <div className="bg-stone-800 p-3 rounded-xl flex gap-3 items-center">
              <img
                src="https://cryptologos.cc/logos/bitcoin-btc-logo.svg?v=031"
                alt="logo"
                className="lg:w-[15%] w-[8%]"
              />

              <div>
                <h3>Bitcoin</h3>
                <p>{wallets?.btc}</p>
              </div>
            </div>
            {/* Ethereum */}
            <div className="bg-stone-800 rounded-xl p-4 flex gap-3 items-center">
              <img
                src="/eth.png"
                alt="logo"
                className="lg:w-[15%] w-[8%] rounded-full"
              />
              <div>
                <h3>Ethereum</h3>
                <p>{wallets?.eth}</p>
              </div>
            </div>
            {/* Tron */}
            <div className="bg-stone-800 rounded-xl p-4 flex items-center gap-3">
              <img
                src="/tron.png"
                alt="logo"
                className="lg:w-[15%] w-[8%] rounded-full"
              />
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
                className="lg:w-[15%] w-[8%] rounded-full"
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
