import { Sticker } from "lucide-react";
import HuddleButton from "./huddle-button";
import NavUserProfile from "./nav-user-profile";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const Navbar = () => {
  return (
    <nav className="flex items-center p-6 pb-0 justify-between">
      <NavUserProfile />
      <div className="flex items-center gap-2">
        <HuddleButton />
        <div>
          <TooltipProvider>
            <Tooltip delayDuration={500}>
              <TooltipTrigger asChild>
                <button className="flex items-center gap-1 text-xs text-neutral-400 hover:text-white px-2 py-1 border border-neutral-700 rounded">
                  <Sticker size={18} /> Canvas
                </button>
              </TooltipTrigger>
              <TooltipContent
                side="bottom"
                align="end"
                sideOffset={5}
                className="bg-[#242729] border-inner_b_color text-white text-sm flex flex-col gap-2 w-80 rounded-lg p-5"
              >
                <p className="text-sm font-semibold">
                  Notes, todo's, resources and more.
                </p>
                <p className="text-sm leading-relaxed text-neutral-400">
                  Now every conversation has a canvas, a place to keep the
                  information you don't want to lose in threads
                </p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
