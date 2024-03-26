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
export const GET = async (reques, { params }) => {
  const { id } = params;

  const specificChat = chats.find((chat) => chat.id === id);

  return new NextResponse(JSON.stringify(specificChat), { status: 200 });
};
