import React from "react";

export const SidebarMainText = ({title}: {title: string}) => {
  return (
    <div className="p-1 rounded-xl bg-indigo-500 text-white text-center">
      <h2 className="font-bold text-xl">{title}</h2>
    </div>
  );
};
