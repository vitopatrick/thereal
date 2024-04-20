import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";
import { outfit } from "@/lib/fonts";
import { Toaster } from "@/components/ui/sonner";

export const metadata: Metadata = {
  title: "The Real World",
  description: "The real world homepage",
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
    <html lang="en">
      <body className={cn(outfit.className, "min-h-screen")}>
        {children}{" "}
        <Toaster position="bottom-center" expand={true} richColors={true} />
      </body>
    </html>
  );
}
