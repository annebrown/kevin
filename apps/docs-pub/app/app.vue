<!--------@/app.vue------------------------------------------------------------>
<template><div>  
<NuxtRouteAnnouncer /><!-- Assistive Technologies --> 

<!-- Center Everything -->
<div class="relative min-w-96 max-w-fit h-fit mx-auto pt-0 pb-[2rem] pl-[3rem] pr-4">

     <!-- Ship -->
    <div id="main" class="w-fit pt-2">
    
        <!-- Bow -->
        <ShipBow id="bow" class="w-full h-[2.2rem] m-0 p-0;" />

            <!-- Midships -->
            <div id="midships" class="min-w-96 p-2">
                <NuxtPage />
            </div>
        
        <!-- Transom -->
        <ShipTransom id="transom" class="mx-auto p-0 pt-1 px-2 text-xs" />
    
    </div><!-- Ship -->
   
</div><!-- Center Everything -->

</div></template>
<!--------@/app.vue------------------------------------------------------------>