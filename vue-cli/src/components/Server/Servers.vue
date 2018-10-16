<template>
    <div class="col-xs-12 col-sm-6">
        <ul class="list-group">
            <li
                    class="list-group-item"
                    v-for="server in servers">
                <app-each-server :id="server.id" :status="server.status"></app-each-server>
            </li>
        </ul>
    </div>
</template>

<script>
    import EachServer from './EachServer.vue';

    export default {
        components: {
            appEachServer: EachServer
        },
        data: function () {
            return {
                servers: [
                    {id: 1, status: 'Normal'},
                    {id: 2, status: 'Critical'},
                    {id: 3, status: 'Unknow'},
                    {id: 4, status: 'Normal'},
                    {id: 5, status: 'Offline'},
                ]
            };
        }
    }
</script>

<style scoped>
</style>