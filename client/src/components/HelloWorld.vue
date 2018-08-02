<template>
  <div class="hello">
    <!-- <button type="button" class="btn btn-primary">Create artikel</button> -->
          <router-link class="btn btn-primary" to="/addpost">Create Article</router-link>
          <a @click="logouts" href="">LOGOUT</a>
    <br/>
    <br/>
    <Br/>
    <div class="container">
      <div class="row">
        <div v-for="i in artikel" class="col-8">

          <h2>  <router-link :to="`/articles/${i._id}`"> {{i.title}}</router-link></h2>
          {{i.content}}
          <div class="row">
            <button type="button" @click="deletes(i._id)" class="btn btn-danger">delete</button>
            <router-link :to="`/articles/edit/${i._id}`" type="button" class="btn btn-warning">Edit</router-link>
          </div>
          <hr color="#eee">

        </div>
        <hr color="#eee">

      </div>

    </div>
  </div>
</template>

<script>

const axios = require('axios')
export default {
  name: 'HelloWorld',
  data:function(){
    return {
      artikel: []
    }
  },

  created:function(){
    console.log('load articles')
    axios({
      method:'get',
      url:'http://localhost:3000/article'
    })
    .then((dataartikel)=>{
      console.log(dataartikel.data)
      this.artikel = dataartikel.data
      console.log(JSON.stringify(this.artikel))
    })
    .catch(function(err){
      console.log(err)
    })
  },

  methods:{

      deletes:function(id){
        axios({
                method: 'delete',
                url: `http://localhost:3000/article/delete/${id}`,
                headers: {
                   tokenblog: localStorage.getItem('tokenblog')
                }
             })
             .then(data => {
                console.log('deleteing.....')
                location.reload();
             })
             .catch(function(err) {
                alert(err)
                console.log(err)
             })
},

logouts:function(){
  console.log('logout')
localStorage.clear()
}



  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.btn {
  color:white
}
.row{
  border:2px solid #eee
}
.col{
  border:1px solid #eee
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
