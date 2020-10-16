<template>
  <nav class="navbar is-black">
    <div class="navbar-brand">
    </div>
    <div class="navbar-menu is-active">
      </div>
        <div class="navbar-item">
          <router-link to="/" class="navbar-item"><h1 class="is-size-2">Taulukko</h1></router-link>
          <router-link to="/map" class="navbar-item"><h1 class="is-size-2">Map</h1></router-link>

        </div>


  </nav>
</template>

<script>

export default {
  name: "Header",
  data(){
    return{


    }
  },
  computed: {
  },
  created() {

  },
  updated() {

  },
  methods: {

  }

}
</script>

<style scoped>

</style>
