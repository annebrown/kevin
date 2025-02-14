<!--------@/layouts/Splash.vue------------------------------------------------->
<!-- Layouts -> Single Root Element -->
<template><div>

    <!-- Midships -->
    <div class="relative min-w-96 p-1 sm:p-2 md:p-4">
    
        <!-- Title -->
        <h1 class="pt-4">
            <slot name="title"></slot>
        </h1>
    
        <!-- Description -->
        <p id="description" class="text-center text-xs">
            <slot name="description"></slot>
        </p>
    
        <!-- Cargo -->
        <div id="cargo">
            <slot></slot>
        </div>
    
    </div><!-- Midships -->
    
    </div></template><!-- Layouts -> Single Root Element -->

<!--------@/layouts/Splash.vue------------------------------------------------->