<!----------------------------@/layouts/default.vue---------------------------->
<script setup lang="ts">
    import { computed } from 'vue'
    import { useRoute } from 'vue-router'

    const { toc } = useContent()
    const route = useRoute()

    const isIndexPage = computed(() => {
        // Path doesn't ends with '/' or is not exactly '/'
        return route.path !== '/' || !route.path.endsWith('/')
    })

    // Breadcrumbs
    const breadcrumbLinks = computed(() => {
        const links = [{ label: 'DOCS', to: '/' }];
        const pathSegments = route.path.split('/').filter(Boolean);
        
        pathSegments.forEach((segment, index) => {
            links.push({
                label: segment.charAt(0).toUpperCase() + segment.slice(1),
                to: '/' + pathSegments.slice(0, index + 1).join('/')
            });
        });
        return links;
    });
</script>

<!-- Layout (Single Root Element) -->
<template><div>
    
    <!-- Midships -->
    <div class="min-w-96 container relative mt-[2px] mx-auto p-0 pb-2">

        <!-- Breadcrumb -->
        <div class="float-right m-0 mr-0.2 p-0">  
            <UBreadcrumb 
                :links="breadcrumbLinks" 
                divider="/" 
                :ui="{
                    ol: 'flex items-center gap-x-0',
                    li: 'flex items-center gap-x-0 text-xs leading-6 min-w-0',
                    active: 'text-current dark:text-current'
                }"
                class="gunnel display-block w-full float-right mt-1 px-2 
                    text-current dark:text-current text-xs"
            />
        </div><!-- Breadcrumb -->

        <!-- StarGunnel -->
        <div v-if="toc && toc.links && toc.links.length > 1">
            <StarGunnel class="clear-both float-right gunnel 
                h-fit w-fit mt-1 -mr-8 p-2 text-xs" />
        </div><!-- StarGunnel --> 

        <!-- PortGunnel -->
        <PortGunnel class="float-left gunnel h-fit w-fit 
             -mt-2 mr-4 mb-2 -ml-8 p-0 text-xs"/>

        <!-- Float -->
        <div class="min-w-72 pt-3 px-8 mb-0 pb-0 text-justify">

            <!-- Keep Together -->
            <div class="mb-8">
                        
                    <ContentDoc v-slot="{ doc }">

                    <!-- Title -->
                    <h1 id="title" class="title w-full mt-5 mb-0 pb-0">
                        <slot name="title">{{ doc.title }}</slot>
                    </h1>
                    
                    <!-- Description -->
                    <p class="w-full m-0 p-0 text-sm">
                        {{ doc.description }} 
                    </p>
                    <!-- Last Modification -->
                    <p v-if="!isIndexPage" class="w-full m-0 p-0 pb-5 text-sm
                        text-[--accent-light] dark:text-[--accent-dark]">
                        {{ doc.lastModified }}
                    </p>
        
                </ContentDoc>

            </div><!-- Keep Together -->
            
            <!-- Cargo -->
            <ContentDoc v-slot="{ doc }" class="min-w-full"> 

                <!-- Cargo -->     
                <div class=" min-w-full mt-0 p-0">
                    <ContentRenderer :value="doc" class="w-full" />
                </div><!-- Cargo-->

            </ContentDoc><!-- Cargo -->

            <!-- Child Route Cards-->
            <RouteDynamicImmediateChildCards class="m-0 mt-8" />

        </div><!-- Float -->

        <!-- Rqd for Midships Bg Color -->
        <p class="clear-both float-none">&nbsp;</p>

    </div><!-- Midships -->

</div></template><!-- Layout (Single Root Element) -->
<!----------------------------@/layouts/default.vue---------------------------->