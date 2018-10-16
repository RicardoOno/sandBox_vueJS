<template>
    <div class="col-xs-12 col-sm-6">
        <p>Server Details are currently not updated</p>
        <h4>Status: {{ status }}</h4>
    </div>
</template>
<script>
    import { eventBus } from '../../main.js';

    export default {
        data: () => {
            return {
                status: ''
            };
        },
        created(){

            eventBus.$on('statusChanged', (status) => {
                this.status = status;
            });
        }
    }
</script>
<style scoped>
    div {
        border: 1px solid red;
    }
</style>