import { ChevronDown, Headset, Link } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const HuddleDropdown = () => {
  return (
    <TooltipProvider>
      <DropdownMenu>
        <Tooltip delayDuration={500}>
          <TooltipTrigger asChild>
            <DropdownMenuTrigger asChild>
              <button className="p-1 h-full hover:bg-primary_bg_hover rounded-r-lg border-l outline-none">
                <ChevronDown size={12} className="stroke-neutral-300" />
              </button>
            </DropdownMenuTrigger>
          </TooltipTrigger>
          <TooltipContent
            side="bottom"
            align="end"
            sideOffset={5}
            className="tooltip text-white !p-3 rounded-lg flex flex-col gap-2"
          >
            <p className="text-xs">More options</p>
          </TooltipContent>
        </Tooltip>
        <DropdownMenuContent
          className="bg-[#242729] border-inner_b_color text-white text-xs font-medium"
          align="end"
          sideOffset={-2}
        >
          <DropdownMenuItem className="hover:!bg-blue-500 hover:!text-white cursor-pointer gap-3 text-xs">
            <Headset size={16} />
            Start Huddle
          </DropdownMenuItem>
          <DropdownMenuItem className="hover:!bg-blue-500 hover:!text-white cursor-pointer gap-3 text-xs">
            <Link size={16} />
            Copy Huddle Link
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </TooltipProvider>
  );
};

const HuddleButton = () => {
  return (
    <div className="flex items-center divide- divide-neutral-700 bg-transparent border border-neutral-700 rounded">
      <TooltipProvider>
        <Tooltip delayDuration={500}>
          <TooltipTrigger asChild>
            <button className="px-2 py-1 hover:bg-primary_bg_hover rounded-l-lg">
              <Headset size={18} className="stroke-neutral-300" />
            </button>
          </TooltipTrigger>
          <TooltipContent
            side="bottom"
            align="end"
            sideOffset={5}
            className="tooltip text-white !p-3 rounded-lg flex flex-col gap-2"
          >
            <p className="text-xs">Start huddle with jeff.gichuki</p>
            <div className="text-xs flex items-center w-full justify-evenly">
              <span>CTRL</span>
              <span>SHIFT</span>
              <span>H</span>
            </div>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <HuddleDropdown />
    </div>
  );
};

export default HuddleButton;
