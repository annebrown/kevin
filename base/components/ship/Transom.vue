<!--------@@/base/components/ship/transom.vue---------------------------------->
<template><div>

    <!-- Flex -->
    <p class="relative h-7 align-top  text-xs
        text-[--text-dimmed-light] dark:text-[--text-dimmed-dark]">

        <!-- Copyright String -->
        <span class="absolute inline-block bottom-[0.9rem] left-0 m-0 ml-1 p-0">

            Copyright

            <!-- @ Shortcut -->
            <NuxtLink  
                :prefetch="false" 
                href="/devy"
                class="
                    text-[--text-dimmed-light] dark:text-gray-400"
            >
                @ 
            </NuxtLink><!-- @ Shortcut -->

            2025

            <NuxtLink href='https://www.annebrown.ca'>
                <span  class=" ml-1 
                    text-[--primary-dimmed-light] 
                    dark:text-[--primary-dimmed-dark]">
                    Anne Brown
                </span>
            </NuxtLink>

        </span><!-- Copyright String -->

         <!-- Center of Transom -->
        <span><!-- spacer --></span>
       
         <!-- GitHub & Color Mode Toggle -->
        <span class="absolute -top-1 right-0 m-0 p-0">
            <!-- GitHub -->
            <ImgSocialIcons class="social-icon inline-block align-bottom 
                m-0 mb-2 p-0" />
            <!-- Color Mode Toggle -->
            <ImgColorModeSwitch class="mode-icon inline-block align-top 
                 m-0 p-0" />
        </span>

    </p><!-- Flex -->  

</div></template>
<!--------@@/base/components/ship/transom.vue---------------------------------->