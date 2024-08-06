"use client";

import * as DP from "@/components/ui/dropdown-menu";
import * as D from "@/components/ui/dialog";
import { CircleCheck, Folder, Link, Plus, X } from "lucide-react";
import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

const AddBookmark = () => {
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <>
      <div className="absolute w-full top-full   bg-transparent left-0 px-4 py-1 border-b border-inner_b_color">
        <DP.DropdownMenu>
          <DP.DropdownMenuTrigger asChild>
            <button className="p-1 px-2 h-full text-neutral-300 text-sm hover:bg-primary_bg_hover rounded outline-none flex items-center gap-2">
              <Plus size={12} className="stroke-neutral-300" />
              <span>Add a bookmark</span>
            </button>
          </DP.DropdownMenuTrigger>

          <DP.DropdownMenuContent
            className="bg-[#242729] border-inner_b_color text-white font-medium px!0"
            align="start"
            sideOffset={-2}
          >
            <DP.DropdownMenuItem className="hover:!bg-blue-500 text-neutral-400 hover:!text-white cursor-pointer gap-3 p-3 group/option">
              <div>
                <Link size={18} />
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-white">
                  Add a bookmark to this conversation
                </p>
                <p className="text-xs">
                  Easily find your team's important files
                </p>
              </div>
            </DP.DropdownMenuItem>
            <DP.DropdownMenuItem
              onClick={() => setDialogOpen(true)}
              className="hover:!bg-blue-500 text-neutral-400 hover:!text-white cursor-pointer gap-3 p-3"
            >
              <div>
                <Folder size={18} />
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-white">Create a folder</p>
                <p className="text-xs">Organize your bookmarks</p>
              </div>
            </DP.DropdownMenuItem>
            <div className="p-3 py-4 border-t border-inner_b_color">
              <small className="text-neutral-300">No recent links</small>
            </div>
          </DP.DropdownMenuContent>
        </DP.DropdownMenu>
      </div>

      <D.Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <D.DialogContent
          showOverlay={false}
          className="bg-primary_bg border-inner_b_color w-[490px] !rounded"
        >
          <D.DialogHeader>
            <D.DialogTitle className="text-white text-xl">
              Create a folder{" "}
            </D.DialogTitle>
          </D.DialogHeader>
          <div className="grid w-full items-center gap-2">
            <Label htmlFor="email" className="text-neutral-300">
              Name
            </Label>
            <Input
              type="email"
              id="email"
              placeholder="Ex. Project Tracker"
              className="bg-transparent border-inner_b_color w-full"
            />
          </div>
          <D.DialogClose className="absolute right-4 top-4 z-20">
            <X className="h-4 w-4 stroke-white !z-30" />
            <span className="sr-only">Close</span>
          </D.DialogClose>
          <D.DialogFooter className="mt-4">
            <D.DialogClose>
              <button className="button">Cancel</button>
            </D.DialogClose>
            <D.DialogClose>
              <button
                onClick={() => {
                  toast.custom(() => {
                    return (
                      <div className="p-4 bg-primary_bg border w-96 border-inner_b_color rounded-md text-neutral-300 text-sm flex items-center gap-4">
                        <CircleCheck className="stroke-green-500 flex-shrink" />
                        <p>New folder created</p>
                      </div>
                    );
                  });
                }}
                className="button !border-primary_bg_hover bg-green-800 hover:bg-green-700"
              >
                Save changes
              </button>
            </D.DialogClose>
          </D.DialogFooter>
        </D.DialogContent>
        <D.DialogOverlay className="" />
      </D.Dialog>
    </>
  );
};

export default AddBookmark;
