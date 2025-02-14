<!--------@@/base/components/content/ProsePre.vue------------------------------>
<template>
    <pre :class="$props.class" class="md-pre"><slot /></pre>
  </template>
  
  <script setup lang="ts">
  defineProps({
    code: {
      type: String,
      default: ''
    },
    language: {
      type: String,
      default: null
    },
    filename: {
      type: String,
      default: null
    },
    highlights: {
      type: Array as () => number[],
      default: () => []
    },
    meta: {
      type: String,
      default: null
    },
    class: {
      type: String,
      default: null
    }
  })
  </script>
  
  <style>
  pre code .line {
    display: block;
  }
  .md-pre {
    @apply inline-block w-fit mt-2 mb-4 p-2 py-0 px-4 text-xs
        rounded-md bg-[--body-bg-light] dark:bg-[--body-bg-dark]
        ring-1 ring-[--midships-light] dark:ring-gray-800;
}
  </style>
<!--------@@/base/components/content/ProsePre.vue------------------------------>