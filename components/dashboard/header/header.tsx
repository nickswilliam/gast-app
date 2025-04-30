"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { UserButton } from "@/components/dashboard/header/user-button/user-button";
import { capitalize } from "@/lib/utils";

export const DashboardHeader = () => {
  const pathname = usePathname();

  return (
    <header className="transition-all ease-out sticky w-full top-0 flex h-[54px] items-center justify-between p-4 bg-slate-100 shadow-md border-b rounded-r-lg z-50">
      <Link href="/dashboard">
        <p className="font-bold text-4xl -rotate-45 text-violet-500 drop-shadow-md">G</p>
      </Link>

      <span className="text-2xl font-bold">{capitalize(pathname)}</span>

      <UserButton />
    </header>
  );
};
