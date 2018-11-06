import Vue from 'vue'
import App from './App.vue'

Vue.directive('highlight', { // see in Appveu
    bind(el, binding, vnode){
        el.style.backgroundColor = 'green';
    }
}); //global directive

Vue.directive('highlight2', { // see in Appveu
    bind(el, binding, vnode){
        el.style.backgroundColor = binding.value;
    }
}); //global directive

Vue.directive('highlight3', { // see in Appveu
    bind(el, binding, vnode){
        if(binding.arg == 'background'){
            el.style.backgroundColor = binding.value;
        } else {
            el.style.color = binding.value;
        }
    }
}); //global directive

Vue.directive('highlight4', { // see in Appveu
    bind(el, binding, vnode){
        let delay = 0;
        if(binding.modifiers['delayed']) {
          delay = 1500;//seconds
        }
        setTimeout(() => {
        if(binding.arg == 'background'){
          el.style.backgroundColor = binding.value;
        } else {
          el.style.color = binding.value;
        }
        }, delay)
    }
}); //global directive



new Vue({
    el: '#app',
    render: h => h(App)
})
