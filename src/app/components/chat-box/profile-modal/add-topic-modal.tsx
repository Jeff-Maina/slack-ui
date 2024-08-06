import { CheckCircle, CircleCheck, MailPlus, X } from "lucide-react";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import * as D from "@/components/ui/dialog";
import * as F from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

const formSchema = z.object({
  topic: z.string().optional(),
});

const AddTopicModal = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      topic: "Untitled",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
    toast.custom(() => {
      return (
        <div className="p-4 bg-primary_bg border w-96 border-inner_b_color rounded-md text-neutral-300 text-sm flex items-center gap-4">
          <CircleCheck className="stroke-green-500 flex-shrink" />
          <p>Added "{values.topic}" as your new topic</p>
        </div>
      );
    });
  };

  return (
    <D.Dialog>
      <D.DialogTrigger asChild>
        <div className="border border-inner_b_color rounded bg-primary_bg p-4 flex justify-between cursor-pointer hover:bg-[#1c2024]">
          <div className="flex flex-col gap-1 text-sm">
            <span className="text-white font-medium">Topic</span>
            <span className="text-neutral-400">Add a topic</span>
          </div>
          <div>
            <button className="text-blue-400 hover:underline text-sm">
              Edit
            </button>
          </div>
        </div>
      </D.DialogTrigger>
      <D.DialogContent
        showOverlay={false}
        className="bg-primary_bg border-inner_b_color w-[490px] !rounded"
      >
        <D.DialogHeader>
          <D.DialogTitle className="text-white text-xl">
            Edit topic
          </D.DialogTitle>
        </D.DialogHeader>
        <F.Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <F.FormField
              control={form.control}
              name="topic"
              render={({ field }) => (
                <F.FormItem>
                  <F.FormControl>
                    <Textarea
                      className="bg-transparent border-neutral-500 resize-none focus-visible:border-blue-400 focus-visible:ring-blue-700 text-white"
                      placeholder="Add a topic"
                      {...field}
                    />
                  </F.FormControl>
                  <F.FormDescription>
                    Add a topic to your conversation with <b>@Jeff Gichuki</b>.
                    This will be visible to both of you at the top of your DM.
                  </F.FormDescription>
                  <F.FormMessage />
                </F.FormItem>
              )}
            />
            <D.DialogFooter className="mt-4">
              <D.DialogClose>
                <button className="button">Cancel</button>
              </D.DialogClose>
              <D.DialogClose>
                <button
                  type="submit"
                  className="button !border-primary_bg_hover bg-primary_bg_hover"
                >
                  Save changes
                </button>
              </D.DialogClose>
            </D.DialogFooter>
          </form>
        </F.Form>

        <D.DialogClose className="absolute right-4 top-4 z-20">
          <X className="h-4 w-4 stroke-white !z-30" />
          <span className="sr-only">Close</span>
        </D.DialogClose>
      </D.DialogContent>
      <D.DialogOverlay className="" />
    </D.Dialog>
  );
};

export default AddTopicModal;
