import { generateText } from "ai";
import { createOllama } from "ollama-ai-provider";

export const createOllamaModel = () => {
    const ollama = createOllama();
    return ollama("llama3.2:1b");
}

export async function generateChatResponse(model: any, messages: any[]) {
    if (!Array.isArray(messages) || messages.length === 0) { 
        throw new Error("Messages must be an array of objects with 'role' and 'content' properties.");
    }

    const response = await generateText({
        model,
        messages,
    });

    return response.text.trim();
}