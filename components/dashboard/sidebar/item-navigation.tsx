import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface SidebarCategoryProps {
  id: number;
  tipo: string;
  icon: React.ReactNode;
}

interface SidebarItemNavigationProps {
  title: string;
  icon: React.ReactNode;
  url: string;
  categorys?: SidebarCategoryProps[];
}

export const SidebarItemNavigation = ({
  icon,
  title,
  url,
  categorys,
}: SidebarItemNavigationProps) => {
  if (title === "Categorías") {
    return (
      <Accordion
        type="single"
        collapsible
        className="flex w-full items-center rounded-sm p-2 hover:bg-indigo-200/40 hover:pl-4 cursor-pointer transition-all duration-300 ease-in-out text-indigo-500"
      >
        <AccordionItem value="Categories" className="space-x-4">
          <AccordionTrigger className="space-x-4">
            <Link href={url} className="flex items-center space-x-4">
              {icon}
              <span className="text-lg font-semibold ">{title}</span>
            </Link>
          </AccordionTrigger>

          {categorys?.map((category) => (
            <AccordionContent key={category.id} className="px-4 py-2 hover:pl-6 hover:bg-violet-200/60 transition-all duration-300 ease-out flex items-center space-x-4 rounded-sm hover:text-indigo-500">
              {category.icon}
              <span>{category.tipo}</span>
            </AccordionContent>
          ))}
        </AccordionItem>
      </Accordion>
    );
  }
  return (
    <Link
      className="flex items-center space-x-4 px-2 py-2 rounded-sm hover:bg-indigo-200/40 hover:pl-6 cursor-pointer transition-all duration-300 ease-in-out text-indigo-500"
      href={url}
    >
      {icon}
      <span className="text-lg font-semibold ">{title}</span>
    </Link>
  );
};
