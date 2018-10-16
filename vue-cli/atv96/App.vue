<!--  my part
<template>
 <app-server></app-server>
</template>

<script>

</script>

<style>

</style>
-->
<template>
 <div class="container">
  <app-header></app-header>
  <hr>
  <div class="row">
   <app-server></app-server>
   <app-server-details></app-server-details>
  </div>
  <hr>
   <app-footer></app-footer>
 </div>
</template>

<script>
/
    import Servers from './components/Server/Servers.vue'
    import Footer from './components/Shared/Footer.vue'
    import Header from './components/Shared/Header.vue'
    import ServerDetails from './components/Server/ServerDetails.vue'

    export default {
        components: {
            'app-server': Servers,
            'app-footer': Footer,
            'app-header': Header,
            'app-server-details': ServerDetails
        }
    }

</script>

<style>

</style>
