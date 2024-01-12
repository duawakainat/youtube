import React from "react";
import SideNav from "./SideNav";
import Slide from './Navbar'
const Layout = ({ children }) => {
  return (
    <div>
     
    <div className="flex flex-row bg-white h-screen  overflow-y-scroll overscroll-contain">
      <div className="flex flex-col sticky right-0 left-0 bg-white top-0 z-50">
        <SideNav />
      </div>
      <div className="flex justify-self-end w-[100%]" style={{ width: "100%" }}>
      <Slide/>
        {children}
      </div>
    </div></div>
  );
};

export default Layout;
