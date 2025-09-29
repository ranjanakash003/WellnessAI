import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Header } from "@/components/Header";
import { Toaster } from "@/components/ui/sonner";


const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata = {
  title: "WellnessAI - Personalized Health Tips",
  description: "Get AI-generated wellness recommendations tailored to your goals.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          inter.variable
        )}
      >
        <div className="flex min-h-screen flex-col bg-background">
          <Header />
          <main className="flex-1">{children}</main>
        </div>
        <Toaster />
      </body>
    </html>
  );
}

