"use client";
import "./globals.css";
import SideNav from "@/components/SideNav";
import Link from "next/link";
import Main from "@/components/main";
import { AppPrivider } from "@/components/Content";
import { Context } from "react";

export default function RootLayout({ children }) {
  
  return (
    <html lang="en">
      <body>
      <AppPrivider>
        <div>
          <Main />
          <div className="flex flex-row bg-white h-screen  overflow-y-auto">
            <div className="flex flex-col sticky right-0 left-0 bg-white top-0 z-50">
              <SideNav/>
            </div>
            <div className="w-[100%]" style={{ width: "100%" }}>
              {children}
            </div>
          </div>
        </div>
        </AppPrivider>
      </body>
    </html>
  );
}
