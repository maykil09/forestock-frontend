"use client";

import * as React from "react";
import { ChevronsUpDown, Plus, House } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";

const BranchSwitcher = ({
  branches,
}: {
  branches: {
    branch_name: string;
    branch_location: string;
  }[];
}) => {
  const { isMobile } = useSidebar();
  const [activeBranch, setActiveBranch] = React.useState(branches[0]);

  if (!activeBranch) {
    return null;
  }
  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground cursor-pointer">
              <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                <House className="size-4" />
              </div>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-medium">
                  {activeBranch.branch_name}
                </span>
                <span className="truncate text-xs">
                  {activeBranch.branch_location}
                </span>
              </div>
              <ChevronsUpDown className="ml-auto" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg"
            align="start"
            side={isMobile ? "bottom" : "right"}
            sideOffset={4}>
            <DropdownMenuLabel className="text-muted-foreground text-xs">
              Branch
            </DropdownMenuLabel>
            {branches.map((branch, index) => (
              <DropdownMenuItem
                key={branch.branch_name}
                onClick={() => setActiveBranch(branch)}
                className="gap-2 p-2 cursor-pointer">
                <div className="flex size-6 items-center justify-center rounded-md border">
                  <House className="size-3.5 shrink-0" />
                </div>
                {branch.branch_name}
              </DropdownMenuItem>
            ))}
            <DropdownMenuSeparator />
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
};

export default BranchSwitcher;
