<template>
  <div id="app" class="wrapper">
    <my-header></my-header>
    <my-aside></my-aside>
    <div class="content-wrapper">
      <router-view></router-view>
    </div>
    
    <my-footer></my-footer>
  </div>
</template>

<script>
import myHeader from './components/layout/header.vue'
import myAside from './components/layout/aside.vue'
import myFooter from './components/layout/footer.vue'
export default {
  name: 'app',
  components: {
    myHeader,
    myAside,
    myFooter
  }
}
</script>
