import type { Metadata } from "next";
import "@/app/globals.css";

export const metadata: Metadata = {
  title: "Solution Challenge | GDSC McMaster U",
  description: "Solution Challenge is an annual hackathon hosted by GDSC McMaster U.",
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
        {children}
      </body>
    </html>
  );
}
