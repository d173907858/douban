<template>
  <div class="app-header-nav">
    <transition enter-active-class="animated slideInLeft" leave-active-class="animated slideOutLeft">
      <nav v-if="isShow" >
        <ul class="nav-list">
          <li  v-for="nav in navs" :key="nav.id" class="nav-item">
            <router-link :to="nav.path"  @click.native="tagNav" >{{nav.title}} <i class="fa fa-angle-right"></i> </router-link>
          </li>
        </ul>
      </nav>
    </transition>
    <transition enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
     
    </transition>
  </div>
</template>

<script>

export default {
  name:'app-header-nav',
  props:['isShow','tagNav'],
  data () {
    return {
      navs:[
        {id:1,title:'专栏连载',path:'/home'},
        {id:2,title:'短片作品',path:'/films'}
 
      ]
    }
  }
}
</script>

<style lang="scss">

.app-header-nav{
  position: fixed;
  left: 0;right: 0;top: 0;
  z-index: 499;
  

  nav{
    // padding-top: 50px;
    width: 2.65rem;
    
    box-shadow: 0 1px 1px #363636 inset;
    background: #3e4347;
    position:fixed;
    top: 45px;
    left: 0;
    bottom: 0;

    z-index: 10;
    animation-duration: 0.5s;
  }
  .mask{
  	position:fixed;
    z-index:9;
    background: rgba(0,0,0,0.5);
    animation-duration: 0.5s;
     left: 0;right: 0;top: 0;bottom:0;
  }
  .nav-list{
    border-top: 1px solid #222;  

    li{
      line-height: 50px;
      a{
        width: 100%;
        padding: 0 16px;
        border-bottom: 1px dotted #333;
        display: flex;justify-content: space-between;align-items: center;
        color: #999;
      }
    }
  }
}
</style>

