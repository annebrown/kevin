<!-------------------@/components/content/NavigationItem.vue------------------->
<script setup lang="ts">
    defineProps<{ item: any; level: number; }>()

    const openItems = inject('openItems')
    const toggleItem = inject('toggleItem')
    const isPathMatched = inject('isPathMatched')

    import { useRoute } from 'vue-router'
    const route = useRoute()

    const isActive = (path) => {
        return route.path === path
    }
</script>

<template><div>

<div :style="{ marginLeft: `${level * 8}px` }">
    <div class="link-text flex items-center max-w-fit mr-0 pr-0">

        <NuxtLink :to="item._path" 
            :class="{ 'font-bold': isPathMatched(route.path, item._path) }"
            class=" mr-0 pr-0 align-middle inline-block">
            {{ item.title }} 
        </NuxtLink>

        <UButton 
            v-if="item.children && item.children.length" 
            :icon="openItems.has(item._path) ? 'solar:eye-linear' : 'solar:eye-closed-linear'"
            @click="toggleItem(item._path)" 
            variant="link"
            size="xs"
            :class="{ 'text-current': isActive(item._path) }"
            class="inline-block align-bottom w-fit h-fit ml-1 mt-0 p-0 
                text-[--primary-light] dark:text-[--primary-dark]"
        />
        <span v-else class=" w-6 ml-2 mr-0 pr-0"></span>

    </div>

    <!-- Children -->
    <ul v-if="item.children && item.children.length && openItems.has(item._path)" class="list-none">
        <li v-for="child in item.children" :key="child._path">
            <NavigationItem :item="child" :level="level + 1" />
        </li>
    </ul>

</div>

</div></template>
<!-------------------@/components/content/NavigationItem.vue------------------->