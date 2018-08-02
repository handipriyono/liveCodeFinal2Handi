<template>
<div class="newposts">

  <!-- <form> -->
  <h2>Add new POST</h2>
  <br/>
    <div class="form-group">
      <label for="exampleInputEmail1">Title</label>
      <input  v-model="title"  type="text" class="form-control"  aria-describedby="emailHelp" placeholder="Enter title">
     </div>
    <div class="form-group">
      <label for="categorys">Category</label>
      <input v-model="category" type="text" class="form-control" placeholder="category">
    </div>
    <div class="form-group">
   <label for="comment">content:</label>
   <textarea v-model="content" class="form-control" rows="5" ></textarea>
 </div>

     <button @click="addPost" type="submit" class="btn btn-primary">Submit</button>
  <!-- </form> -->

</div>
</template>


<script>
import axios from "axios";
// import login from '@/components/login.vue'
export default {
   name: 'newposts',
   data: function() {
      return {
         content: '',
         title: '',
         category: '',
         result: [],

      }
   },
   methods: {
      addPost() {
         console.log('ngepost')
         // console.log(this.content, this.title)
         axios({
               method: 'post',
               url: 'http://localhost:3000/article/add',
               data: {
                  title: this.title,
                  content: this.content,
                  category:this.category
               },
               headers: {
                  tokenblog: localStorage.getItem('tokenblog')
               }
            })
            .then(articleData => {
               console.log('sdata', articleData.data)
               console.log(articleData)
               window.location = '/'

            })
            .catch(function(err) {
               console.log(err)
            })
      }

   }
}
</script>
<style scoped>
 .newposts{
   min-width: 500px;
   width:700px;
margin: 0px auto;
 }
</style>
