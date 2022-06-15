<template>
<div>
 <section class=" is-fullheight">
   <div class="title">
     <p class="p">ກາລຸນາເຂົ້າລະບົບ</p>
   </div>
  <div class="hero-body">
    <div class="container">
      <div class="columns is-centered">
        <div class="column is-5-tablet is-4-desktop is-3-widescreen">
          <div class="box">
            <div class="field">
              <label for="" class="label">ອີເມວ</label>
              <div class="control has-icons-left">
                <input type="email" placeholder="ອີເມວ" class="input" v-model="value.email" required>
                <span class="icon is-small is-left">
                  <i class="fa fa-envelope"></i>
                </span>
              </div>
            </div>
            <div class="field">
              <label for="" class="label">ລະຫັດຜ່ານ</label>
              <div class="control has-icons-left">
                <input type="password" placeholder="*******" class="input" v-model="value.password" required>
                <span class="icon is-small is-left">
                  <i class="fa fa-lock"></i>
                </span>
              </div>
            </div>
            <div class="remmer">
              <label for="" class="checkbox">
                <input type="checkbox">
               ຈື່ໃວ້ເຂົ້າລະບົບ
              </label>
            </div>
            <div class="field" @click="signin()">
              <button class="button is-success">
                ເຂົ້າລະບົບ
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</div>

</template>

<script>
import { mapActions } from 'vuex';

export default {
data:() =>({
  value: {
    email: '',
    password: ''
  }
}),
methods: {
  ...mapActions({
    Userlogin: 'AuthUser/UserLogin'
  }),

signin(){
  this.Userlogin(this.value).then(() => {
    setTimeout(() =>{
      console.log('success');
    }, 300);

  }).catch(()=>{

  });
},
}
}
</script>

<style lang='scss' scoped>
.title{
  margin-top: 100px;
.p{
    color:black;
    font-size: 60px;
}
}
.label{
  margin-right:200px
 
}
.remmer{
  margin-right:200px
}

</style>