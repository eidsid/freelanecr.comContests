import { NextResponse } from "next/server";
const chats = [
  {
    id: "1212",
    date: "12/11/2024",
    title: "Frist Try",
    messages: [
      {
        messagecontent: "welcome",
        file: "",
        sender: "user",
        time: new Date().toLocaleTimeString(),
      },
      {
        messagecontent: "Hello, how are you Today",
        file: "",
        sender: "boot",
        time: new Date().toLocaleTimeString(),
      },
    ],
  },
  {
    id: "12120",
    date: "13/11/2024",
    title: "Secend Try",
    messages: [
      {
        messagecontent: "welcome",
        file: "",
        sender: "user",
        time: new Date().toLocaleTimeString(),
      },
      {
        messagecontent: "Hello, how are you Today",
        file: "",
        sender: "boot",
        time: new Date().toLocaleTimeString(),
      },
    ],
  },
];
class Chat {
  constructor(title, messages) {
    this.id = chats.length;
    this.title = title;
    this.messages = messages;
    this.date = new Date();
  }
}
export const GET = async () => {
  return new NextResponse(JSON.stringify(chats), { status: 200 });
};
export const POST = async (req) => {
  const { title, messages } = await req.json();
  const chat = new Chat(title, messages);
  chats.push(chat);
  return new NextResponse("object created success", { status: 200 });
};
