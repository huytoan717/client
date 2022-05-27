import Api from '@/services/Api'

export default {
  fetchTodolist () {
    return Api().get('/')
  },
  addTodo(params) {
    return Api().post('/store', params)
  },
  updateTodo(id){
    return Api().put('/'+ id, id)
  },
  destroyTodo(id){
    return Api().delete('/'+ id)
  }
}
