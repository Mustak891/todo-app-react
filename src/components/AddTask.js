import './AddTask.css'
import React ,{ useState }from 'react'
import axios from 'axios'
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import TextField from "@mui/material/TextField";

function Addtask(props) {

    const [task,Settask] = useState("")
    
    const addtask = () => {

        if(task.trim() === ''){
            return 
        } else {
            axios.post('https://daytodo.herokuapp.com/api/tasks' , {
                todo : task,
                isComplete : false
            }).then(res => {
                Settask("")
                props.addTask(res.data)
            }).catch(err => console.log(err))
        }
    }
    return (
        <div className = 'addtask'>
            <TextField
             label="Add Task . . ."
             variant="standard"
             type="text"
             style={{ width: "600px" }}
             value={task}
             onChange={event => Settask(event.target.value)}
           />
            <Button variant="contained" size="medium" onClick = {() => addtask()} startIcon={<AddIcon />}>Add Task</Button>
        </div>
    )
}

export default Addtask;