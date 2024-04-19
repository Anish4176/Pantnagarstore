// import { Inter } from "next/font/google";
import "./globals.css";
import NextAuthProvider from "@/components/Provider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
// const inter = Inter({ subsets: ["latin"] });
import { Lexend } from 'next/font/google';

const poppins = Lexend({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

export const metadata = {
  title: "PantnagarStore",
  description: "PantnagarStore is your go-to marketplace for buying and selling new and used textbooks, bicycles, kitchen appliances, sports gear, fashion, and room essentials. Save and earn by connecting with Pantnagar students today!",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className} >
      <NextAuthProvider>             
       <Header/>
        {children}
        <Footer/>     
      </NextAuthProvider>
        </body>
    </html>
  );
}
