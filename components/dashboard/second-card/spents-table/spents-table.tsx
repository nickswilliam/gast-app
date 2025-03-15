
import { SidebarMainText } from "../../main-text";
import { DataTableSpents } from "./data-table";
import { SearchBarSpents } from "./search-bar";

export const SpentsTable = () => {
  return (
    <div className="w-full lg:w-3/4 h-96 flex flex-col bg-slate-100 p-4 rounded-lg shadow-md space-y-8">
      {/* header container */}
      <div className="flex items-baseline justify-between w-full">
        <SidebarMainText title="Mis gastos" bgColor="bg-slate-800" />
        <SearchBarSpents />

        <span className="text-sm font-semibold text-slate-600">Este mes</span>
      </div>

      {/* Table data */}
      <DataTableSpents />
    </div>
  );
};
