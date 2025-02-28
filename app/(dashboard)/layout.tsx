import { DashboardHeader } from "@/components/dashboard/header/header";
import { DashboardSidebar } from "@/components/dashboard/sidebar/sidebar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full h-screen flex flex-col bg-slate-200">
      <DashboardHeader />

      <main className="relative top-[54px] h-[calc(100vh - 54px)] flex flex-row grow w-full overflow-y-hidden">
        <DashboardSidebar />

      {children}
      </main>
    </div>
  );
};

export default DashboardLayout;
