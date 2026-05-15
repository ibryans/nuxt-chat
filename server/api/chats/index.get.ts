import { getAllChats } from "~~/server/repository/chatRepository"

export default defineEventHandler(async () => {
    return getAllChats();
})