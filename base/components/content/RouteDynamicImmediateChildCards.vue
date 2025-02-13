<!--------@/components/content/RouteDynamicImmediateChildCarts.vue------------->
<script setup>
const route = useRoute()
const currentPath = route.path

// Fetch immediate subpages of the current page
const { data: allSubpages } = await useAsyncData(`subpages-${currentPath}`, () => 
  queryContent(currentPath)
    .where({ _path: { $contains: currentPath }, _path: { $ne: currentPath } })
    .find()
)

// Filter to get only immediate children
const immediateSubpages = computed(() => {
  if (!allSubpages.value) return []
  return allSubpages.value.filter(page => {
    const relativePath = page._path.slice(currentPath.length)
    return !relativePath.slice(1).includes('/')
  })
})
</script>

<template><div>

    <div class="flex flex-row gap-4 flex-wrap">
        <div v-for="page in immediateSubpages" :key="page._path" class="child-card card-shadowed-link">
            <NuxtLink :to="page._path">
                <h2 class="w-fit mx-auto pb-1 !leading-6 text-[--accent-light] dark:text-[--accent-dark]">{{ page.title }}</h2>
                <p class="w-fit mx-auto text-current text-xs">
                    {{ page.description }}
                </p>
            </NuxtLink>
        </div>
    </div>
    
</div></template>
  
<style scoped>
.child-card { @apply w-fit h-24 m-0 p-2 ring-1 rounded-md ring-[--accent-light] dark:ring-[--accent-dark] text-center bg-gray-950; }
</style>
  <!--------@/components/content/RouteDynamicImmediateChildCarts.vue------------->