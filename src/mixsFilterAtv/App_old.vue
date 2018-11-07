<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1 class="text-center">Filters & Mixins</h1>
                <p>{{ text | to-lowercase }}</p>
                <button @click="fruits.push('Berry')">Add new item</button>
                <input v-model="filterText">
                <ul>
                    <li v-for="fruit in filteredFruits">{{ fruit }}</li>
                </ul>
                <hr>
                <app-list></app-list>
            </div>
        </div>
    </div>
</template>

<script>
    import List from './List.vue';
    import { fruitMixin } from './fruitMixin';

    export default {
        components: {
            appList: List
        },

        mixins: [fruitMixin],

        data() {
            return {
                text: 'Hello there!'
            }
        }
    }
</script>

<style>
</style>
