"use client";
import React, { useState, useRef, useEffect } from "react";
import MessageShow from "@/components/messages/messageShow";
import TypingIndicator from "@/components/TypingIndicator/TypingIndicator";
import middleicon from "../../../public/middleicon.png";
import Image from "next/image";
import fileicon from "../../../public/fileicon.png";
import axios from "axios";
import Header from "@/components/header/Header";
import SubscribtionNotificationShow from "@/components/Subscribtion/Subscribtion";

class Message {
  constructor(messageContent, file, sender) {
    this.messagecontent = messageContent;
    this.file = file;
    this.sender = sender;
    this.time = new Date().toLocaleTimeString();
  }
}

const Chatbot = ({ params }) => {
  const user = { name: "Eid Sayed" };
  const { id } = params; //use for get  chats

  const [lastChat, setlastChat] = useState({}); // State to manage lastChat
  const [messages, setMessages] = useState([]); // State to manage messages
  const [messageText, setmessageText] = useState(""); // State to  messageText
  const [fileContent, setfileContent] = useState(""); // State to file
  const [isTyping, setIsTyping] = useState(false); // State to track typing indicator
  const [SubscribtionNotification, setSubscribtionNotification] =
    useState(true); //state for subscribtion notification
  useEffect(() => {
    const getLastchatData = async () => {
      const LastchatData = await axios.get(`./api/chats/${id}`);
      if (LastchatData.data) {
        setlastChat(LastchatData.data);
      }

      if (LastchatData?.data?.messages?.length) {
        setMessages(() => [...LastchatData.data.messages]);
        console.log();
      }
    };
    getLastchatData();
  }, [id]);

  const subscriptionPlan = "basic";

  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleBootReponsed = async (message) => {
    const data = await axios.post("./api/boot/", message);
    setIsTyping(false);
    return data.data;
  };

  const handleSendMessage = async (e) => {
    const newUserMessage = new Message(messageText, fileContent, "user");
    e.preventDefault();

    setMessages((prev) => [...prev, newUserMessage]);
    setIsTyping(true);
    const botresponed = await handleBootReponsed({
      messagecontent: newUserMessage.messagecontent,
      file: newUserMessage.file,
    });

    const newBootMessage = new Message(botresponed, "", "boot");
    setMessages((prev) => [...prev, newBootMessage]);
    setmessageText("");
    setfileContent("");
  };

  return (
    <div className="w-10/12 flex flex-col justify-between p-4 m-auto">
      <Header title={lastChat.title || "Untitled"} />
      <div className="messaging-area relative h-96 py-8 w-full">
        <div className="overflow-y-scroll h-80 nocsrolbar">
          {!messages?.length ? (
            <div
              className="w-full h-full flex items-center justify-center gap-2"
              ref={messagesEndRef}
            >
              <Image src={middleicon.src} width={50} height={50} />
              <span className="font-medium text-3xl opacity-60">
                What can I help you with today?
              </span>
            </div>
          ) : (
            <div className="flex h-full flex-col gap-4 p-4 ">
              {messages.map((message, index) => (
                <MessageShow key={index} message={message} user={user} />
              ))}
              <div ref={messagesEndRef} />
            </div>
          )}
        </div>
        {/* Show typing indicator if AI is typing */}
        {isTyping && <TypingIndicator />}
      </div>
      <div className="flex flex-col w-full">
        {SubscribtionNotification && subscriptionPlan === "basic" ? (
          <SubscribtionNotificationShow
            setSubscribtionNotification={setSubscribtionNotification}
          />
        ) : (
          <div className="h-6"></div>
        )}

        <form
          onSubmit={handleSendMessage}
          className="bg-white h-32 w-full p-3 rounded-md flex flex-col justify-between text-2xl gap-2"
        >
          <div className="flex justify-between items-center w-full">
            <input
              type="text"
              placeholder="Message Claude..."
              name="message"
              value={messageText}
              title="please use one of these words welcome , hello , howareyou, hi , goodbye"
              onChange={(e) => {
                setmessageText(e.target.value);
              }}
              className="w-full focus:outline-none focus:border-none"
            />
            <div className="filesection w-10">
              <label htmlFor="fileInput" className="cursor-pointer">
                <Image
                  src={fileicon.src}
                  height={40}
                  width={40}
                  alt="file icon"
                  className="w-6 h-6 rounded-2xl"
                />
              </label>
              <input
                type="file"
                name="file"
                id="fileInput"
                value={fileContent}
                onChange={(e) => {
                  setfileContent(e.target.value);
                }}
                className="hidden w-full"
              />
            </div>
          </div>
          <span className="opacity-80 font-medium">Claude 3 Sonnet</span>
        </form>
      </div>
    </div>
  );
};

export default Chatbot;
