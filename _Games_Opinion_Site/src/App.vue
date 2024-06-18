<template>
  <div>
    <div>
      <TheNavBar />
    </div>
    <router-view/>
  </div>
</template>

<script>
import TheNavBar from '@/components/TheNavBar.vue';

export default {
  components: {
    TheNavBar
  },
}
</script>

<style>
#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
