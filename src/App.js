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
  return (
    <div className="container">
      <Header title='task tracker' />
      <Tasks tasks={tasks} />
    </div>
  )
}



export default App
