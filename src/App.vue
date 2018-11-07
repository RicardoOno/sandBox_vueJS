<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Animations</h1>
        <button class="btn btn-primary" @click="show = !show">Show alert</button>
        <hr>
        <select class="form-control" v-model="alertAnimation">
          <option value="fade">Fade</option>
          <option value="slide">Slide</option>
        </select>
        <hr>
        <transition name="fade">
          <div class="alert alert-info" v-if="show">This is some Info</div>
        </transition>
        <transition name="slide" type="animation">
          <div class="alert alert-warning" v-if="show">This is some Warning</div>
        </transition>
        <transition name="fade" appear>
          <div class="alert alert-danger" v-if="show">This is some Danger</div>
        </transition>
        <transition
            enter-active-class="animated bounce"
            leave-active-class="animated shake"
        >
          <div class="alert alert-success" v-if="show">This is some Success</div>
        </transition>
        <transition :name="alertAnimation">
          <div class="alert alert-info" v-if="show">This is some input animation</div>
        </transition>
        <transition :name="alertAnimation" mode="out-in">
          <div class="alert alert-success" v-if="show" key="success">This is some Success</div>
          <div class="alert alert-danger " v-else key="danger">This is some Danger</div>

        </transition>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        show: true,
        alertAnimation: []
      }
    }
  }
</script>

<style>
  /*  *-enter | *-enter-active
      *-leave | *-leave-active
  all default class when 'transiction' tag with name is add
  -enter is the firs frame
  -enter-active is the acting
  */
  .fade-enter {
    opacity: 0;
  }
  .fade-enter-active {
    transition: opacity 1s;
  }
  .fade-leave {
    opacity: 1;
  }
  .fade-leave-active {
    transition: opacity 1s;
    opacity: 0;
  }

  .slide-enter {
   /*transform: translateY(20px);*/
    opacity: 0;
  }
  .slide-enter-active {
    animation: slide-in 1s ease-out forwards;
    transition: opacity 1s;
  }
  .slide-leave {

  }
  .slide-leave-active {
    animation: slide-out 1s ease-out forwards;
    transition: opacity 3s;
    opacity: 0;
  }
  @keyframes slide-in {
    from {
      transform: translateY(20px);
    }
    to {
      transform: translateY(0);
    }
  }
  @keyframes slide-out {
    from {
      transform: translateY(0);
    }
    to {
      transform: translateY(20px);
    }
  }
</style>
