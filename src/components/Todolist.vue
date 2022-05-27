<template>
  <div>
    <ul>
      <li v-for="todo in todolist" :key="todo._id">
        <div :class="view">
          <input type="checkbox" v-model="todo.done" name="" id="">
          <label>{{todo.name}}</label>         
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import TodolistServices from './services/TodolistServices'


export default {
    data() {
        return {
            todolist: []
        }
    },
    mounted() {
        this.getTodolist()
    },
    methods: {
        async getTodolist() {
            const res = await TodolistServices.fetchTodolist()
            this.todolist = res.data
        }
    }
}


</script>

<style>
</style>