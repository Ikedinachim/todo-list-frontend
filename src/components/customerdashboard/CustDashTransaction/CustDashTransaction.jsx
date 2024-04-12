import React from 'react'
import './CustDashTransaction.css'
import { Tabs } from 'antd';
import Createtransaction from '../../buttons/createtransaction-btn/Createtransaction';
import { useSelector } from 'react-redux';


const CustDashTransaction = () => {
   const task = useSelector(state => state.task)
   const {loading, data} = task;
   console.log(data);


    const TabPanel = Tabs;

  return (
    <div className='cust-dash-tab-wrapper'>

                     {/* TRANSACTION */}
        <div className='cust-dash-transaction-tab'>
           <Tabs centered>
              <TabPanel className='cust-dash-tabPanel' tab="All" key="1">
              {data.tasks.length == 0 ? <p>NO Completed Task</p> :data.tasks.map((task, index) => {
            if (task.isCompleted){
                return <div>{task.title} {task.description}  {task.date}</div>
                 
            }
        })}
              </TabPanel>
              <TabPanel className='cust-dash-tabPanel' tab="Pending" key="2">
              {data.tasks.filter(task => task.isCompleted == false).length == 0 ? <p>NO Pending Task</p> :data.tasks.map((task, index) => {
            if (task.isCompleted){
                return <div>{task.title} {task.description}  {task.date}</div>
                 
            }
        })}
              </TabPanel>
              
              <TabPanel className='cust-dash-tabPanel' tab="Completed" key="4">
              {data.tasks.filter(task => task.isCompleted == true).length == 0 ? <p>NO Completed Task</p> :data.tasks.map((task, index) => {
            if (task.isCompleted){
                return <div>{task.title} {task.description}  {task.date}</div>
                 
            }
        })}
              </TabPanel>
           </Tabs>
       </div>

                       {/* BUTTON */}
       <div className='cust-dash-transaction-btn-con'>
          <Createtransaction />
       </div>  
    </div>
  )
}

export default CustDashTransaction