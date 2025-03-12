import { DashboardHeader } from "@/components/dashboard/header/header";
import { DashboardSidebar } from "@/components/dashboard/sidebar/sidebar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full h-screen flex bg-slate-200 flex-auto overflow-auto">
      <DashboardSidebar />
      <main className="w-full h-screen flex flex-col flex-auto">
        <DashboardHeader />
        <div className="h-[calc(100vh-54px)] mt-54px">{children}</div>
      </main>
    </div>
  );
};

export default DashboardLayout;
