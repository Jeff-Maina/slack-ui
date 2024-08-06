import EditProfile from "./edit-profile";
import UploadPfp from "./upload-pfp-modal";

const ChatHeader = () => {
  return (
    <main className="p-4 flex flex-col gap-4 pt-16">
      <div className="flex items-center gap-4">
        <div className="size-24 bg-gradient-to-bl from-purple-500 to-pink-500 rounded-lg"></div>
        <div className="flex items-center gap-3">
          <p className="text-neutral-300 font-semibold text-xl">
            jeff.gichuki (you)
          </p>
          <div className="size-2 rounded-full bg-neutral-400"></div>
        </div>
      </div>
      <div className="max-w-xl">
        <p className="text-neutral-300 leading-relaxed">
          <b>This is your space</b> . Draft messages, list your to-dos, or keep
          links and files handy. You can also talk to yourself here, but please
          bear in mind you'll have to supply both sides of the conversation.
        </p>
      </div>
      <div className="flex items-center gap-3">
        <EditProfile />
        <UploadPfp />
      </div>
    </main>
  );
};

export default ChatHeader;
