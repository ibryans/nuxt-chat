import type { Chat, ChatMessage } from "~/types";

export default function useChat(chatId: string) {
    const { chats } = useChats();
    
    const chat = computed(() => chats.value.find(c => c.id === chatId) as Chat);
    
    const messages = computed<ChatMessage[]>(() => chat.value?.messages || []);

    function createMessage(message: string, role: ChatMessage["role"]) {
        const id = messages.value.length.toString();

        return { 
            id, 
            role, 
            content: message
        };
    }

    async function sendMessage(message: string) {
        const user = createMessage(message, "user");
        messages.value.push(user);

        const data = await $fetch<ChatMessage>("/api/ai", {
            method: "POST",
            body: {
                messages: messages.value
            }
        });

        messages.value.push(data);
    }

    return {
        chat,
        messages,
        sendMessage
    }
}