import axios from 'axios'

export const getAllTodos = async () => {
  try {
    const todos = await axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
    console.log(todos.data)

    return todos.data
  } catch(err) {
    return console.error(err)
  }
}

export const createNewTodo = async (title) => {
  try {
    const todo = await axios.post('https://jsonplaceholder.typicode.com/todos', {
      title
    })

    return todo.data
  } catch(err) {
    return console.error(err)
  }
}
export const deleteExistedTodo = async (id) => {
  try {
    await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
    
    return id
  } catch(err) {
     return console.error(err)
  }
}


