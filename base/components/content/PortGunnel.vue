<!--------@@/base/components/content/ANavigationTree.vue----------------------->
<script setup lang="ts">
    import { useRoute, useState } from 'nuxt/app'
    const route = useRoute()

    import NavigationItem from './NavigationItem.vue'

    const { data: rawNavigation } = await useAsyncData('navigation', () => fetchContentNavigation())

    // Filter out child index routes
    const filterNavigation = (items) => {
    return items.filter(item => {
        // Exclude items with navigation: false in frontmatter
        if (item.navigation === false) {
        return false;
        }
        // Exclude index.md files (except root index)
        if (item._path.endsWith('/index') && item._path !== '/') {
        return false;
        }
        return true;
    }).map(item => ({
        ...item,
        children: item.children ? filterNavigation(item.children) : []
    }));
    }

    const navigation = computed(() => {
    return filterNavigation(rawNavigation.value || [])
    })

    const openItems = useState('navigationOpenItems', () => new Set())

    const isPathMatched = (currentPath, itemPath) => {
    return currentPath.startsWith(itemPath)
    }

    const toggleItem = (path) => {
    if (openItems.value.has(path)) {
        openItems.value.delete(path)
    } else {
        openItems.value.add(path)
    }
    }

    const expandToPath = (path) => {
    const parts = path.split('/').filter(Boolean)
    let currentPath = ''
    parts.forEach(part => {
        currentPath += '/' + part
        openItems.value.add(currentPath)
    })
    }

    watch(() => route.path, (newPath) => {
    expandToPath(newPath)
    }, { immediate: true })

    provide('openItems', openItems)
    provide('toggleItem', toggleItem)
    provide('isPathMatched', isPathMatched)

    // Show/Hide Port Gunnel
    import { ref } from 'vue'
    const isPortVisible = ref(true)
    const togglePortVisibility = () => {
        isPortVisible.value = !isPortVisible.value
    }
</script>

<template><div>

<!-- Port Gunnel -->
<div class="gunnel m-1 text-xs">

    <!-- v-if Navi -->
    <div v-if="isPortVisible">
        <ul v-if="navigation" class="list-none">
            <li v-for="item in navigation" :key="item._path">
            <NavigationItem :item="item" :level="0" />
            </li>
        </ul>
    </div><!-- v-if Navi -->

</div><!-- Port Gunnel -->

</div></template>
<!--------@@/base/components/content/ANavigationTree.vue----------------------->