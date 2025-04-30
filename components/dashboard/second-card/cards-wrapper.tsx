import { SpentsGraphData } from "./spents-graph/spents-graph";
import { SpentsTable } from "./spents-table/spents-table";
import { tableDataExample } from "@/data/dashboardTable"

export const CardsWrapperBottom = () => {
  return (
    <div className="w-full flex flex-col lg:flex-row justify-start lg:justify-between items-center gap-4 relative z-10">
      <SpentsTable/>
      <SpentsGraphData  dataKey="ammount" nameKey="category" data={tableDataExample} description="Gastos mes de Marzo 2025" title="Gráfico"/>
    </div>
  );
};
