import React from "react";

interface SidebarMainTextProps {
  title: string;
  bgColor?: string;
}

export const SidebarMainText = ({bgColor, title} :SidebarMainTextProps) => {
  return (
    <div className={`p-1 rounded-md ${bgColor? bgColor : "bg-indigo-500"} text-white text-center`}>
      <h2 className={"font-bold text-xl"}>{title}</h2>
    </div>
  );
};
