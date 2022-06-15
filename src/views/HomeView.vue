<template>
  <div class="home">
    <div>
<div>kiu</div>
     <p v-for="(item,index) in ListProvince" :key="index">
       {{item.name}} / {{item.country_name}}
     </p>
    </div>
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  },
  data:()=>({
    ListProvince: [],
  }),

  methods: {
  fetchData (){

    this.$axios.get('/list/provinces').then((response) => {
     this.ListProvince = response.data.listProvinces
    }).catch(() => {
      console.log('error');
    });
  }
  
  },
  getParams(){
  console.log(this.$router.params.id);
  },
  created() {
    this.fetchData();  
    this.getParams();
  },
  
}
</script>
