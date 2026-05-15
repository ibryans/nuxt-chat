import { createChat } from "~~/server/repository/chatRepository"

export default defineEventHandler(async (event) => {
    const body = await readBody(event);
    
    console.log("Body pego: ", body);

    return createChat({
        title: body.title
    })
})