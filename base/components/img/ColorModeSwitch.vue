<!--------@@/base/components/img/ColorModeSwitch.vue--------------------------->
<script setup lang="ts">
    const colorMode = useColorMode()
    const onClick 
        = () => (colorMode.value === 'light' ? (colorMode.preference = 'dark') : (colorMode.preference = 'light'))
</script>

<template><div>
    
    <button 
        aria-label="Color Mode" 
        @click="onClick"
    >
        <ColorScheme>

            <template v-if="colorMode.value === 'dark'">
                <svg 
                    fill="none"
                    viewBox="0 0 24 24"
                    width="1.5rem" height="1.5rem"
                >
                    <path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/>
                </svg>
                <span class="sr-only">Dark Mode</span>
            </template>

            <template v-else>
                <svg 
                    fill="none"
                    viewBox="0 0 24 24"
                    width="1.5rem" height="1.5rem"
                >
                    <path d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/>
                </svg>
                <span class="sr-only">Light Mode</span>
            </template>

        </ColorScheme>
    </button>

</div></template>
<!--------@@/base/components/img/ColorModeSwitch.vue--------------------------->