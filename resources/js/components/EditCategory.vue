<template>
    <div class="row">
        <div class="col-12">
            <div class="card">
                <div class="card-header">
                    <h4>Add Category</h4>
                </div>
                <div class="card-body">
                 <form @submit.prevent="updatePost">
                        <div class="row">
                            <div class="col-12 mb-2">
                                <div class="form-group">
                                    <label>Type</label>
                                    <input type="text" class="form-control" v-model="product.type">
                                </div>
                            </div>
                            <div class="col-12 mb-2">
                                <div class="form-group">
                                    <label>Title</label>
                                    <input type="text" class="form-control" v-model="product.titile">
                                </div>
                            </div>
                            <div class="col-12 mb-2">
                                <div class="form-group">
                                    <label>Description</label>
                                    <input type="text" class="form-control" v-model="product.description">
                                </div>
                            </div>
                            <div class="col-12">
                                <button type="submit" class="btn btn-primary">Save</button>
                            </div>
                        </div>                        
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";
export default {
 data() {
        return {
                product: {}
            }
        },
        created() {
            this.axios
                .get(`/api/post/edit/${this.$route.params.id}`)
                .then((res) => {
                    this.product = res.data;
                    console.log(res.data)
                });
        },

        methods: {
        updatePost() {
            this.axios
                    .post(`/api/post/update/${this.$route.params.id}`, this.product)
                    .then((response) => {
                        this.$router.push({name: '/'});
                    });
        }
        }
    }
</script>