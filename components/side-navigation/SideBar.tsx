"use client";

import {
  Activity,
  ArrowRightLeft,
  BadgeDollarSign,
  CandlestickChart,
  Cog,
  Diff,
  LogOut,
  Nfc,
  Wallet,
} from "lucide-react";
import Link from "next/link";

export const links = [
  {
    id: 1,
    name: "Activity",
    link: "/dashboard",
    icon: <Activity />,
  },
  // {
  //   id: 2,
  //   name: "My Wallet",
  //   link: "/wallet",
  //   icon: <Wallet />,
  // },
  // {
  //   id: 3,
  //   name: "Settings",
  //   link: "/settings",
  //   icon: <Cog />,
  // },
  // {
  //   id: 4,
  //   name: "Trading",
  //   link: "/trade",
  //   icon: <CandlestickChart />,
  // },
  {
    id: 5,
    name: "Staking",
    link: "/dashboard/staking",
    icon: <Diff />,
  },
  {
    id: 6,
    name: "Market",
    link: "/dashboard/market",
    icon: <BadgeDollarSign />,
  },
  {
    id: 7,
    name: "Payment",
    link: "/dashboard/deposit",
    icon: <Nfc />,
  },
  {
    id: 8,
    name: "Withdraw",
    link: "/dashboard/withdraw",
    icon: <ArrowRightLeft />,
  },
];

export default function SideBar() {
  return (
    <aside className="w-[220px] bg-stone-800 hidden text-white lg:block">
      <div className="flex flex-col gap-4">
        {links &&
          links.map((link) => (
            <Link
              href={link.link}
              key={link.id}
              className="flex gap-2 p-3 hover:bg-stone-950 transition-all ease-in"
            >
              {link.icon}
              {link.name}
            </Link>
          ))}
        <Link
          href="#"
          className="flex gap-2 p-3 hover:bg-stone-950 transition-all ease-in"
        >
          <LogOut />
          Log Out
        </Link>
      </div>
    </aside>
  );
}
