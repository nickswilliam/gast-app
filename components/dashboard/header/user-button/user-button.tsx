import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
  IoLogOutSharp,
  IoBuildSharp,
  IoHelpCircleSharp,
  IoPerson,
} from "react-icons/io5";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import Link  from "next/link";

export const UserButton = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger >
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="cursor-pointer">
        <DropdownMenuLabel>Mi cuenta:</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <IoPerson />
          <Link href="/perfil">Perfil</Link>
          
        </DropdownMenuItem>
        <DropdownMenuItem>
          <IoBuildSharp />
          <Link href="/configuracion">Configuración</Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <IoHelpCircleSharp />
          <Link href="/ayuda">Ayuda</Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <IoLogOutSharp />
          <button onClick={()=> {alert("Cerraste sesión")}}>Cerrar Sesión</button>
          
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
