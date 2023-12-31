import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Inter } from "next/font/google";
import classes from "../styles/Layout.module.css"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "NFT Market Place",
  description: "Achetez, créez et vendez des NFT",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <div className={classes.container_app}>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
