<template>
    <div class="component">
        <h3>You may edit the user detail here</h3>
        <p>Edit me</p>
        <p>My age: {{ userAge }}</p>
        <button @click="editAge">Edit age</button>
    </div>
</template>
<script>
    import { eventBus } from '../main';

    export default {
        props: ['userAge'],
        methods: {
            editAge(){
                this.userAge = 30;
                //this.$emit('ageWasEdit', this.userAge);
               // eventBus.$emit('ageWasEdit', this.userAge);
                eventBus.changeAge(this.userAge);
            }
        }
    }
</script>
<style scoped>
    div {
        background-color: lightgreen;
    }
</style>