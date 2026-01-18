import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { LogOut, SquareUser } from "lucide-react";
import Link from "next/link";

export default function UserDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="w-[85%] gap-2 justify-start px-2">
          <Avatar className="w-7 h7 block">
            <AvatarImage src="https://github.com/jhenryque.png" alt="@shadcn" />
            <AvatarFallback>JH</AvatarFallback>
          </Avatar>
          <p>Jose Henrique</p>
          {/* <Avatar className="rounded-lg">
            <AvatarImage
              src="https://github.com/evilrabbit.png"
              alt="@evilrabbit"
            />
            <AvatarFallback>ER</AvatarFallback>
          </Avatar> */}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-[var(--radix-dropdown-menu-trigger-width)] "
        align="center"
      >
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuGroup>
          <Link href="/dashboard/account">
            <DropdownMenuItem className="gap-2">
              <SquareUser size={16} />
              Configurações de Conta
            </DropdownMenuItem>
          </Link>
          <DropdownMenuSeparator />
          <Link href="/dashboard/account">
            <DropdownMenuItem className="gap-2 text-red-500">
              <LogOut size={16} />
              Sair
            </DropdownMenuItem>
          </Link>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
