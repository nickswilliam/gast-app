import { SidebarMainText } from "../main-text";
import { CardContainer } from "./card-container";

export const CardDashboard = () => {
  return (
    <CardContainer>
      <SidebarMainText title="Mis Ingresos" />

      <div className="flex flex-col items-center space-y-4">
        <p className="mt-4 text-4xl font-bold">AR$ 1,000,000.00</p>
        <div className="flex gap-2 justify-between items-center w-full">
          <div className="flex gap-2">
            <p className="text-sm text-slate-400 font-semibold">Desde</p>
            <p className="text-sm text-green-500">05/03/2025</p>
          </div>

          <div className="flex gap-2">
            <p className="text-sm text-slate-400 font-semibold">Hasta</p>
            <p className="text-sm text-red-500 ">31/03/2025</p>
          </div>
        </div>
      </div>
    </CardContainer>
  );
};
