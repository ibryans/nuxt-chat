export default defineAppConfig({
    title: "Nuxt Chat",
    description: "A simple chat application built with Nuxt 4 and Ollama's API.",
    ui: {
        button: {
            slots: {
                base: "cursor-pointer font-bold"
            }
        }
    }
})