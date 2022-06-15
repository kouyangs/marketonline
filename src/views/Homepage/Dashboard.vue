<template>
   <div class="container my-5 mt-5 mx-5 px-5">
    <h2 class="title is-2 is-capitalized">province</h2>
  
        <div class="field">
            <label for="name" class="label is-size-4 has-text-weight-light"></label>
                <input type="text" name="name" id="name" class="input"  v-model="value.name" placeholder="Name" autofocus>
        </div>
        <div class="field">
            <label for="email" class="label is-size-4 has-text-weight-light"></label>
      
                <input type="text" name="id" id="id" class="input"  v-model="value.country_id" placeholder="please Country ID">
        </div>
        <button type="submit" class="button is-success is-size-5" @click="SaveDate()">save</button>
    
</div>
</template>

<script>

export default {
  name: 'Dashboard',
data:() => ({
 value: {
   name: '',
   country_id:''
 }
}),


  methods:{
SaveDate(){
  this.$axios.post('add/provinces',{
    name:this.value.name,
    country_id: this.value.country_id,
  }).then(() =>{
    this.value = {},
    this.$router.push({name: 'home', params: {id:1}});
  }).catch(() => {

  });
},
  }
}
</script>

<style lang='scss' scoped>
.container{
   margin-top: 200px;
     margin-left: 200px;
.name{
  
  color: red;
  font-size: 40px;
  margin-left: 200px;
  margin-top: 100px;


}
}

</style>