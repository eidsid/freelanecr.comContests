import { NextResponse } from "next/server";
import Claude from "claude-ai";

const apikey = "https://claude.ai/chat/8e8a05dc-e8bd-4a70-8e6a-9bccf6dc8ea3";

export const POST = async (req) => {
  const openai = new Claude({
    apiKey: apikey,
    sessionKey: "",
  });

  const { messagecontent, file } = await req.json();

  try {
    const response = await openai.createCompletion({
      model: "claude-instructions-x",
      prompt: "What is Claude AI?",
      maxTokens: 100,
    });

    console.log(response);
    return new NextResponse("hi", { status: 200 });
  } catch (error) {
    console.error("Error:", error);
    return new NextResponse("Error occurred", { status: 500 });
  }
};
