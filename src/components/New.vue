<template>
    <div><h3>New Quote</h3>
        <button @click="counter++">Click here</button>
        <hr>
        {{ counter }}
    </div>
</template>
<script>
    export default{
        data: function(){
            return {
                counter: 0
            };
        },
        destroyed(){
            /* if you remove the keep-alive in App.vue, this log will show */
            console.log("Destroyed");
        },
        deactivated(){
            console.log("Deactivated");
        },
        activated(){
            console.log("Activated");
        },
        updated(){
            console.log("Updated");
        }
    }
</script>
<style>

</style>