import { MailPlus, X } from "lucide-react";

import * as D from "@/components/ui/dialog";

const IntegrationSendEmail = () => {
  return (
    <D.Dialog>
      <D.DialogTrigger asChild>
        <div className="h-[32rem] w-full border-t border-inner_b_color bg-[#1c2024] p-6  flex flex-col gap-3 py-5">
          <div className="border border-inner_b_color rounded cursor-pointer hover:bg-[#1c2024] bg-primary_bg p-4 flex justify-between">
            <div className="flex gap-3 items-start">
              <div className="p-3 bg-sky-800/50 rounded-lg">
                <MailPlus size={18} className="stroke-sky-400" />
              </div>
              <div className="flex flex-col gap-1 text-sm">
                <span className="text-white font-medium">
                  Send emails to this conversation
                </span>
                <span className="text-neutral-400">
                  Get an email address that posts incoming emails in this
                  conversation.
                </span>
              </div>
            </div>
          </div>
        </div>
      </D.DialogTrigger>
      <D.DialogContent
        showOverlay={false}
        className="bg-primary_bg border-inner_b_color w-[490px] !rounded"
      >
        <D.DialogHeader>
          <D.DialogTitle className="text-white text-xl">
            Send emails to @Jeff Gichuki
          </D.DialogTitle>
        </D.DialogHeader>

        <p className="text-neutral-300">
          Emails sent to this email address will be posted in the @Jeff Gichuki
          channel.
        </p>
        <button className="text-blue-400 text-left">
          How to use this address
        </button>
        <D.DialogFooter>
          <D.DialogClose>
            <button className="!border-green-900 button bg-green-900 hover:bg-green-800">
              Get Email Address
            </button>
          </D.DialogClose>
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

export default IntegrationSendEmail;
