import { SidebarMainText } from "../main-text";
import { RightCardContainer } from "./right-card-container";

import { incomingEarns } from "@/data/dashboardItems";
import { RightCardItem } from "./right-card-item";

export const RightCardDashboard = () => {
  return (
    <RightCardContainer>
      <SidebarMainText title="Mis ingresos" bgColor="bg-slate-800"/>

      <div className="w-full h-auto overflow-auto no-scrollbar">
        {incomingEarns.map((item) => (
          <RightCardItem key={item.id} {...item} />
        ))}
      </div>
    </RightCardContainer>
  );
};
