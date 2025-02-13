<!--------@/components/content/StarGunnel.vue---------------------------------->
<script setup lang="ts">
    const { toc } = useContent()

    // Show/Hide Starboard Gunnel
    import { ref } from 'vue'
    const isStarboardVisible = ref(true)
    const toggleStarboardVisibility = () => {
        isStarboardVisible.value = !isStarboardVisible.value
    }
</script>

<template>

<!-- Starboard Gunnel -->
<div class="gunnel text-xs pb-0">

    <!-- TOC Header -->
    <div class="text-xs font-bold h-fit mb-0 pb-0">

        <!--Show/Hide Toggle-->
        <UButton
            :icon="isStarboardVisible ? 'solar:eye-linear' : 'solar:eye-closed-linear'"
            color="gray"
            variant="ghost"
            @click="toggleStarboardVisibility"
            class="inline-block align-middle p-0 w-5 h-5
                text-[--primary-light] dark:text-[--primary-dark]"
        />
        <!-- Text -->
        <span class="mr-1 px-1 align-middle text-xs font-bold text-current">
            ON THIS PAGE
        </span>

    </div><!-- TOC Header -->

    <!-- TOC -->
    <div v-if="isStarboardVisible" class="mt-0 pt-0 pb-1"> 
        <ul v-if="toc.links.length !== 0" id="sidebar" class="text-xs p-2">
            <li v-for="link in toc.links" :key="link.text" class="list-none">
                <NuxtLink :href="`#${link.id}`">
                    {{ link.text }}
                </NuxtLink>
            </li>
        </ul>
    </div><!-- TOC -->

</div><!-- Starboard Gunnel -->

</template>
<!--------@/components/content/StarGunnel.vue---------------------------------->