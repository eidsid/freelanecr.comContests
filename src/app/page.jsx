"use client";
import Link from "next/link";
import SecondaryHeader from "@/components/secendryheader/secondaryHeader";
import Image from "next/image";
import chatimage from "../../public/chatimage.png";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
  const [chats, setchats] = useState([]);
  const get_chats = async () => {
    const chat = await axios.get("./api/chats/");

    setchats(chat.data);
  };
  useEffect(() => {
    get_chats();
  }, []);
  return (
    <div className=" h-svh  p-4 container m-auto flex flex-col  items-center justify-between gap-4 text-center">
      <SecondaryHeader />
      {/*middle content */}
      <div className="">
        <h1 className=" text-5xl font-light  ">Good Evening, Eid</h1>
        <Link href="/d">
          <Image
            src={chatimage.src}
            width={700}
            height={60}
            alt="got to chat page"
            className="  rounded-lg overflow-hidden border  m-auto my-4"
          />
        </Link>
        <h2>Subscribe to Pro for Claude 3 Opus</h2>
        <p className=" text-xs opacity-85">
          You are using Claude 3, our second-most intelligent model, for free
          ,to try Opus,our most intelligent model,
          <span>
            <Link
              href="subscribePage"
              className="text-purple-800 font-bold text-sm"
            >
              upgrade to Claude Pro
            </Link>
          </span>
        </p>
      </div>
      <div className=" h-2/5 w-full">
        {/* chats */}
        <span>Previous Chats from Today</span>
        {chats.map((chat) => {
          return (
            <div key={chat.id} className="w-full  ">
              <span className=" flex justify-center opacity-70 text-xxs">
                16 days Ago
              </span>

              <div className=" bg-white p-4 w-full h-12 rounded-lg border flex justify-start items-center ">
                <Link href={`/${chat.id}`} className=" p-4">
                  {chat.title}
                </Link>
              </div>
            </div>
          );
        })}
      </div>
      <span className=" font-bold text-xxs  text-gray-600">ANTHROPIC</span>
    </div>
  );
}
