import "./globals.css";
import { Metadata } from "next";
import Navbar from "@/components/layout/navbar";

export const metadata: Metadata = {
  title: "EliteClass",
  description: "Get Azure Certified in Silicon Valley",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased" suppressHydrationWarning>
        <Navbar />
        {children}
        <footer className="row-start-3 text-sm text-center serif">
          <p>© 2024 EliteClass. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}
