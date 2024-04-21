import Link from "next/link";
import React from "react";

const links = [
  {
    href: "/terms",
    name: "Terms & Condition",
  },
  {
    href: "/terms",
    name: "Privacy & Policy",
  },
  {
    href: "/login",
    name: "Manage Membership",
  },
];

export default function Footer() {
  return (
    <footer className="bg-blue-900/10 py-8 mt-[10%] px-4">
      {/* container */}
      <div className="flex p-4 flex-col lg:flex-row">
        <div className="flex-1">
          {/* top links*/}
          <div className="space-x-6">
            {links.map((link) => (
              <Link href={link.href} className="font-light" key={link.href}>
                {link.name}
              </Link>
            ))}
          </div>
          {/* bottom */}
          <div className="mt-6  space-y-4">
            <p className="text-neutral-500">
              Everything taught within The Real World is for education purposes
              only.
              <br /> It is up to each student to implement and do the work.
            </p>
            <p className="text-neutral-500 block">
              The Real World team doesn’t guarantee any profits or financial
              success.
            </p>
          </div>
        </div>
        <div className="space-y-5">
          <div>
            <h3 className="text-neutral-400 text-sm">SUPPORT</h3>
            <p>support@therealwrld.com</p>
          </div>

          <Link
            href="/login"
            className="bg-blue-900/20 block w-full p-3 font-bold rounded-md text-center"
          >
            Log In
          </Link>
        </div>
      </div>
    </footer>
  );
}
