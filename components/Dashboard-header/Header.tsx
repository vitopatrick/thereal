// import { useFetchUser } from "@/hooks/useFetchUser";
import { Bell, Cog, Menu } from "lucide-react";
// import Link from "next/link";

export default function Header() {
  // const { userState }: any = useFetchUser();

  return (
    <header className="p-4">
      <div className="flex justify-between">
        {/* name */}
        <div className="flex gap-2 items-center">
          {/* {userState && (
            <div className="bg-stone-400 uppercase p-4 rounded-full h-[40px] w-[40px] flex items-center justify-center">
              {userState?.name.substring(0, 1)}
            </div>
          )}
          {userState && <p>{userState?.name}</p>} */}
        </div>
        {/* notification & settings */}
        {/* <div className="lg:flex gap-5 hidden ">
          <Link href="/notification">
            <Bell />
          </Link>
          <Link href="/settings">
            <Cog />
          </Link>
        </div> */}
        <button className="block lg:hidden">
          <Menu />
        </button>
      </div>
    </header>
  );
}
