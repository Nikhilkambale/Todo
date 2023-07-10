<template>
    <div class="container">
        <h2 style="text-align:center;margin-top:5px">TODO APP</h2>
        <br><br>
          <div  class="form-group">
            <input type="text" v-model="etodo.title" placeholder="Title" class="form-control">
          </div>
          <br>
          <div class="form-group">
            <router-link to="/"><button  class="btn btn-danger btn-block">
                Update
              </button></router-link>
          </div>
    </div>
</template>

<script>
export default {
    name: 'edit',
    computed: {
     
    },
}
</script>

<style>

</style>