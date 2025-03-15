import { headerTableTitles, tableDataExample } from "@/data/dashboardTable";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { formatNumber } from "@/lib/utils";

export const DataTableSpents = () => {
  const totalAmounthThisMonth = tableDataExample.reduce(
    (acc, current) => acc + current.ammount,
    0
  );
  return (
    <Table>
      <TableCaption className="font-semibold">
        Gastos realizados:{" "}
        <span className="bg-slate-600 rounded-md px-2 text-white mr-1">
          ARS
        </span>
        <span className="text-black">{formatNumber(totalAmounthThisMonth)}</span>
      </TableCaption>
      <TableHeader>
        <TableRow>
          {headerTableTitles.map((headerItem) => (
            <TableHead key={headerItem.id}>{headerItem.title}</TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {tableDataExample.map((tableItem) => (
          <TableRow key={tableItem.id}>
            <TableCell>{tableItem.id}</TableCell>
            <TableCell>${formatNumber(tableItem.ammount)}</TableCell>
            <TableCell>{tableItem.payMethod}</TableCell>
            <TableCell>{tableItem.feesToPay}</TableCell>
            <TableCell>{tableItem.category}</TableCell>
            <TableCell>{tableItem.date}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
