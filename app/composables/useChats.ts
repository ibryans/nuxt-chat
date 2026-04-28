import type { Chat } from "~/types";

export default function useChats() {
    const chats = useState<Chat[]>("chats", () => []);

    function createChat() {
        const id = (chats.value.length + 1).toString();

        const chat = {
            id,
            title: "New Chat #" + id,
            messages: []
        };

        chats.value.push(chat);
        return chat;
    }

    return {
        chats,
        createChat
    }
}