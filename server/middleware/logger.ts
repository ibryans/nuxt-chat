export default defineEventHandler(async(event) => {
    const storage = useStorage("db");
    
    await storage.setItem(`temeletry:request:${Date.now()}`, {
        url: getRequestURL(event),
        method: event.method,
        headers: getRequestHeaders(event)
    })
})