const storage = useStorage<Chat[]>("db");
const chatsKey = "chats:all";

async function getChats(): Promise<Chat[]> {
    let chats = await storage.getItem(chatsKey);

    if (!chats) {
        chats = [];
        await saveChats(chats);
    }

    return chats;
}

async function saveChats(chats: Chat[]): Promise<void> {
    await storage.setItem(chatsKey, chats);
}

export async function getAllChats(): Promise<Chat[]> {
    const chats = await getChats();

    return chats
        .map(chat => {
            const lastMessage = chat.messages.at(-1);
            return {
                ...chat,
                messages: lastMessage ? [lastMessage] : []
            }
        })
        .sort((a,b) => {
            return new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()
        })
}

export async function createChat(data: { title?: string }): Promise<Chat> {
    const newChat: Chat = {
        id: Math.random().toString(),
        title: data.title || "New chat",
        messages: [],
        createdAt: new Date(),
        updatedAt: new Date()
    }

    const chats = await getChats();
    chats.push(newChat);
    await saveChats(chats);

    return newChat;
}