<script setup lang="ts">
definePageMeta({
    title: 'ABOUT',
    description: 'Nuxt CMS Client',
    order: 50,
})
</script>

<template><div>
<NuxtLayout name="splash">

    <!-- Title -->
    <template #title class=""><span class="text-3xl !pt-8 pl-2 font-bold">
        About
    </span></template>

    <!-- Sub-Titles -->
    <p class="mt-4 mb-0.5 mx-2 pb-0 text-lg font-bold ">
        <span class="text-[--accent-light] dark:text-[--accent-dark]">DOCS-PUB</span> - CMS Client
    </p>
    <p class="m-0 mx-2 pb-1.5 text-sm">
        Monorepo App Template Demo
    </p>

    <div class="relative">

        <hr class="mx-2">

        <!-- Logo -->
        <ImgLogo class="absolute -bottom-[1.25rem] right-2 w-24 h-auto pb-22 "/> 

    </div>
    <p class="mx-2 mb-4 p-2 pl-0 text-sm">
        <NuxtLink href="https://annebrown.ca/devy/projects/dash">
            Other Sites
        </NuxtLink>
    </p>

</NuxtLayout>
</div></template>
