import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom' 

import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import Footer from './components/Footer'
import About from './components/About'

function App() {
  const name = "Brett"
  const x = true
  const [showAddTask, setShowAddTask] = useState(false)

  const [tasks, setTasks] = useState([
    {
        id: '1',
        name: 'one',
        reminder: false
    },
    {
        id: '2',
        name: 'two',
        reminder: false
    },
    {
        id: '3',
        name: 'three',
        reminder: false
    }
  ])

  const addTask = (task) => { // note task variable comes from the call of the function in Add Task
    const id = Math.floor(Math.random() * 10000) + 1

    const newTask = {
      id,
      ...task
    }

    setTasks([...tasks, newTask])
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id)) 
  }
  
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder} : task))
  }

  return (
    <Router>
      <div className="container">
        <Header title='React' onToggleAddTask={() => setShowAddTask(!showAddTask)} showAdd={showAddTask}/>

        <Routes>
          <Route path='/' exact element={
            <>
              {showAddTask && <AddTask onAdd={addTask}/> }
              {tasks.length < 1 ? 'No Current Tasks' : <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />}
              <br />
            </>
          }/>
          <Route path='/about' element={<About />}/>
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
