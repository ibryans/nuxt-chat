<script setup lang="ts">
    const route = useRoute();
    const { chats, createChat } = useChats();

    const pageTitle = computed(() => {
        return route.name?.toString();
    }); 

    const menuItems = computed(() => [
        {
            label: "Home",
            icon: "i-lucide-house",
            to: "/"
        },
        {
            label: "Chats",
            icon: "i-lucide-message-circle",
            defaultOpen: true,
            children: chats.value.map(chat => ({
                label: chat.title || "Untitled Chat",
                to: `/chats/${chat.id}`
            }))
        }
    ]);

    const handleCreateChat = () => {
        const newChat = createChat();
        navigateTo(`/chats/${newChat.id}`);
    };
</script>

<template>
    <UDashboardGroup class="dashboard">
        <UDashboardSidebar collapsible>
            <template #header="{ collapsed }">
                <h1 v-if="!collapsed" class="dashboard__logo"> 
                    Nuxt Chat 
                </h1>
                <h1 v-else class="dashboard__logo"> 
                    N 
                </h1>
            </template>

            <template #default>
                <UNavigationMenu
                    :items="menuItems"
                    orientation="vertical"
                />
            </template>
        </UDashboardSidebar>
        
        <UDashboardPanel>
            <UDashboardNavbar :title="pageTitle">
                <template #leading>
                    <UDashboardSidebarCollapse/>
                </template>

                <template #right>
                    <UButton @click="handleCreateChat">
                        <UIcon name="i-lucide-plus" size="18" />
                        New Chat
                    </UButton>
                </template>
            </UDashboardNavbar>
            
            <slot/>
        </UDashboardPanel>
    </UDashboardGroup>
</template>

<style scoped>
    @reference "../assets/css/main.css";

    .dashboard__logo {
        @apply text-xl font-bold text-center w-full;
    }
</style>