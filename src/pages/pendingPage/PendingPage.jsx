import React, { useEffect } from 'react';
import PendingTaskItem from '../../components/pending-task-item/PendingTaskItem';
import AppLayout from '../../components/Layout/AppLayout';
import { useSelector } from 'react-redux';


const PendingPage = () => {
    
    const task = useSelector(state => state.task)
    const {loading, data} = task;
    console.log(data, 'daf');
    
    return (
        <AppLayout>

        <div>
            <button>FILTER TASKS</button>
        </div>
         {data.tasks.filter(task => task.isCompleted == false).length == 0 ? <p>NO Pending Task</p> :data.tasks.map((task, index) => {
            if (!task.isCompleted){
                return  <PendingTaskItem user_id = {data.user._id} id = {task._id} date = {task.date} title = {task.title} description = {task.description} ischecked = {task.isCompleted} />

            }
        })}

      
      
       </AppLayout>
    );
};

export default PendingPage;