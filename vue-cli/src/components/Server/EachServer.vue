<template>
    <div>
        Server #{{ id }} <button class="btn" id="btn-change" @click="change"> Change Status </button>
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
        methods: {
            change(){
                let auxStatus;
                let x = Math.max(Math.floor(Math.random() * 3)  + 1, 0);
                if(x == 1) {
                    auxStatus = 'Normal';
                } else if (x == 2) {
                    auxStatus = 'Critical';
                } else if (x == 3) {
                    auxStatus = 'Unknown';
                } else {
                    auxStatus = 'Offline'
                }
                this.status = auxStatus;
                eventBus.changeStatus(this.status);
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