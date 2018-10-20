<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <br>
                <button class="btn btn-primary" @click="text = 'appBlue'">Load Blue Template</button>
                <button class="btn btn-success" @click="text = 'appGreen'">Load Green Template</button>
                <button class="btn btn-danger" @click="text = 'appRed'">Load Red Template</button>
                <p>{{ text }}</p>
                <hr>
                <component :is="text">
                    <h1>Hi! Sup man</h1>
                </component>
            </div>
        </div>
    </div>
</template>

<script>
    import Blue from './components/Blue.vue';
    import Green from './components/Green.vue';
    import Red from './components/Red.vue';

    export default {
        data: () => {
            return {
                text: ''
            }
        },
        components: {
            appBlue: Blue,
            appGreen: Green,
            appRed: Red
        }
    }
</script>

<style>
</style>
