const chats: Chat[] = [];

export async function getAllChats(): Promise<Chat[]> {
    return [...chats]
        .sort((a,b) => {
            return b.updatedAt.getTime() - a.updatedAt.getTime()
        })
        .map(chat => {
            const lastMessage = chat.messages.at(-1);
            return {
                ...chat,
                messages: lastMessage ? [lastMessage] : []
            }
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

    chats.push(newChat);
    return newChat;
}