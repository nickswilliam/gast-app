import { formatNumber } from "@/lib/utils";
import { SidebarMainText } from "../main-text";
import { LeftCardContainer } from "./left-card-container";

interface LeftCardDashboardProps {
  incomingEarnings: number;
  startDate: string;
  endDate: string;
}

export const LeftCardDashboard = ({
  endDate,
  incomingEarnings,
  startDate,
}: LeftCardDashboardProps) => {
  return (
    <LeftCardContainer>
      <SidebarMainText title="Ingresos totales" bgColor="bg-slate-500"/>

      <div className="flex flex-col items-center space-y-4 z-10">
        <p className="mt-4 text-4xl font-bold">
          <span className="rounded-md bg-slate-500 text-white px-2 py-1 mr-2">ARS</span>
          {formatNumber(incomingEarnings)}
        </p>
        <div className="flex gap-2 justify-between items-center w-full">
          <div className="flex gap-2">
            <p className="text-sm text-slate-400 font-semibold">Desde</p>
            <p className="text-sm text-slate-700">{startDate}</p>
          </div>

          <div className="flex gap-2">
            <p className="text-sm text-slate-400 font-semibold">Hasta</p>
            <p className="text-sm text-slate-700 ">{endDate}</p>
          </div>
        </div>
      </div>
    </LeftCardContainer>
  );
};
