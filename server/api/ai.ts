import { createOllamaModel, generateChatResponse } from "./services/ai-service";

export default defineEventHandler(async (event) => {
    const body = await readBody(event);

    const { messages } = body;

    const id = messages.length.toString();
    const lastMessage = messages[messages.length - 1];

    const ollamaModel = createOllamaModel();
    const content = await generateChatResponse(ollamaModel, messages);

    return {
        id, 
        role: "assistant",
        content
    }
})