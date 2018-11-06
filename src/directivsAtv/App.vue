<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2">
                <h1 class="text-center">Built-in Directives</h1>
                <p v-text="'Some text'"></p>
                <p v-html="'<strong>Some strong text</strong>'"></p>
            </div>
        </div>
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2">
                <h1 class="text-center">Custom Directives</h1>
                <p v-highlight>Color this - 1</p>
                <p v-highlight2="'red'">Color this - 2</p>
                <p v-highlight3="'blue'">Color this - 3</p>
                <p v-highlight3:background="'blue'">Color this - 3</p>
                <p v-highlight4:background.delayed="'yellow'">Color this - 4</p>
                <p v-highlight4:background="'yellow'">Color this - 4</p>
                <p v-local-highlight:background.delayed.blink="{mainColor: 'yellow', secondColor: 'red'}">Color this - local directive</p>
                <p v-local-highlight:background.blink="{mainColor: 'black', secondColor: 'gray', delay: 300}">Color this - local directive</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        directives: { //local directives
            'local-highlight': {
                bind(el, binding, vnode){
                    let delay = 0;
                    if (binding.modifiers['delayed']) {
                        delay = 3000;//seconds
                    }
                    if (binding.modifiers['blink']) {
                        let mainColor = binding.value.mainColor;
                        let secondColor = binding.value.secondColor;
                        let currentColor = mainColor;
                        setTimeout(() => {
                            setInterval(() => {
                                currentColor == secondColor ? currentColor = mainColor : currentColor = secondColor;
                                if(binding.arg == 'background') {
                                    el.style.backgroundColor = currentColor;
                                } else {
                                    el.style.color = currentColor;
                                }
                            }, 1000);
                        }, binding.value.delay);
                    } else {
                        setTimeout(() => {
                            if (binding.arg == 'background') {
                                el.style.backgroundColor = binding.value;
                            } else {
                                el.style.color = binding.value;
                            }
                        }, delay)
                    }
                }
            }
        }
    }
</script>

<style>

</style>
