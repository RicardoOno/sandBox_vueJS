<template>
    <div>
        <li class="list-group-item"
        style="cursor: pointer"
        @click="serverSelected">
            Server #{{ server.id }}
        </li>
    </div>
</template>

<script>
    import { serverBus } from '../../main.js';

    export default {
        props: {
           server: {
               type: Array
           }
        },
        methods: {
            serverSelected(){
                serverBus.$emit('selectedServer', this.server);
            }
        }
    }
</script>
<style>
    #btn-change {
        position: absolute;
        right: 3px;
        bottom: 3px;
    }
</style>