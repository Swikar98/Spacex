"use client";
import { useContext } from "react";
import MainHeader from "./MainHeader";
import MainSidebar from "./MainSidebar";
import { MenuContext } from "../../../../context/MenuContext";

const MainLayout = ({ children }) => {
  const { open } = useContext(MenuContext);
  const closesideBarHandler = () => {
    toggle();
  };
  return (
    <div className="bg-green-300  min-h-screen">
      <MainSidebar />

      <div className={`${open ? "max-lg-blur-xl" : "blur-0"}`}>
        <MainHeader />
        <main className="lg:ml-[280px]">{children}</main>
      </div>
    </div>
  );
};

export default MainLayout;
