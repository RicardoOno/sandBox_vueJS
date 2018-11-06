<template>
    <div>
        <div class="form-group">
            <label>{{ label }}</label>
            <input
                    :type="type"
                    :id="id"
                    :value="value"
                    @input="nameChanged($event)"
                    class="form-control">
        </div>
    </div>
</template>
<script>
    export default {

        props: ['label', 'type', 'id', 'value', 'var'],

        methods: {
            nameChanged(event) {
                let name = '';
                name = event.target.value;
                this.value = name;
                this.$emit('input', this.value);
                console.log("ret: ", this.value);
            }
        },
        computed:{
            name(){

                return this.value;
            }
        }
    }
</script>
<style>

</style>