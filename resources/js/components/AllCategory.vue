<template>
  <div>
    <h3 class="text-center">All Category</h3>
    <br />
      <div class="card-header">
                    
                        <span style="margin-left:92%;">
       <router-link :to='{name:"create"}' class="btn btn-primary">Create</router-link>
    </span>
                </div>


    <table class="table table-bordered">
      <thead>
        <tr>
          <th>ID</th>
          <th>Type</th>
          <th>Title</th>
          <th>Description</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody v-if="categories.length > 0">
        <tr v-for="category in categories" :key="category.id">
          <td>{{category.id}}</td>
          <td>{{category.type}}</td>
          <td>{{category.titile}}</td>
          <td>{{category.description}}</td>
          <td>
            <router-link :to="{name: 'editCategory', params: { id: category.id }}" class="btn btn-success">Edit</router-link>
            <button class="btn btn-danger" @click="deleteCategory(category.id)">Delete</button>
          </td>
          
        </tr>
      </tbody>
      <tbody v-else>
        <tr>
            <td> No Data found</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
 
<script>
import axios from "axios";
export default {

          data() {
            return {
                categories: []
            }
        },
        created() {
            this.axios
                .get('/api/category/')
                .then(response => {
                    this.categories = response.data;
                });
        },

        //useded for category delete
  methods: {
      deleteCategory(id)
      {
        if(confirm('dd')){ 
        let uri = `/api/post/delete/${id}`;
        this.axios.delete(uri).then(response => {
          this.categories.splice(this.categories.indexOf(id), 1);
        });
        }
      }
    },

};
</script>