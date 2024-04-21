"use client";

import React from "react";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { LogOut, Menu } from "lucide-react";
import { links } from "./SideBar";
import Link from "next/link";

export default function MobileSidebar() {
  return (
    <div className="lg:hidden ">
      <Sheet>
        <SheetTrigger>
          <Menu />
        </SheetTrigger>
        <SheetContent
          side={"left"}
          className="bg-stone-800 text-white border-none px-0 w-[250px]"
        >
          <div className="mt-6">
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
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
