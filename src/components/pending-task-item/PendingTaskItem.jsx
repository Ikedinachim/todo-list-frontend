import React, { useState } from 'react';
import trash from '../../assets/trash.svg'
import edit from '../../assets/edit.svg'
import classes from  './PendingTaskItem.module.css'
import AppLayout from '../Layout/AppLayout';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Checkbox } from 'antd';
import { useDispatch } from 'react-redux';
import { deleteTask, markTask, updateUserTask } from '../../actions/TaskActions';
import Alert from 'antd/es/alert/Alert';
import ReactDatePicker from 'react-datepicker';
import { DatePicker } from '@mui/x-date-pickers';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import dayjs from 'dayjs';

const PendingTaskItem = (props) => {
    const dispatch = useDispatch()
    const [open, setOpen] = React.useState(false);
    const [date, setDate] = useState(dayjs(props.date))
    const [checked, setCheck] = useState(props.ischecked)

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const deleteTaskHandler = () => {
        dispatch(deleteTask(props.id))
    }
    const checkHandler = (e) => {
        console.log(checked);
        setCheck(true ? e.target.value == 'on' : false)
        dispatch(markTask(props.id))
    }
    const dateChangeHandler = (e) => {
        
        setDate(dayjs(e.$d))
    }
    return (

        

        <div className={classes['task-item-container']}>
        <div className={classes['class-item']}>
            <div className={classes['date-item']}>
        <h1>{props.title}</h1>
        <h2>{props.date}</h2>

            </div>
        <hr />
        <p>{props.description}</p>
        </div>

        <img src={edit}  onClick={handleClickOpen} alt="" />
        <Checkbox checked= {checked} onClick={checkHandler}  />
        <img onClick={deleteTaskHandler} src={trash} alt="" />
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
            console.log(title, description, date.$d);
            dispatch(updateUserTask(props.id,JSON.stringify({
                title: title,
                description: description,
                date: date.$d,
                user: props.user_id,
                isCompleted: checked
            })))
            handleClose();
          },
        }}
      >
        <DialogTitle>Edit a Task</DialogTitle>
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
          <Button type="submit">EDIT</Button>
        </DialogActions>
      </Dialog>


    </div>
       
    );
};

export default PendingTaskItem;