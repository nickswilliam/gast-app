import {
  IoAppsSharp,
  IoLogoUsd,
  IoPricetag,
  IoBarChart,
  IoCalendarNumber,
  IoShirt,
  IoFastFood,
  IoBus,
  IoMedkitSharp,
  IoSchool,
  IoGameController,
  IoHome ,
  IoSparklesSharp,
} from "react-icons/io5";

export const sideBarItems = [
  { id: 1, title: "Panel", icon: <IoAppsSharp />, url: "/dashboard" },
  { id: 2, title: "Gastos", icon: <IoLogoUsd />, url: "/dashboard/gastos" },
  {
    id: 3,
    title: "Categorías",
    icon: <IoPricetag />,
    url: "/dashboard/categorias",
    categorys: [
      { id: 1, tipo: "Ropa", icon: <IoShirt /> },
      { id: 2, tipo: "Comida", icon: <IoFastFood /> },
      { id: 3, tipo: "Transporte", icon: <IoBus /> },
      { id: 4, tipo: "Salud", icon: <IoMedkitSharp /> },
      { id: 5, tipo: "Educación", icon: <IoSchool /> },
      { id: 6, tipo: "Entretenimiento", icon: <IoGameController /> },
      { id: 7, tipo: "Hogar", icon: <IoHome /> },
      { id: 8, tipo: "Otros", icon: <IoSparklesSharp /> },
    ],
  },
  {
    id: 4,
    title: "Balances",
    icon: <IoBarChart />,
    url: "/dashboard/balances",
  },
  {
    id: 5,
    title: "Próximos gastos",
    icon: <IoCalendarNumber />,
    url: "/dashboard/calendario-gastos",
  },
];
