"use client";

import Activies from "@/components/activities/Activies";
import WalletBalances from "@/components/wallet-balances/WalletBalances";
import { useFetchUser } from "@/hooks/useFetchUser";

export default function DashboardPage() {
  return (
    <div className="p-5 grid grid-cols-1 lg:grid-cols-2 gap-4">
      {/* Balance */}
      <div>balance</div>
      {/* wallet */}
      <WalletBalances />
      {/* chart */}
      <div>chart</div>
      {/* recent activities */}
      <Activies />
    </div>
  );
}
