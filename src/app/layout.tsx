import type { Metadata } from "next";
import Header from "./header";
import { Roboto } from 'next/font/google'
import "./globals.css";
 
const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})
 

export const metadata: Metadata = {
  title: "Recipe API",
  description: "This is a recipe sharing platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.className} antialiased bg-blue-50 min-h-screen`}>
        <Header />
        <main className="p-6 min-h-[calc(100vh-64px)]">
          <div className="container mx-auto p-6 bg-white rounded-md shadow-md">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
