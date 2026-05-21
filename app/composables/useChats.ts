export default function useChats() {
    const { data: chats, pending, refresh } = useAsyncData("chats", async () => {
        const response = await $fetch<Chat[]>("/api/chats", { method: "GET" });
        return response;
    })

    async function createChat(title?: string) {
        return await $fetch("/api/chats", { 
            method: "POST", 
            body: { title }
        });
    }

    return {
        chats,
        pending,
        refresh,
        createChat
    }
}