import { LeftCardDashboard } from "@/components/dashboard/first-card/left-card";
import { RightCardDashboard } from "@/components/dashboard/first-card/right-card";

export const CardsWrapper = () => {
  return (
    <div className="w-full flex flex-col lg:flex-row justify-start lg:justify-between items-center gap-4 relative z-10">
      <LeftCardDashboard
        endDate="31/03/2025"
        startDate="05/03/2025"
        incomingEarnings={2531276}
      />
      <RightCardDashboard />

      {/* Join cards */}
      <div className="z-0 absolute top-0 lg:top-[50%] mx-auto w-2 h-3/4 lg:w-full lg:h-2 bg-slate-800"></div>
    </div>
  );
};
