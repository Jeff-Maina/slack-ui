import ChatHeader from "./chat-header";
import Navbar from "./navbar";

const Chatbox = () => {
  return (
    <div className="w-3/4 max-w-3xl h-[80%] bg-primary_bg m-auto border border-outer_border_color">
      <Navbar />
      <ChatHeader />
    </div>
  );
};

export default Chatbox;
