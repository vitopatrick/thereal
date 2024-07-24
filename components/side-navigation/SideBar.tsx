"use client";

import {
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
import { signOut } from "firebase/auth";
import { auth } from "@/config/firebase";
import { useRouter } from "next/navigation";

export const links = [
  {
    id: 1,
    name: "Wallet",
    link: "/dashboard",
    icon: <Wallet />,
  },
  {
    id: 3,
    name: "User Profile",
    link: "/dashboard/settings",
    icon: <Cog />,
  },
  {
    id: 4,
    name: "Trading",
    link: "/dashboard/trade",
    icon: <CandlestickChart />,
  },
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
    name: "Deposit",
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
  const router = useRouter();

  const logOut = (e: any) => {
    e.preventDefault();
    signOut(auth);

    localStorage.removeItem("TOKEN");

    router.push("/");
  };

  return (
    <aside className="w-[220px] bg-zinc-900 hidden text-white lg:block">
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
          onClick={logOut}
          className="flex gap-2 p-3 hover:bg-stone-950 transition-all ease-in"
        >
          <LogOut />
          Log Out
        </Link>
      </div>
    </aside>
  );
}
