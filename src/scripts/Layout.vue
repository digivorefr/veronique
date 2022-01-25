<template>
  <div class="layout">
    <Navbar />
    <main class="page">
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Navbar from 'scripts/components/Navbar.vue';
import Footer from 'scripts/components/Footer.vue';

export default Vue.extend({
  components: {
    Navbar,
    Footer,
  },
});
</script>
