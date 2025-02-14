<!--------@@/base/components/ui/ProjectCard.vue-------------------------------->
<template><div>

<!-- Card -->
<div class="card-project">
    <NuxtLink :href="`${ project.productionUrl }`" class="flex-none">

        <!-- Logo -->
        <NuxtImg :src="`${ project.logoSrc }`"
            :alt="`${ project.title } logo`" 
            class="card-project-logo my-2 w-20 h-20 mx-auto" />

        <!-- Deets -->
        <div class="flex flex-col items-start gap-1">
        
            <!-- Title, Descr and Stack -->
            <h2 class="card-project-title mx-auto">{{ project.title }}</h2>
            <p class="card-project-descr mx-auto">{{ project.description }}</p>
            <p class="card-project-stack mx-auto">{{ project.stack }}</p>

            <!-- URLs -->
            <p class="card-deploy-type flex flex-row mx-auto gap-2">

                <!-- Repo -->
                <NuxtLink :href="`${ project.repo }`" class="flex-none">
                    <span :class="project.visibility === 'private' ?
                        'private' : 'public'">
                        Repo
                    </span>
                </NuxtLink> 

                <!-- Dev Server Addy-->
                <NuxtLink :href="`${ project.devUrl }`" 
                    class="flex-none text-[--text-light] dark:text-[--text-dark]">
                    Dev
                </NuxtLink> 

                <!-- Preview URL, If Exists -->
                <NuxtLink v-if="`${ project.previewUrl }`" 
                    :href="`${ project.previewUrl }`" class="grow">
                    Preview
                </NuxtLink> 

                <!-- Production URL -->
                <NuxtLink :href="`${ project.productionUrl }`" class="flex-none">
                    Prod
                </NuxtLink>

            </p><!-- URLs -->

        </div><!-- Deets -->
        
    </NuxtLink>
</div><!-- Card -->

</div></template>

<script lang="ts" setup>
 const props = defineProps({
  project: {
    type: Object,
    required: true
  }
}) 
</script>

<style scoped>
/* Title */
.card-project-title  { @apply text-[--accent-light] dark:text-[--accent-dark]; }
/* Grey-Out Priv Links */
.private { @apply text-current dark:text-[--text-current]; }
.public  { @apply text-[--primary-light] dark:text-[--primary-dark]; }
</style>
<!--------@@/base/components/ui/ProjectCard.vue-------------------------------->