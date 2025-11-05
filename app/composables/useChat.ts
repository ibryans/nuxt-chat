import type { Chat, ChatMessage } from "~/types";

export default function useChat() {
    const chat = ref<Chat>({
        id: "1",
        messages: [],
        title: "Test chat"
    });
    
    const messages = computed<ChatMessage[]>(() => chat.value.messages);

    function createMessage(message: string, role: ChatMessage["role"]) {
        const id = messages.value.length.toString();

        return { 
            id, 
            role, 
            content: message
        };
    }

    function sendMessage(message: string) {
        const user = createMessage(message, "user");
        messages.value.push(user);

        setTimeout(() => {
            const assistant = createMessage(`Hello! You said: ${message}`, "assistant");
            messages.value.push(assistant);
        }, 1000);
    }

    return {
        chat,
        messages,
        sendMessage
    }
}