<!---@/pages/apps.vue---------------------------------------------------------->
<script lang="ts" setup>
    definePageMeta({
        title: 'Apps',
        description: 'Monorepo Demo Apps',
    })
    import { UiProjectCard } from '#components'
    import { resolve } from "path" // Rqd for locally cloned CMS

    import { projectData } from 
        '../../../../base/assets/data/apps/projectCardData'
</script>

<template><div>

<NuxtLayout name="splash">
    <!-- Title -->
    <h1>Monorepo Apps</h1>

    <!-- Description -->
    <p class="mb-4">Apps Overview and URLs</p>

    <!-- Monorepo Apps -->
    <div class="flex flex-row flex-wrap gap-2 justify-normal">
        <UiProjectCard
        v-for="(project, index) in projectData"
        :key="index"
        :project="project"
        class="flex-1"
        />
    </div>
</NuxtLayout>

</div></template>
<!---@/pages/apps.vue---------------------------------------------------------->