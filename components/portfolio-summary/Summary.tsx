"use client";

import { useFetchUser } from "@/hooks/useFetchUser";
import { formatCurrency } from "@/lib/format";
import React from "react";

export default function Summary() {
  const { userState }: any = useFetchUser();

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
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-3">
        {userState && (
          <>
            {/* bitcoin */}
            <div className="bg-stone-800 p-3 rounded-xl">
              <h3>Bitcoin</h3>
              <p>{userState.wallets.btc}</p>
            </div>
            {/* Ethereum */}
            <div className="bg-stone-800 rounded-xl p-4">
              <h3>Ethereum</h3>
              <p>{userState.wallets.eth}</p>
            </div>
            {/* Tron */}
            <div className="bg-stone-800 rounded-xl p-4">
              <h3>Tron</h3>
              <p>{userState.wallets.trx}</p>
            </div>
            {/* Solana */}
            <div className="bg-stone-800 rounded-xl p-4">
              <h3>Solana</h3>
              <p> {userState.wallets.sol}</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
