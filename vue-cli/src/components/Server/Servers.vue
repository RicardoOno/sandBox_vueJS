<template>
    <div class="col-xs-12 col-sm-6">
        <ul class="list-group">
            <li
                    class="list-group-item">
                <app-each-server
                        v-for="server in servers"
                        :id="server.id"
                        :status="server.status">
                </app-each-server>
            </li>
        </ul>
    </div>
</template>

<script>
    import EachServer from './EachServer.vue';
    import { eventBus } from '../../main.js';

    export default {
        components: {
            appEachServer: EachServer
        },
        data: function () {
            return {
                servers: [
                    {id: 1, status: 'Normal'},
                    {id: 2, status: 'Critical'},
                    {id: 3, status: 'Unknown'},
                    {id: 4, status: 'Normal'},
                    {id: 5, status: 'Offline'},
                ]
            };
        }
    }
</script>

<style scoped>
</style>