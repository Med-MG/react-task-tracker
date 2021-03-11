import Header from './components/Header'
import Tasks from './components/Tasks'
import { useState } from 'react'
const App = () => {
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Doctors Appointment',
        day: 'Feb 5th at 2:30pm',
        reminder: true,
    },
    {
        id: 12,
        text: 'school meeting',
        day: 'Feb 6th at 2:30pm',
        reminder: true,
    },
    {
        id: 13,
        text: 'Confirmation app meeting',
        day: 'Feb 7th at 2:30pm',
        reminder: true,
    }
  ])

 //Delete Task
 const DeleteTask = (id) => {
  //  console.log('delete task ', id);
  setTasks(tasks.filter((task) => task.id !== id));
 }

 //change reminder on toggle
 const onToggle = (id) => {
   setTasks(
     tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task)
   )
   
 }
  return (
    <div className="container">
      <Header title='task tracker' />
       { tasks.length > 0 ? <Tasks tasks={tasks} onDelete= {DeleteTask} onToggle= {onToggle} /> : 'No tasks to show'}
    </div>
  )
}



export default App
