<template>
    <div class="row">
        <app-quotes v-for="(quote, index) in quotes" @click.native="delQuote(index)">
            {{ quote }}
        </app-quotes>
    </div>
</template>
<script>
    import Quotes from './Quotes.vue';

    export default {
        props: ['quotes'],
        components: {
            appQuotes: Quotes
        },
        methods: {
            delQuote(i){
                this.$emit('quoteDeleted', i);
            }
        }
    }
</script>
<style></style>