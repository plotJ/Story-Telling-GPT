
import OpenAI from "openai";
import { OpenAIStream, StreamingTextResponse } from "ai";

const openai = new OpenAI({
  baseURL: "http://127.0.0.1:5000/v1", // Adjust this if needed for different models
});

export const runtime = "edge";

export async function POST(req: Request) {
  const { messages, characters, model = "gpt-3.5-turbo" } = await req.json();

  let systemPrompt = `You are a professional storyteller who has been hired to write a series of short stories for a new anthology. The stories should be captivating, imaginative, and thought-provoking. They should explore a variety of themes and genres, from science fiction and fantasy to mystery and romance. Each story should be unique and memorable, with compelling characters and unexpected plot twists.`;

  if (characters && characters.length > 0) {
    const characterDescriptions = characters.map(
      (char: { name: string; description: string; personality: string }) => 
      `${char.name}: ${char.description}. Personality: ${char.personality}`
    ).join('\n');
    
    systemPrompt += `\n\nIncorporate the following characters into your story:
${characterDescriptions}

Ensure that each character plays a significant role in the narrative. After the story, provide a brief summary of each character's role and development in the narrative.`;
  } else {
    systemPrompt += `\n\nCreate original characters for your story. After the story, provide a brief summary of each main character's role and development in the narrative.`;
  }

  const response = await openai.chat.completions.create({
    model: model,


    stream: true,
    messages: [
      {
        role: "system",
        content: systemPrompt,
      },
      ...messages,
    ],
  });

  const stream = OpenAIStream(response);
  return new StreamingTextResponse(stream);
}