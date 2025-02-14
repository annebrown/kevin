<!--------@@/base/components/content/ProseUl.vue------------------------------->
<!-- Automatically used for uls in md files -->
<template>
    <ul class="dash-list">
      <slot />
    </ul>
  </template>
  
  <style scoped>
  .dash-list {
    list-style-type: none;
  }
  
  .dash-list ::v-deep(li) {
    position: relative;
  }
  
  .dash-list ::v-deep(li::before) {
    content: "- ";
  }
  </style>
<!--------@@/base/components/content/ProseUl.vue------------------------------->