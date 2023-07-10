<template>
  <div class="container-sm">
    <h1 style="text-align: center; margin-top: 15px; color: antiquewhite;">TODO APP</h1>
    <br /><br />
    <div class="form-group">
      <input
        type="text"
        v-model="newTodo"
        placeholder="Title"
        class="form-control"
      />
    </div>
    <br />
    <div class="form-group">
      <button @click="addToDo" class="btn btn-danger btn-block">
        ADD TODO
      </button>
    </div>
    <div class="buttond">
      <button type="button" class="btn btn-primary">
      completed <span class="badge badge-light">{{ completed }}</span>
      </button>
      <button type="button" class="btn btn-primary">
      pending <span class="badge badge-light">{{ todos.length - completed }}</span>
      </button>
      <button type="button" class="btn btn-primary">
      Total <span class="badge badge-light">{{todos.length}}</span>
      </button>
    </div>
<div class="container-sm">
    <div v-for="(todo, index) in todos" v-bind:key="todo.id">
      <div class="todoList" v-bind:style=" todo.completed ? 'background-color: #57df5799;' : 'background-color: antiquewhite;'" >
        <div class="left">
          <input type="checkbox"  v-model="ids" :value="todo.id" />
          <p>{{index+1}}.</p>
          <p>{{ todo.title }}</p>
        </div>
        <div class="crud">
          <button
            @click="() => ediTodo(todo)"
            class="btn btn-primary a-btn-slide-text"
          >
            <span class="glyphicon glyphicon-edit" aria-hidden="true"></span>
            <span><strong>Edit</strong></span>
          </button>
          <button
            type="button"
            class="btn-close"
            aria-label="Close"
            @click="removeTodo(index)"
          ></button>
          <!-- <input type="checkbox" id="right" v-model="todo.completed" /> -->
          <label><input type="checkbox" v-model="todo.completed"><span class="label"><i class="bi bi-check2"  style="font-size:27px;"></i></span></label>
        </div>
      </div>
      </div>
    </div>
    <!-- <button :disabled="!clicked" @click="multiremove">Remove</button> -->
  </div>
  
    <hr style="color: yellow">
    
    <!-- /<button @click="multiremove">Remove</button> -->
    <button type="button" v-bind:style=" this.ids.length==0 ? 'display:none' : 'display:inline-block'" class="btn btn-warning" @click="multiremove">Remove</button>
    <popup v-if="Togglepopup">
      <div class="popup">
        <div class="inner">
          <div class="container">
            <div class="form-group">
              <input type="text" v-model="etodo.title" placeholder="Title" class="form-control">
            </div>
            <br>
            <div class="form-group">
              <button class="btn btn-danger btn-block" @click="() => Togglepopup = !Togglepopup">
                Update
              </button>
            </div>
          </div>
        </div>
      </div>
    </popup>
    


</template>

<script>
import { ref } from 'vue';
import popup from '../components/popup.vue'

export default {
  name: "Home",
  data() {
    return {
      Togglepopup:false,
      ids: [],
      newTodo: "",
      idForTodo: 1,
      todoId: "",
    };
  },
  computed: {
    todos() {
      return this.$store.state.todos;
    },
    completed() {
    return this.$store.getters.doneTodos;
    },
    etodo() {
      return this.$store.state.etodo;
    }

  },
  methods: {
    addToDo() {
      if (this.newTodo.trim().length == 0) {
        return;
      }

      var todo = {
        id: this.idForTodo,
        title: this.newTodo,
        completed: false,
      };
      this.$store.commit("addTodo", todo);
      (this.newTodo = ""), this.idForTodo++;
    },
    removeTodo(index) {
      this.$store.commit("removeTodo", index);
    },
    ediTodo(todo) {
      // this.newTodo = todo.title;
      // this.todoId = todo.id
      this.Togglepopup=true,
      this.$store.commit("seteTodo", todo);
    },
    multiselect(index) {
      this.checked = true;
      this.ids.push(index);
    },
    multiremove() {
      for (let idb of this.ids) {
        const index = this.todos.findIndex(({ id }) => id === idb);
        this.ids = [];
        this.$store.commit("removeTodo", index);
      }
    },
  },
 
};
</script>

<style scoped>
* {
  font-size: large;
}
.todoList {
  display: flex;
  margin: 20px;
  justify-content: space-between;
  background-color: antiquewhite;
  padding: 0px 20px 0px 20px;
}

.todoList ul li {
  vertical-align: middle;
  list-style: none;
}
.btn-close {
  margin-left: 30px;
}
.left{
  display: flex;
  justify-content: space-between;
}
.left p{
  margin-top: 10px;
  padding: 10px 0px 10px 10px;
}
.crud{
  margin-top: 7px;
  padding: 10px;
}
.form-group{
  text-align: center;
}
.crud label input{
  display:none;
}
.crud label{
  opacity: 0.6;
  margin-left: 20px;
}
.crud label:hover{
  opacity: 1;
}
.buttond{
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
}
.popup{
position:fixed;
top: 0;
left: 0;
right: 0;
bottom: 0;
z-index: 99;
display: flex;
align-items: center;
justify-content: center;
opacity: 0.9;
}
.inner{
border: 5px solid;
border-radius: 20px;
position: relative;
background: #fff;
background-color: bisque;
padding: 32px;
}
</style>
