<script setup lang="ts">

import { useMouse } from '@vueuse/core'
import { ref, watch } from 'vue'

const { x, y } = useMouse()
const isShaking = ref(false)

watch([x, y], () => {
  isShaking.value = true
  setTimeout(() => {
    isShaking.value = false
  }, 500) // shake duration
})
</script>

<template><div>
    
<!-- Flex -->
<div class="relative container flex w-full">

    <!-- Logo and Site Name -->
    <div class="absolute top-[0.1rem] left-[0.8rem]">
        
        <!-- Logo -->
        <NuxtLink href='/'>
        <!-- Logo -->
        <ImgLogo class="z-0 inline-block w-16 h-auto m-0 mt-[0.15rem] p-1 pr-0"/>  
        </NuxtLink>

        <!-- Site Name -->  
        <div class='z-10 inline-block align-middle m-0 p-0 
            bg-[--body-light] dark:bg-[--body-dark] 
            text-[--accent-light] dark:text-[--accent-dark] rounded-lg'>
            <NuxtLink href='/'>
                <span class="text-sky-500 text-[9px] w-fit m-0 mt-2 ml-0 p-0 pr-2">.annebrown.ca</span>
            </NuxtLink>
        </div>
    </div><!-- Logo and Site Name -->

    <div class="grow">&nbsp;</div>

    <!-- Main App Menu -->
    <div class="absolute top-[1.25rem] right-3">
        <ShipMenu id="main-menu" class="px-3 py-1" />
    </div>

</div><!-- Flex -->

</div></template>
