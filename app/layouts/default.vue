<script setup lang="ts">
    import type { NavigationMenuItem } from "@nuxt/ui";

    const route = useRoute();

    const pageTitle = computed(() => {
        return route.name?.toString();
    }); 

    const menuItems: NavigationMenuItem[] = [
        {
            label: "Home",
            icon: "i-lucide-house",
            to: "/"
        },
        {
            label: "Chat",
            icon: "i-lucide-message-circle",
            to: "/chat"
        },
    ];
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