import {Router} from 'express'
import {saveTask, deleteTask, getTask, getTaskCount, getTasks, updateTask} from '../controllers/tasks'

const router = Router()

router.get('/tasks' , getTasks)

router.get('/tasks/count', getTaskCount) 

router.get('/tasks/:id', getTask)

router.post('/tasks', saveTask)

router.delete('/tasks/:id', deleteTask)

router.put('/tasks/:id', updateTask)

export default router;