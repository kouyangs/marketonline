<template>
  <div id="app">
    <Sidebar v-if="!$route.meta.hidden"/>
    <div class="content" v-if="!$route.meta.hidden"> 
      <Navbar/>
      <div class="views">
        <router-view/>
      </div>
    </div>

    <div class="templete-login" v-if="$route.meta.hidden">
      <router-view/>
    </div>
    
  </div>
</template>

<script>
import Navbar from './components/Navbarsidebar/navbar';
import Sidebar from './components/Navbarsidebar/sidebar';

export default {
  components:{
      Navbar,
      Sidebar
  }
}
</script>

<style lang="scss">
@import '../public/scss/main.scss';


#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.content{
  margin-left: 260px !important;
  background-color: #f4f7f8 !important;
  min-height: 100vh;
  .views{
    padding: 50px 30px 30px 30px !important;
    // background-color: #f4f7f8 !important;
    // min-height: 100vh;
  }
}

// Custom Css
.vs-sidebar-content{
  border-radius: 0 !important;
}
.vs-sidebar__item__text{
  font-size: 14px !important;
}
.vs-sidebar__group__content .vs-sidebar__item{
  font-weight: normal !important;
  color: #020202;
}

.vs-sidebar-content .vs-sidebar__logo{
  margin-top: -20px;
  margin-left: -15px;
}
.vs-sidebar-content .vs-sidebar__logo img{
  max-height: 50px !important;
}

.vs-navbar-content{
  webkit-box-shadow: 0px 0px 25px 0px rgba(0, 0, 0, var(--vs-shadow-opacity));
  box-shadow: 0px 0px 25px 0px rgba(0, 0, 0, var(--vs-shadow-opacity));
  padding: 5px;
}

// Tables
.content table td, .content table th{
  padding: 8px !important;
  border-radius: 0 !important;
  font-size: 15px;
  background: $white !important;
}

.vs-table__th__content{
  font-size: 16px !important;
}
.vs-table__footer{
  // background: none !important;
  text-align: right !important;
  border-radius: 0 !important;
}

.vs-dialog{
  border-radius: 10px !important;
}

.vs-select{
  width: 183% !important;
  border: none !important;
}
.vs-select__chips__chip__close{
  background: none !important;
  display: none !important;
}
.vs-select__chips__input{
   font-family: $font !important;
   font-size: 16px !important;
}
.vs-select__chips__chip{
  background: $primary-color !important;
  color: $white !important;
  padding: 4px 6px 4px 6px !important;
}

.vs-notification{
  padding: 10px !important;
  border-radius: 5px !important;
}
.vs-notification__content{
  .vs-notification__content__header{
    h4{
      font-size: 16px !important;
      font-weight: normal !important;
    }
  }
 .vs-notification__content__text{
   p{
     font-size: 15px !important;
     font-weight: normal !important;
   }
 }
}

.vs-loading{
  background: none !important;
}

.multiselect__input, .multiselect__single{
  border: none !important;
}
.multiselect__option--highlight{
  background: $primary-color !important;
}
.multiselect__option--highlight:after{
  background: $primary-color !important;
}
.multiselect__tag{
  padding: 4px 26px 6px 10px !important;
  background: $primary-color;
}
.multiselect__tag-icon:after{
  color: $white;
}
.multiselect__tag-icon:hover{
  background: $primary-color !important;
}

.pac-container{
  z-index: 99999;
}
.vs-dialog-content{
  z-index: 1000 !important;
}
</style>
