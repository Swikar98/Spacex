import { Inter } from "next/font/google";
import "./globals.css";
import MainLayout from "../component/layout/layout-section/MainLayout";
import MenuContextProvider from "../../context/MenuContext";




const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MenuContextProvider><MainLayout>
        {children}
      </MainLayout></MenuContextProvider>
      
        </body>
    </html>
  );
}