<template>
    <div class="row">
        <form>
            <div class="col-sm-8 col-sm-offfset-2 col-xs-12 col-md-6 col-md-offset-3">
                <label>Quote</label>
                <textarea class="form-control" cols="3" v-model="quote"></textarea>
            </div>
            <div class="col-sm-8 col-sm-offfset-2 col-xs-12 col-md-6 col-md-offset-3">
                <button class="btn btn-info" @click.prevent="createNew">Add new Quote</button>
            </div>
        </form>
    </div>
</template>
<script>
    export default {
        data: () => {
            return {
                quote: ''
            };
        },
        methods: {
            createNew(){
                this.$emit('quoteAdded', this.quote);
                this.quote = '';
            }
        }
    }
</script>
<style scoped>
    button {
        margin: 10px 0px 10px 0px;
    }
</style>