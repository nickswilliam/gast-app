"use client";
import { useState } from "react";
import { SidebarContainer } from "./container";
import { SidebarItemNavigation } from "./item-navigation";
import { SidebarMainText } from "../main-text";
import { SideBarWrapper } from "./wrapper";

import { sideBarItems } from "@/data/sidebarItems";

import { IoChevronForward, IoChevronBackSharp } from "react-icons/io5";

export const DashboardSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <SideBarWrapper isOpen={isOpen}>
      <div
        className={`relative flex flex-col h-screen w-full ${
          isOpen ? "overflow-hidden overflow-x-hidden" : "overflow-auto"
        } no-scrollbar scrollbar-hide`}
      >
        <SidebarMainText title="Acciones" />
        <SidebarContainer>
          {sideBarItems.map((item) => (
            <SidebarItemNavigation
              key={item.id}
              icon={item.icon}
              title={item.title}
              url={item.url}
              categorys={item.categorys}
              isOpen={isOpen}
            />
          ))}
        </SidebarContainer>
      </div>
      <button
        className="absolute top-1/2 -right-4 drop-shadow-md rounded-xl p-2 bg-indigo-500 text-slate-100 z-50"
        onClick={toggleSidebar}
      >
        {isOpen ? <IoChevronForward /> : <IoChevronBackSharp />}
      </button>
    </SideBarWrapper>
  );
};
