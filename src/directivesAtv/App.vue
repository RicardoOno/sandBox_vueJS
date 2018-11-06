<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Directives Exercise</h1>
                <!-- Exercise -->
                <!-- Build a Custom Directive which works like v-on (Listen for Events) -->
                <p v-change-color:click="myFun">RICARDO </p>
                <button v-btn="alert">Click</button>
                <hr>
                <div
                        style="width: 100px; height: 100px; background-color: gray"
                        v-hover:hover="a"></div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        directives: {

            'change-color': {
                bind(el, binding, vnode){
                    let type = binding.arg;
                    let fun = binding.value;
                    el.addEventListener(type, fun);
                }
            },
            'btn': {
                bind(el, binding){
                    el.onclick = function(){
                        binding.value();
                    }
                }
            }
        },
        methods:{
            myFun() {
                console.log('is a click');
            },
            alert(){
                alert('a');
            },
            enter(){
                console.log('enter');
            },
            leave(){
                console.log('leave');
            }
        }
    }
</script>

<style>
</style>
