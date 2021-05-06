<template>
    <div class="row">
        <div class="col-12">
            <div class="card">
                <div class="card-header">
                    <h4>Add Category</h4>
                </div>
                <div class="card-body">
                 <form @submit="formSubmit">
                        <div class="row">
                            <div class="col-12 mb-2">
                                <div class="form-group">
                                    <label>Type</label>
                                    <input required type="text" class="form-control" v-model="type">
                                </div>
                            </div>
                            <div class="col-12 mb-2">
                                <div class="form-group">
                                    <label>Title</label>
                                    <input required type="text" class="form-control" v-model="titile">
                                </div>
                            </div>
                            <div class="col-12 mb-2">
                                <div class="form-group">
                                    <label>Description</label>
                                    <input required type="text" class="form-control" v-model="description">
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
export default {
        mounted() {
            console.log('Component mounted.')
        },
        data() {
            return {
              type: '',
              titile: '',
              description: '',
            };
        },
        methods: {
            formSubmit(e) {
                e.preventDefault();
                let currentObj = this;
                axios.post('/api/formSubmit', {
                    type: this.type,
                    titile: this.titile,
                    description: this.description
                })
                .then(function (response) {
                    currentObj.output = response.data;
                    currentObj.$router.push("/categorylist");
                })
                .catch(function (error) {
                    currentObj.output = error;
                });
            }
        }
    }
</script>