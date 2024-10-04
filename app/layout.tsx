import type { Metadata } from "next";
import "./globals.css";
import Footer from "./components/footer";
import Header from "./components/header";

export const metadata: Metadata = {
  title: "GDSC McMaster U",
  description: "Google Developer Student Club at McMaster University bridges the gap between theory and practice through solving real-world problems.",
  icons: [
    {
      url: "/icon.svg",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
