<template>
    <div class="component">
        <h3>You may view the user detail here</h3>
        <p>Many Detail</p>
        <p>User Name: {{ userName }} - {{ switchName() }}</p>
        <p>User age: {{ userAge }}</p>
        <button @click="resetName">Reset name</button>
        <button @click="resetFn()">Reset name</button>
    </div>
</template>
<script>


    import { eventBus } from '../main';

    export default {
        props: { //validating props
            //userName: [String, Array],
            userName: {
                type: String,
                default: 'None'
            },
            resetFn: Function,
            userAge: Number
        },
        methods: {
            switchName(){
                return this.userName.split("").reverse().join("");
            },
            resetName(){
                this.userName = 'Max';
                 //this.$emit('nameWasReset', this.userName);
            }
        },
        created(){
            eventBus.$on('ageWasEdit', (data) => {
                this.userAge = data;
            });
        }
    }
</script>
<style scoped>
    div {
        background-color: lightcoral;
    }
</style>