import React from 'react';

import classes from './CompletedPage.module.css'
import DeleteTaskItem from '../../components/delete-task-item/DeleteTaskItem';
import AppLayout from '../../components/Layout/AppLayout';
import { useSelector } from 'react-redux';

const CompletedPage = () => {
    const task = useSelector(state => state.task)
    const {loading, data} = task;
    console.log(data);
    return (
        <AppLayout>

       <div>

        <div>
            <button>FILTER TASKS</button>
        </div>
        {data.tasks.filter(task => task.isCompleted == true).length == 0 ? <p>NO Completed Task</p> :data.tasks.map((task, index) => {
            if (task.isCompleted){
                return  <DeleteTaskItem id = {task._id} date = {task.date} title = {task.title} description = {task.description} ischecked = {task.isCompleted} />

            }
        })}

       
      
       </div>
        </AppLayout>
    );
};

export default CompletedPage;