<template>
  <div class="register">

<h2>Register</h2>
<div class="registers">
  <div class="form-group">
    <label for="exampleInputEmail1">username</label>
    <input v-model="username" type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter username">
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>

  <div class="form-group">
    <label for="exampleInputPassword1">password</label>
    <input v-model="password" type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
  </div>
  <button @click="register" type="submit" class="btn btn-primary">Submit</button>


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
    register(){
      console.log('register')
      axios({
        method:'post',
        url:'http://localhost:3000/users/register',
        data:{
          username:this.username,
          password:this.password
        }
      })
      .then((dataSignup)=>{
        console.log(dataSignup)
        localStorage.setItem('tokenblog', dataSignup.data.token)
        console.log(JSON.stringify(dataSignup))
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
.registers{
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
