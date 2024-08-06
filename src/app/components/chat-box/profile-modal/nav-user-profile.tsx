"use client";
import * as Dg from "@/components/ui/dialog";
import * as T from "@/components/ui/tooltip";
import * as Dp from "@/components/ui/dropdown-menu";
import * as Tb from "@/components/ui/tabs";

import {
  ChevronDown,
  Clock,
  Copy,
  Mail,
  MailPlus,
  MessagesSquare,
  Star,
} from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import IntegrationSendEmail from "./intergration-send-email";
import EditMessageHistory from "./edit-message-history";
import AddTopicModal from "./add-topic-modal";

const ProfileModal = () => {
  const [hasCopiedId, setCopyId] = useState(false);
  const [tooltipOpen, setTooltipOpen] = useState(false);

  const copyId = () => {
    setCopyId(true);
    setTimeout(() => {
      setCopyId(false);
    }, 2000);
  };

  return (
    <div className="flex flex-col">
      <header className="flex flex-col gap-5 p-6">
        <div className="flex items-center gap-4">
          <div className="size-14 rounded-md bg-gradient-to-bl from-purple-500 to-pink-500"></div>
          <p className="text-neutral-300 font-semibold text-lg">jeff.gichuki</p>
        </div>
        <div>
          <Dp.DropdownMenu>
            <Dp.DropdownMenuTrigger className="border border-neutral-700 rounded flex items-center p-1 gap-2 px-1.5 text-neutral-300 bg-transparent">
              <Star size={16} />
              <ChevronDown size={16} />
            </Dp.DropdownMenuTrigger>

            <Dp.DropdownMenuContent
              align="start"
              sideOffset={-4}
              alignOffset={-5}
              className="bg-[#242729] border-inner_b_color text-white text-xs font-medium"
            >
              <p className="p-2 text-xs text-neutral-400">Move to...</p>
              <Dp.DropdownMenuItem className="hover:!bg-blue-500 hover:!text-white cursor-pointer  flex gap-2 items-center">
                <Star size={16} />
                Starred
              </Dp.DropdownMenuItem>
              <Dp.DropdownMenuSeparator className="border-none bg-inner_b_color" />
              <Dp.DropdownMenuItem className="hover:!bg-blue-500 hover:!text-white cursor-pointer">
                Move to new section
              </Dp.DropdownMenuItem>
            </Dp.DropdownMenuContent>
          </Dp.DropdownMenu>
        </div>
      </header>
      <div className="w-full overflow-hidden">
        <div>
          <Tb.Tabs defaultValue="about" className="w-full !p-0">
            <Tb.TabsList className="!p-0 relative z-20 !max-h-7 !py-0 !px-6 bg-transparent flex gap-4 max-w-fit translate-y-[9px]">
              <Tb.TabsTrigger
                className="!p-0 border-b-2  text-sm rounded-none py-2 !text-neutral-300 border-transparent !bg-transparent
                  data-[state=active]:border-b-blue-500 !pb-1.5"
                value="about"
              >
                About
              </Tb.TabsTrigger>
              <Tb.TabsTrigger
                className="!p-0 border-b-2  text-sm rounded-none py-2 !text-neutral-300 border-transparent !bg-transparent  data-[state=active]:border-b-blue-500 !pb-1.5"
                value="integrations"
              >
                Integrations
              </Tb.TabsTrigger>
              <Tb.TabsTrigger
                className="!p-0 border-b-2  text-sm rounded-none py-2 !text-neutral-300 border-transparent !bg-transparent  data-[state=active]:border-b-blue-500 !pb-1.5"
                value="settings"
              >
                Settings
              </Tb.TabsTrigger>
            </Tb.TabsList>
            <Tb.TabsContent value="about" className="w-full !p-0 !pb-0">
              <div className="h-[32rem] w-full border-t border-neutral-700 bg-[#1c2024] p-6 py-5  flex flex-col gap-3">
                <AddTopicModal />
                <div className="border border-inner_b_color rounded bg-primary_bg p-4 flex flex-col gap-3 text-white">
                  <div className="flex items-center gap-2 text-sm">
                    <Clock size={16} />
                    <span>10:19 AM local time.</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Mail size={16} />
                    <span className="text-blue-400">
                      jeffgichuki68@gmail.com
                    </span>
                  </div>
                  <div>
                    <button className="text-blue-400 hover:underline">
                      View full profile
                    </button>
                  </div>
                </div>
                <div className="border border-inner_b_color rounded bg-primary_bg p-4 flex flex-col gap-4 px-0">
                  <span className="text-white font-medium text-sm px-4">
                    Files
                  </span>
                  <button className="flex justify-center gap-4 hover:bg-[#1c2024] p-4 text-left">
                    <div>
                      <div className="size-9 rounded-md bg-cyan-500 grid place-items-center">
                        <MessagesSquare
                          size={20}
                          fill="white"
                          className="stroke-white"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col  gap-0.5 group/file min-w-fit w-full">
                      <span className="text-white text-sm">Untitled</span>
                      <div className="relative ">
                        <p className="text-xs text-neutral-300 absolute min-w-fit group-hover/file:opacity-0">
                          Shared by Jeff Gichuki on Jul 21st
                        </p>
                        <p className="text-xs text-neutral-300 absolute opacity-0 group-hover/file:opacity-100">
                          Open in canvas{" "}
                        </p>
                      </div>
                    </div>
                  </button>
                </div>

                <T.Tooltip open={tooltipOpen}>
                  <div className="flex items-center gap-3 text-neutral-300 text-sm p-3">
                    <span>Channel ID : GH071JSKHW8</span>
                    <T.TooltipTrigger>
                      <button
                        onMouseEnter={() => setTooltipOpen(true)}
                        onMouseLeave={() => setTooltipOpen(false)}
                        onClick={copyId}
                      >
                        <Copy size={12} />
                      </button>
                    </T.TooltipTrigger>
                  </div>
                  <T.TooltipContent
                    hideWhenDetached={false}
                    className={cn(
                      "text-white text-xs",
                      hasCopiedId ? "bg-green-700 border-green-700" : "tooltip"
                    )}
                  >
                    <p className="text-xs font-semibold">
                      {hasCopiedId ? "Copied!" : "Copy channel id"}
                    </p>
                  </T.TooltipContent>
                </T.Tooltip>
              </div>
            </Tb.TabsContent>
            <Tb.TabsContent value="settings" className="w-full !p-0 !pb-0">
              <EditMessageHistory />
            </Tb.TabsContent>
            <Tb.TabsContent value="integrations" className="w-full !p-0 !pb-0">
              <IntegrationSendEmail />
            </Tb.TabsContent>
          </Tb.Tabs>
        </div>
      </div>
    </div>
  );
};

