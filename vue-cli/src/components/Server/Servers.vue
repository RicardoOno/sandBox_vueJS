<template>
    <div class="col-xs-12 col-sm-6">
        <ul class="list-group">
            <app-each-server
                    v-for="server in servers"
                    :server="server">
            </app-each-server>
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
                    {id: 1, status: 'Blocked'},
                    {id: 2, status: 'Critical'},
                    {id: 3, status: 'Unknow'},
                    {id: 4, status: 'Disable'},
                    {id: 5, status: 'Offline'},
                ]
            };
        }
    }
</script>

<style scoped>
</style>