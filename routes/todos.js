import express, {Router} from 'express'
import {TodoController} from '../controllers/todos.js'

const router = Router()

router.post('/new-todo', (req,body)=> TodoController.CreateTodo(req, res))

export default router