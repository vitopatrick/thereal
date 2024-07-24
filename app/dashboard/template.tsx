import type { Metadata } from "next";
import { Toaster } from "@/components/ui/sonner";
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
        <div className="h-screen flex bg-zinc-950 text-white">
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

