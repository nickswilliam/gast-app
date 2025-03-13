import { formatNumber } from "@/lib/utils";

interface RightCardItemProps {
    id: number;
    value: number;
    title: string;
}

export const RightCardItem = ({title, value}: RightCardItemProps) => {
  return (
    <div className="flex flex-col items-center space-y-2">
        <h3 className="text-md font-semibold text-slate-600">{title}</h3>
        <p className="text-md font-semibold text-slate-900 flex justify-between items-center"><span className="rounded-sm p-1 bg-slate-500 mr-2 text-white">ARS</span>{formatNumber(value)}</p>
    </div>
  )
}
