import React from "react";

interface SideBarWrapperProps {
  isOpen: boolean;
  children: React.ReactNode;
}

export const SideBarWrapper = ({ children, isOpen }: SideBarWrapperProps) => {
  return (
    <aside
      className={`sticky h-screen top-0  bg-slate-100 rounded-t-none rounded-r-lg rounded-lg shadow-xl p-4 ${isOpen? 'w-16': 'w-80'} transition-all ease-in-out duration-300`}
    >
      {children}
    </aside>
  );
};
