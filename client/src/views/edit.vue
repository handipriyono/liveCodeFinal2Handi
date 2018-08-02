<template>
  <div class="editpost">
      <h2>Edit POST </h2>
      <!-- <div class="form-group">
        <label for="exampleInputEmail1">Title</label>
        <input  v-model="title"  type="text" class="form-control"  aria-describedby="emailHelp" placeholder="Enter title">
       </div> -->


      <div class="form-group">
          <label class="label">Article Title</label>
          <div class="control">

              <input v-model="singlepage.title" v-bind:id="judul" class="input" type="text">
          </div>
      </div>
      <div class="field">
          <label class="label">Article Body</label>
          <div class="control">
              <textarea v-model="singlepage.content" v-bind:id="isi" class="form-control" rows="5" ></textarea>
          </div>
      </div>
      <div class="field is-grouped">
          <div class="control">

              <button @click="editPost"  type="button" class="btn btn-success">Update</button>
          </div>
      </div>
  </div>
</template>


<script>
import axios from "axios";
// import login from '@/components/login.vue'
export default {
   name: 'editpost',
   data: function() {
      return {
         content: '',
         title: '',
         error: '',
         singlepage: '',
         isi: 'isi',
         judul: 'judul'
      }
   },
   created: function() {
     console.log('edit edit')

      axios({
            method: 'get',
            url: `http://localhost:3000/article/${this.$route.params.id}`
         })
         .then((datasingle) => {
            this.singlepage = datasingle.data
            console.log('spsss', JSON.stringify(datasingle))

         })
         .catch(function(err) {
            console.log(err)
         })
   },
   methods: {
      editPost() {
         console.log(('content'))
         axios({
               method: 'put',
               url: `http://localhost:3000/article/update/${this.$route.params.id}`,
               data: {
                  content: document.getElementById('isi').value,
                  title: document.getElementById('judul').value
               },
               headers: {
                  tokenblog: localStorage.getItem('tokenblog')
               }
            })
            .then(articleData => {
               console.log('update:', articleData.data)
               console.log(articleData)
               this.$router.push('/')

            })
            .catch(function(err) {
               console.log(err.response)
            })
      }

   }
}
</script>
<style scoped>
 .editpost{
   min-width: 500px;
   width:700px;
margin: 0px auto;
 }
</style>
