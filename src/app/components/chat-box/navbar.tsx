import { Folder, Link, Plus, Sticker } from "lucide-react";
import HuddleButton from "./huddle-button";
import NavUserProfile from "./profile-modal/nav-user-profile";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import AddBookmark from "./add-boookmartk-component";

const Navbar = () => {
  return (
    <>
      <nav className="pb-0 relative">
        <div className="w-full flex justify-between items-center relative z-10 p-4 py-3">
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
        </div>
        <AddBookmark />
      </nav>
    </>
  );
};

export default Navbar;
