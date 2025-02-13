<!--------@/components/content/ANavigationTree.vue----------------------------->
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

<template>

<!-- Port Gunnel -->
<div class="gunnel text-xs">

    <!-- Navi -->
    <ul v-if="navigation && isPortVisible" class="">
        <li v-for="item in navigation" :key="item._path" 
            class="m-1 ml-0 py-1 text-xs">
            <NavigationItem :item="item" :level="0" />
        </li>
    </ul>

</div><!-- Port Gunnel -->

</template>

<style scoped>
nav ul {
  list-style-type: none;
  padding: 0;
}

nav ul li {
  margin-bottom: 0.25rem;
}

nav a {
  display: block;
  color: inherit;
}
</style>
<!--------@/components/content/ANavigationTree.vue----------------------------->