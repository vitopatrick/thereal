import { useFetchUser } from "@/hooks/useFetchUser";
import { Bell, Cog } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <header className="p-4">
      <div className="flex justify-between">
        {/* name */}
        <div className="flex gap-2 items-center">
          <div className="bg-stone-400 p-4 rounded-full h-[40px] w-[40px] flex items-center justify-center">
            JB
          </div>
          <p>James Brown</p>
        </div>
        {/* notification & settings */}
        <div className="flex gap-5">
          <Link href="/notification">
            <Bell />
          </Link>
          <Link href="/settings">
            <Cog />
          </Link>
        </div>
      </div>
    </header>
  );
}
