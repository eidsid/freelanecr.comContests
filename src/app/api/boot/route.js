import { NextResponse } from "next/server";

export const POST = async (req) => {
  const { messagecontent, file } = await req.json();

  // Process the incoming message
  const response = await processMessage(messagecontent);
  // Send a response back to the client
  // make the reponse late
  await delay(1500); // Adjust the delay time as needed
  return new NextResponse(response, { status: 200 });
};
// Function to process incoming messages
async function processMessage(messagecontent) {
  // Simple logic to generate a response based on the message

  let greetings = ["welcome", "hello", "how are you", "hi"];
  let response;
  if (greetings.includes(messagecontent.toLowerCase())) {
    response = "Hello! How can I assist you?";
  } else if (messagecontent.toLowerCase().includes("goodbye")) {
    response = "Goodbye! Have a great day!";
  } else {
    response = "I'm sorry, I didn't understand that.";
  }
  return response;
}
// Function to simulate delay
const delay = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};
