import Image from "next/image";
import Chatbox from "./components/chat-box/chat-box";

export default function Home() {
  return (
    <main>
      <section className="h-screen grid place-items-center">
        <Chatbox />
      </section>
      <div className="h-screen w-full grid place-items-center md:hidden p-6">
        <p className="md:text-sm text-xs">
          Not optimized for small screens. Switch to a bigger screen :/
        </p>
      </div>
    </main>
  );
}
