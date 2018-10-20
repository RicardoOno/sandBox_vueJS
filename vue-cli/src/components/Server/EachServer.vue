<template>
    <div @click="showInfo">
        Server #{{ id }}
    </div>
</template>

<script>
    import { eventBus } from '../../main.js';

    export default {
        props: {
            id: {
                type: Number,
                default: 0
            },
            status: {
                type: String,
                required: true
            }
        },
        data: () => {
            return {
                info: []
            }
        },
        methods: {

            showInfo(){
                this.info = {status: this.status, id: this.id};
                eventBus.changeStatus(this.info);
                //this.$emit('infos2', this.info);
            }
        },
        updated(){
            this.$on('updatedInfo', (data) => {
                this.info.status = data;
            });
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