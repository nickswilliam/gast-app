"use client";

import { Input } from "@/components/ui/input";
import { useRef } from "react";
import { IoSearch } from "react-icons/io5";

export const SearchBarSpents = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const setInputRef = () => {
    if (inputRef.current) inputRef.current.focus();
  };

  return (
    <div
      className={`w-auto flex items-center space-x-2 rounded-xl px-2 py-1 border border-slate-700 focus:shadow-sm`}
      onClick={setInputRef}
    >
      <IoSearch />
      <Input
        className="border-none outline-none focus-visible:outline-none focus-visible:border-none focus-visible:ring-0 shadow-none w-[250px]"
        ref={inputRef}
      />
    </div>
  );
};
