<template>
    <div class="col-xs-12 col-sm-6">
        <h1 v-if="!server">Please, select a server</h1>
        <div v-else>
            <h1>Server #{{ server.id }}</h1>
            <h2>Status: {{ server.status }}</h2>
        </div>
        <hr>
        <button class="btn" @click="resetStatus"> Change to Normal status</button>
    </div>
</template>
<script>
    import { serverBus } from '../../main.js';

    export default {
        data: function(){
            return {
                server: null
            }
        },
        methods: {
            resetStatus(){
                this.server.status = 'Normal';
            }
        },
        created(){

            serverBus.$on('selectedServer', (server) => {
                this.server = server;
            });
        }
    }
</script>
<style scoped>
</style>