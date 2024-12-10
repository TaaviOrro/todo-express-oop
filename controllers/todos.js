import { Todo} from '../models/todo.js'

class todoController {
    constructor(){
        this.TODOS = []
    }
    createTodo(req, res){
        const task = req.body.task
        const newTodo = new Todo(Math.random().toString(), task)
        this.TODOS.push(newTodo)
        req.json({
            message:'Created  new  todo object',
            newTask: newTodo
        })
    }
}
export const TodoController = new todoController()