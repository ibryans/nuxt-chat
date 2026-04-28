<script setup lang="ts">
    const route = useRoute();

    const { messages, sendMessage } = useChat(route.params.id as string);

    definePageMeta({
        name: "Chat"
    })

    const input = ref("");
    const typing = ref(false);

    const submit = async () => {
        const payload = input.value;
        
        typing.value = true;
        input.value = "";
        
        await sendMessage(payload);
        
        typing.value = false;
    }
</script>

<template>
    <UContainer class="chat">
        
        <UChatMessages 
            :messages="messages"
            :status="typing ? 'submitted' : 'ready'"
            class="chat__messages">
            
            <template #content="{ message }">
                <MarkdownRenderer :content="message.content" />
            </template>
        </UChatMessages>
        
        <UChatPrompt
            v-model="input"
            class="chat__prompt"
            variant="soft" 
            @submit="submit">

            <UChatPromptSubmit/>
        </UChatPrompt>

    </UContainer>
</template>

<style lang="css" scoped>
    @reference "../../assets/css/main.css";

    .chat {
        flex: 1 1 auto;
        @apply flex items-center overflow-auto justify-center p-4 flex-col;
    }

    .chat__messages {
        @apply overflow-auto;
    }
</style>