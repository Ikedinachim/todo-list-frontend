import React from 'react';
import classes from './DeleteTaskItem.module.css'
import trash from '../../assets/trash.svg'
import { useDispatch } from 'react-redux';
import { deleteTask } from '../../actions/TaskActions';


const DeleteTaskItem = (props) => {
    const dispatch = useDispatch()
    const deleteTaskHandler = () => {
        dispatch(deleteTask(props.id))
    }
    return (
       
        <div  className={classes['task-item-container']}>
        <div className={classes['class-item']}>
            <div className={classes['date-item']}>
        <h1>{props.title}</h1>
        <h2>{props.date}</h2>

            </div>
        <hr />
        <p>{props.description}</p>
        </div>

     
        <img onClick={deleteTaskHandler} src={trash} alt="" />



        </div>
    );
};

export default DeleteTaskItem;