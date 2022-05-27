<template>

  <div class="todo container">
    <h1 class="text-center mt-3">Todo</h1>
    <div class="form text-center mt-2 mb-2">
      <input name="name" type="text" v-model="name">
      <button type="submit" @click="addTodo">Add Todo</button>    
    </div>
    <table class="table">
      <thead>
        <tr>
          <th scope="col"></th>
          <th scope="col">Name</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="todo in todolist" :key="todo._id">
          <td><input type="checkbox" v-model="todo.done" name="" id=""></td>
          <td>
            <label @click="editTodo(todo)">{{todo.name}}</label>
            <input 
              type="text"
              class="edit"
              v-if="todo === editedTodo"
              v-model="todo.name"      
              @vnode-mounted="({ el }) => el.focus()"   
              @keyup.enter = "updateTodo(todo._id)"
            > 
          </td>
          <td><a :href="'/'+todo._id" @click="destroyTodo(todo._id)">Delete</a></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>

import TodolistServices from './services/TodolistServices'

export default {
    data() {
        return {
            todolist: [],
            name: '',
            editedTodo: null,
        }
    },
    mounted() {
        this.getTodolist()
    },
    methods: {
        async getTodolist() {
          const res = await TodolistServices.fetchTodolist()
          this.todolist = res.data
        },
        async addTodo() {
          await TodolistServices.addTodo({ name: this.name }
          )
        },
        editTodo(todo) {
          this.editedTodo = todo
        },
        async updateTodo(id) {
          await TodolistServices.updateTodo(id)
        },
        async destroyTodo(id) {
          await TodolistServices.destroyTodo(id)
        }

    }
}


</script>

<style>

</style>