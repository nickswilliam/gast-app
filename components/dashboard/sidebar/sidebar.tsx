import { SidebarContainer } from "./container";
import { SidebarItemNavigation } from "./item-navigation";
import { SidebarMainText } from "../main-text";
import { SideBarWrapper } from "./wrapper";

import { sideBarItems } from "@/data/sidebarItems";

export const DashboardSidebar = () => {
  return (
    <SideBarWrapper>
      <SidebarMainText title="Acciones"/>
      <SidebarContainer>
        {sideBarItems.map((item) => (
          <SidebarItemNavigation
            key={item.id}
            icon={item.icon}
            title={item.title}
            url={item.url}
            categorys={item.categorys}
          />
        ))}
      </SidebarContainer>
    </SideBarWrapper>
  );
};
