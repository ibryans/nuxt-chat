<script setup>
    definePageMeta({
        layout: "blue"
    });

    const { messages, sendMessage } = useChat();

    function talk() {
        const message = "Hello world!";
        console.log("Mandando a mensagem...");
        sendMessage(message);
    }
</script>

<template>
    <UContainer>
        <h1>Chat page</h1>

        <UButton @click="talk">Send a message</UButton>

        <p v-for="message of messages" :key="message.id">
            {{ message.content }}
        </p>
    </UContainer>
</template>