const NavUserProfile = () => {
  return (
    <T.TooltipProvider>
      <Dg.Dialog>
        <T.Tooltip>
          <T.TooltipTrigger
            className="flex items-center gap-3 hover:bg-[#23292f] p-1 rounded-md transition-all"
            asChild
          >
            <Dg.DialogTrigger className=" transition-all rounded-md">
              <div className="size-5 rounded-md flex items-end justify-center bg-gradient-to-bl from-purple-500 to-pink-500 relative">
                <div className="absolute size-4 border-[3px] border-primary_bg rounded-full -right-2 bg-neutral-400 -bottom-[2px]"></div>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-white font-semibold flex gap-[2px]">
                  jeff.gichuki <span className="text-sm">🏡</span>
                </span>
                <ChevronDown className="stroke-white" size={15} />
              </div>
            </Dg.DialogTrigger>
          </T.TooltipTrigger>
          <T.TooltipContent className="bg-black border-neutral-800">
            <p className="text-xs text-white font-semibold">
              🏡 working remotely
            </p>
          </T.TooltipContent>
        </T.Tooltip>
        <Dg.DialogContent className="bg-primary_bg !p-0 border-inner_b_color !rounded overflow-hidden">
          <Dg.DialogHeader>
            <Dg.DialogTitle className="sr-only">Profile modal</Dg.DialogTitle>
          </Dg.DialogHeader>
          <ProfileModal />
        </Dg.DialogContent>
      </Dg.Dialog>
    </T.TooltipProvider>
  );
};

export default NavUserProfile;
