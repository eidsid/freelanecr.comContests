import React from "react";
import bootIcon from "../../../public/Logo.png";
import Image from "next/image";
const MessageShow = ({ message, user }) => {
  const { messagecontent, file, sender, time } = message;
  console.log(message);
  return (
    <div
      className={`message ${
        sender === "boot" ? " font-semibold text-5xl " : " opacity-70"
      } flex gap-2 items-center `}
    >
      <div>
        {sender === "user" ? (
          <span className="  bg-fuchsia-800 flex justify-center items-center rounded-full h-10 w-10 text-white">
            {user.name[0]}
          </span>
        ) : (
          <Image
            src={bootIcon.src}
            width={50}
            height={50}
            alt="boot icon"
            className=" rounded-full border border-spacing-3 border-slate-900 "
          />
        )}
      </div>
      <div className="message-content leading-3 ">
        {sender === "user" ? (
          <span className="text-xxs opacity-80 ">{user.name}</span>
        ) : (
          <span className="text-xxs opacity-80">Chat Boot</span>
        )}
        <p className=" text-lg">{messagecontent}</p>
        <span className=" text-xxs opacity-80">{time}</span>
      </div>
    </div>
  );
};

export default MessageShow;
