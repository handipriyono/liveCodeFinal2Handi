<template>
  <div class="login">

<h2>logins</h2>
<div class="loginlogin">
  <div class="form-group">
    <label for="exampleInputEmail1">username</label>
    <input v-model="username" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter username">
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>

  <div class="form-group">
    <label for="exampleInputPassword1">password</label>
    <input v-model="password" type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
  </div>
  <span @click="login" type="submit" class="btn btn-primary">Submit</span>


  </div>
</div>
</template>
<script>
const axios = require('axios')
export default {
  name: 'Login',
  data:function(){
    return {
      username:'',
      password:''
    }
  },

  methods:{
    login(){
      console.log('login')
      axios({
        method:'post',
        url:'http://localhost:3000/users/login',
        data:{
          username:this.username,
          password:this.password
        }
      })
      .then((datalogin)=>{
        console.log(datalogin)
        localStorage.setItem('tokenblog', datalogin.data.token)
        console.log(JSON.stringify(datalogin))
      })
      .catch(function(err){
        console.log(err)
      })
    }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.loginlogin{
  width:500px !important;
  margin:0px auto
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
