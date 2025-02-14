<!--------@/pages/about.vue---------------------------------------------------->
<template><div>
<NuxtLayout name="splash">

    <!-- Title -->
    <template #title class=""><span class="text-3xl mb-4 pt-8 pl-2 font-bold">
        About
    </span></template>

    <!-- Sub-Titles -->
    <p class="m-0 mt-10 mx-2 pb-1.5 text-sm">
        Nuxt CMD Client
    </p>

    <div class="relative">

        <hr class="z-10 mx-2">

        <!-- Logo -->
        <NuxtImg 
            src="logo-docs.svg"
            width="80"
            class="z-50 absolute -bottom-[1.5rem] right-4 
            h-auto pb-22 aspect-26/24"
        /> 

    </div>

    <p class="mx-2 mb-4 p-2 pl-0 text-sm">
        <NuxtLink href="https://www.annebrown.ca/dash">
            Other Sites
        </NuxtLink>
    </p>

</NuxtLayout>
</div></template>

<script setup lang="ts">
definePageMeta({
    title: 'ABOUT',
    description: 'CMS Client',
})
</script>
<!--------@/pages/about.vue---------------------------------------------------->
