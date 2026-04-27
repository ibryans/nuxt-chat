<script setup>
    const { messages, sendMessage } = useChat();

    definePageMeta({
        name: "Chat"
    })

    const input = ref("");

    const submit = () => {
        sendMessage(input.value);
        input.value = "";
    }
</script>

<template>
    <UContainer class="chat">
        <UChatMessages 
            :messages="messages"
            class="chat__messages"
        />
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
    @reference "../assets/css/main.css";

    .chat {
        @apply h-full flex items-center justify-center p-4 flex-col;
    }

    .chat__messages {
        @apply justify-end;
    }
</style>