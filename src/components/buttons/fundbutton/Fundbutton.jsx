import React, { useState } from 'react'
import './Fundbutton.css'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Checkbox } from 'antd';
import { useDispatch } from 'react-redux';

import Alert from 'antd/es/alert/Alert';
import ReactDatePicker from 'react-datepicker';
import { DatePicker } from '@mui/x-date-pickers';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import dayjs from 'dayjs';
import { createTask } from '../../../actions/TaskActions';

const TaskBtn = (props) => {
  console.log(props.user_id)
  const dispatch = useDispatch()
    const [open, setOpen] = React.useState(false);
    const [date, setDate] = useState(dayjs(props.date))
  

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

  
    
    const dateChangeHandler = (e) => {
        
        setDate(dayjs(e.$d))
    }
  return (
    <div>
         <button className='fund-btn' onClick={handleClickOpen}>CREATE A TASK</button>
         <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: 'form',
          onSubmit: (event) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries(formData.entries());
            const title = formJson.title;
            const description = formJson.description;
            console.log(title, description, date.$d, props.user_id);
            dispatch(createTask(JSON.stringify({
                title: title,
                description: description,
                user: props.user_id,
                date: date.$d,
                
            })))
            handleClose();
          },
        }}
      >
        <DialogTitle>Add a Task</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please Enter Information about this new Task
          </DialogContentText>
          <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            name="title"
            label="title"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            required
            margin="dense"
            id="des"
            name="description"
            label="description"
            type="text"
            fullWidth
            variant="standard"
          />
          <LocalizationProvider dateAdapter={AdapterDayjs}>
      
          <DatePicker value={date}  onChange={dateChangeHandler}/>
    </LocalizationProvider>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit">ADD</Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default TaskBtn