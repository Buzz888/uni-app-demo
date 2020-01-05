<template>
  <v-app id="inspire">
     <Vfooter></Vfooter> 
    

    <Toolbar>
    <v-content>
    <router-view></router-view>
    </v-content>
    </Toolbar>
  
  </v-app>
</template>
<script>
  export default {
    props: {
      source: String,
    }
  }
</script>
<style scoped>

</style>
