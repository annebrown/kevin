<!--------@@/base/components/content/StarGunnel.vue---------------------------->
<template><div>

<!-- Starboard Gunnel -->
<div class="gunnel text-xs">

    <!-- TOC Header -->
    <div class="text-xs font-bold h-fit mb-1">
        <span class="text-xs font-bold pl-1 align-middle text-current">
            ON THIS PAGE
        </span>
        <!--Show/Hide Toggle-->
        <UButton
            :icon="isStarboardVisible ? 'solar:eye-linear' : 'solar:eye-closed-linear'"
            color="gray"
            variant="ghost"
            @click="toggleStarboardVisibility"
            class="inline-block align-middle p-0 w-5 h-5
                text-[--primary-light] dark:text-[--primary-dark]"
        />

    </div><!-- TOC Header -->

    <!-- v-if TOC -->
    <div v-if="isStarboardVisible">
        <ul v-if="toc.links.length !== 0" 
            class="text-xs p-2 pt-0 pb-0 list-none">
            <li v-for="link in toc.links" :key="link.text" class="">
                <NuxtLink :href="`#${link.id}`">
                    {{ link.text }}
                </NuxtLink>
            </li>
        </ul>
    </div><!-- v-if TOC -->
</div><!-- Starboard Gunnel -->

</div></template>

<script setup lang="ts">
    const { toc } = useContent()

    // Show/Hide Starboard Gunnel
    import { ref } from 'vue'
    const isStarboardVisible = ref(true)
    const toggleStarboardVisibility = () => {
        isStarboardVisible.value = !isStarboardVisible.value
    }
</script>
<!--------@@/base/components/content/StarGunnel.vue---------------------------->
