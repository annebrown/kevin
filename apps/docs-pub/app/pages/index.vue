<!---------@/pages/index.vue--------------------------------------------------->
<script lang="ts" setup>
    definePageMeta({
        title: 'Docs-Pub',
        description: 'CMS Client Demo',
    })
</script>

<template><div>
    <NuxtLayout name="splash">

        <!-- Relative -->
        <div class="">

            <span 
                class="text-2xl font-bold mb-8 ml-4 pb-8
                    text-[--accent-light] !dark:text-[--accent-dark]">
                DOCS-PUB
            </span>
            <span class="text-sm font-bold mb-0 -ml-2 pb-0 
                text-[--primary-light] !dark:text-[--primary-dark]">
                .annebrown.ca
            </span>

            <NuxtImg 
                src="logo.svg" 
                width="100" 
                height="100" 
                alt="logo" 
                class="mx-auto m-0 mt-8 mb-5 p-0"/>

            <p class="text-center text-3xl mb-10">
                CMS Client Demo
            </p>
   
        </div><!-- Relative -->

    </NuxtLayout>
</div></template>
<!---------@/pages/index.vue--------------------------------------------------->