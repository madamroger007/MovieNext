import type { Metadata } from "next";

import "./globals.css";
// import Header from "@/components/Header";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import Header from "@/components/Header";


export const metadata: Metadata = {
  title: "Disney++ Clone",
  description: "List Movies The year",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white dark:bg-[#1a1c29]">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />

          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
