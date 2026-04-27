<script setup lang="ts">
    defineProps({
        content: {
            type: String,
            required: true
        }
    });
</script>

<template>
    <MDC :value="content" />
</template>