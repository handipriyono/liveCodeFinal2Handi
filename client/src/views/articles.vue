<template>
  <div class="articles">
    <h1>  {{singlepage.title}}</h1> <br/>
      <hr/>
    {{singlepage.content}}
    <hr/>

  </div>
</template>

<script>
import axios from 'axios'
// import Header from '@/components/header.vue'
export default {
   name: 'articles',
   data: function() {
      return {
         listAll: [],
         singlepage: [],
         comment: '',
         daftarkomentar: [],
         listkoment: [],
         alls:[],
         showform:true
      }
   },
   created: function() {

     console.log(this.$route.params.id)
        axios({
              method: 'get',
              url: `http://localhost:3000/article/${this.$route.params.id}`
           })
           .then((datasingle) => {
             console.log(datasingle)
              this.singlepage = datasingle.data
              console.log(this.singlepage)
           })
           .catch(function(err) {
              console.log(err)
           })
   },

   methods: {

   }
}
</script>
<style scooped>
.tile {
  margin-top:200px;
  min-width:400px;
  width:700px;
  margin:0px auto;
  margin-bottom:100px
}
.is-parent {
  margin-top:50px
}
.media  {
  margin-top:300px;
  min-width:400px;
  width:700px;
  margin:0px auto
}
.create{
  font-size:11px;
  font-color:#eee
}
.bawah{
  margin-bottom:200px
}
</style>
