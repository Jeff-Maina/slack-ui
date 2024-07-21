import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { ChevronDown } from "lucide-react";

const NavUserProfile = () => {
  return (
    <TooltipProvider>
      <Dialog>
        <Tooltip>
          <TooltipTrigger className="flex items-center gap-3 hover:bg-[#23292f] p-1 rounded-md transition-all" asChild>
            <DialogTrigger className=" transition-all rounded-md">
              <div className="size-5 rounded-md flex items-end justify-center bg-gradient-to-bl from-purple-500 to-pink-500 relative">
                <div className="absolute size-4 border-[3px] border-primary_bg rounded-full -right-2 bg-neutral-500 -bottom-[2px]"></div>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-white font-semibold flex gap-[2px]">
                  jeff.gichuki <span className="text-sm">🏡</span>
                </span>
                <ChevronDown className="stroke-white" size={15} />
              </div>
            </DialogTrigger>
          </TooltipTrigger>
          <TooltipContent className="bg-black border-neutral-800">
            <p className="text-xs text-white font-semibold">
              🏡 working remotely
            </p>
          </TooltipContent>
        </Tooltip>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Are you absolutely sure?</DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </TooltipProvider>
  );
};

export default NavUserProfile;
