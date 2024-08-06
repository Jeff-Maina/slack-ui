import { X } from "lucide-react";

import * as D from "@/components/ui/dialog";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

const EditMessageHistory = () => {
  return (
    <D.Dialog>
      <D.DialogTrigger asChild>
        <div className="h-[32rem] w-full border-t border-inner_b_color bg-[#1c2024] p-6  flex flex-col gap-3 py-5">
          <div className="border border-inner_b_color rounded cursor-pointer bg-primary_bg p-4 flex justify-between">
            <div className="flex flex-col gap-1 text-sm">
              <span className="text-white font-medium">Message history</span>
              <span className="text-neutral-400">
                Keep all messages, except for revisions
              </span>
            </div>
            <div>
              <button className="text-blue-400 hover:underline text-sm">
                Edit
              </button>
            </div>
          </div>
        </div>
      </D.DialogTrigger>
      <D.DialogContent
        showOverlay={false}
        className="bg-primary_bg border-inner_b_color w-[450px] !rounded"
      >
        <D.DialogHeader>
          <D.DialogTitle className="text-white text-xl">
            Edit message history
          </D.DialogTitle>
        </D.DialogHeader>
        <p className="text-neutral-300 text-sm leading-normal">
          You can choose to delete messages in this channel after a set amount
          of time or use the default time period for the workspace
        </p>

        <RadioGroup defaultValue="comfortable" className="text-neutral-300">
          <div className="flex space-x-2 !cursor-pointer">
            <RadioGroupItem
              value="default"
              id="r1"
              className="border-white translate-y-1"
            />
            <Label htmlFor="r1" className="leading-normal text-white">
              Use the default period for Channel 4
              <br />
              <span className="text-neutral-400">
                By default, messages are kept forever, but revisions aren't
                tracked.
              </span>
            </Label>
          </div>

          <div className="flex space-x-2 !cursor-pointer">
            <RadioGroupItem value="compact" id="r2" className="border-white" />
            <Label htmlFor="r2" className="text-white">
              Delete messages after a specific time period
            </Label>
          </div>
        </RadioGroup>

        <D.DialogFooter>
          <D.DialogClose>
            <button className="button">Cancel</button>
          </D.DialogClose>

          <button className="button !border-primary_bg_hover bg-primary_bg_hover cursor-not-allowed">
            Save changes
          </button>
        </D.DialogFooter>

        <D.DialogClose className="absolute right-4 top-4 z-20">
          <X className="h-4 w-4 stroke-white !z-30" />
          <span className="sr-only">Close</span>
        </D.DialogClose>
      </D.DialogContent>
      <D.DialogOverlay className="" />
    </D.Dialog>
  );
};

export default EditMessageHistory;
