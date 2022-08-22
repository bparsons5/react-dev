import { useState } from 'react'

const AddTask = ({ onAdd }) => {
    const [name, setName] = useState('')
    const [reminder, setReminder] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()

        if(!name) {
            alert('Please add task')
            return
        }

        onAdd({ name, reminder })

        setName('')
        setReminder(false)
    }

  return (
    <form className='add-form' onSubmit={onSubmit}>
        <div className='form-control'>
            <label>Task</label>
            <input type='text' placeholder='Add Task' value={name} onChange={(e) => setName(e.target.value)}/>
        </div>
        <div className='form-control form-control-check'>
            <label>Reminder</label>
            <input type='checkbox' checked={reminder} value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)}/>
        </div>

        <input className='btn btn-block' type='submit' value='Save Task'/>
    </form>
  )
}

export default AddTask