export default defineEventHandler(async (event) => {
    const { id } = getRouterParams(event);
    
    if (!id) {
        return createError("Id not found");
    }

    return {
        id,
        title: "New chat"
    }
})