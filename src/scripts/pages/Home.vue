<template>
  <div>
    <h1>Homepage</h1>
    <img
      :src="veronique"
      style="max-width:100%;"
    >
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import veronique from 'images/veronique.jpg';

export default Vue.extend({
  data() {
    return {
      veronique,
    };
  },
});
</script>
