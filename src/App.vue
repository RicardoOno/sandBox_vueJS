<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Filters & Mixins</h1>
                <input v-model="text" />
                <!-- Exercise 1) -->
                <!-- Build a local Filter which reverses the Text it is applied on -->
                <p>{{ text }} - {{ text | reverseText }}</p>
                <!-- Exercise 2 -->
                <!-- Build a global Filter which counts the length of a word and it appends it -->
                <!-- Like this: "Test" => Gets Filtered to => "Test (4)" -->
                <p>{{ text | count-string }}</p>
                <!-- Exercise 3 -->
                <!-- Do the same as in Exercises 1 & 2, now with Computed Properties -->
                <input v-model="text2" />
                <p>{{ text3 }}</p>
                <!-- Exercise 4 -->
                <!-- Share the Computed Property rebuilding Exercise 2 via a Mixin -->
                <p>Global computed property via mixin: {{ stringWcounter }}</p>
            </div>
        </div>
    </div>
</template>

<script>

    import { textJoke } from './textJoke';

    export default {
        data(){
            return {
                text: 'Vue JS 2 1',
                text2: ''
            }
        },
        mixins:[textJoke],
        filters: {
            reverseText: function(value){
               return  value.split('').reverse().join('');
            }
        },
       computed: { //exercise 3
            text3(){
                console.log('al');
                let x = this.text2.length;
                return this.text2.split('').reverse().join('') + ' (' + x +')';
            }
        }
    }
</script>

<style>
</style>
