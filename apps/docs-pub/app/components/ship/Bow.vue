<!--------@/components/ship/Bow.vue-------------------------------------------->
<template><div>
    
<!-- Flex -->
<div class="relative container flex w-full">

    <!-- Logo and Domain Name -->
    <div class="absolute top-[0.1rem] left-[0.8rem]">
        
        <!-- Logo -->
        <NuxtLink href='/'>
            <ImgLogo class="z-0 inline-block w-70 h-auto 
                m-0 mt-[0.15rem] p-1 pr-0"/>  
        </NuxtLink>

        <!-- Domain Name -->  
        <div class='z-10 inline-block align-top m-0 mt-4 p-0
            text-[--accent-light] dark:text-[--accent-dark]'>

            <NuxtLink href='/'>
                <span class="w-fit h-fit m-0 p-0
                    text-sky-500 text-[12px]"
                >
                    .annebrown.ca
                </span>
            </NuxtLink>

        </div><!-- Domain Name -->

    </div><!-- Logo and Domain Name -->

    <div class="grow">&nbsp;</div>

    <!-- App Menu -->
    <div class="absolute top-[1.1rem] right-3">
        <ShipMenu id="main-menu" class="px-3 py-1 text-base" />
    </div>

</div><!-- Flex -->

</div></template>
<!--------@/components/ship/Bow.vue-------------------------------------------->