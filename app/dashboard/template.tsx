import type { Metadata } from "next";
import { cn } from "@/lib/utils";
import { outfit } from "@/lib/fonts";
import { Toaster } from "@/components/ui/sonner";
// import SideBar from "@/components/side-navigation/SideBar";
import Header from "@/components/Dashboard-header/Header";
import UserProvider from "@/context/UserAuthContext";
import SideBar from "@/components/side-navigation/SideBar";

export const metadata: Metadata = {
  title: "The Real World",
  description: "Acticvity Page",
  authors: [
    {
      name: "The Real World Inc",
    },
  ],
  keywords: ["real world", "Investing", "Trading", "Assets"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <UserProvider>
        <div className="h-screen flex bg-stone-900 text-white">
          <SideBar />
          <div className="flex-1 min-h-0 overflow-y-scroll">
            <Header />
            <main>{children}</main>
          </div>
        </div>
        <Toaster position="bottom-center" expand={true} richColors={true} />
      </UserProvider>
    </>
  );
}

// <main className="h-screen">
//   {/* container*/}
//   <div className="flex  h-screen">
//     {/* side bar */}
//     <SideBar />
//     {/* main content */}
//     <div className=" flex-1 min-h-0 overflow-y-scroll">
//       <Header />
//       {children}
//     </div>
//   </div>
// </main>;