<template>
    <div class="col-xs-12 col-sm-6">
        <p>Server Details are currently not updated</p>
        <hr>
        <div v-if="info.id == null ? true : false">

            <h3>Select one server on the list</h3>
        </div>
        <div v-else>
            <h1>Servidor: #{{ info.id }}</h1>
            <h4>Status: {{ info.status }}</h4>
            <button class="btn" @click="change"> Update Server status</button>
        </div>
    </div>
</template>
<script>
    import { eventBus } from '../../main.js';
    let y = -1, x;
    export default {
        data: () => {
            return {
                info: []
            };
        },
        created(){

            eventBus.$on('statusChanged', (datas) => {
                this.info = datas;
            });
        },
        methods: {
            change(){
                let auxStatus;

                do {
                    x = Math.max(Math.floor(Math.random() * 3) + 1, 0);
                    if(x != y){
                        if (x == 1) {
                            auxStatus = 'Normal';
                        } else if (x == 2) {
                            auxStatus = 'Critical';
                        } else if (x == 3) {
                            auxStatus = 'Unknown';
                        } else {
                            auxStatus = 'Offline'
                        }
                        y = x;
                        break;
                    }
                } while(1);


                this.info.status = auxStatus;
                this.$emit("updatedInfo", this.info.status);

            }
        }
    }
</script>
<style scoped>
    .btn {
        position: absolute;
        right: 15px;
        margin-top: 30px;
    }
</style>