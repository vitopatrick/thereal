import type { Metadata } from "next";
import { cn } from "@/lib/utils";
import { outfit } from "@/lib/fonts";
import { Toaster } from "@/components/ui/sonner";
// import SideBar from "@/components/side-navigation/SideBar";
// import Header from "@/components/Dashboard-header/Header";
import UserProvider from "@/context/UserAuthContext";

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
    <UserProvider>
      <html lang="en">
        <body
          className={cn(outfit.className, "min-h-screen bg-black text-white")}
        >
          <div>
            <h4>this is the template</h4>
          </div>
          <Toaster position="bottom-center" expand={true} richColors={true} />
        </body>
      </html>
    </UserProvider>
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