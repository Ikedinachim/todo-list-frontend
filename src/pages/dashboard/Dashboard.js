import React, { useState } from 'react';

// const Dashboard = () => {
//   const [todos, setTodos] = useState([]);
//   const [inputValue, setInputValue] = useState('');

//   const handleInputChange = (e) => {
//     setInputValue(e.target.value);
//   };

//   const handleAddTodo = () => {
//     if (inputValue.trim() !== '') {
//       setTodos([...todos, { id: todos.length + 1, text: inputValue }]);
//       setInputValue('');
//     }
//   };

//   const handleDeleteTodo = (id) => {
//     const updatedTodos = todos.filter((todo) => todo.id !== id);
//     setTodos(updatedTodos);
//   };

//   return (
//     <div className="todo-list-app">
//       <h1>Todo List</h1>
//       <input
//         type="text"
//         value={inputValue}
//         onChange={handleInputChange}
//         placeholder="Enter a new todo..."
//       />
//       <button onClick={handleAddTodo}>Add Todo</button>
//       <ul>
//         {todos.map((todo) => (
//           <li key={todo.id}>
//             {todo.text}
//             <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Dashboard;

import CustDashTransaction from '../../components/customerdashboard/CustDashTransaction/CustDashTransaction'
import CustomerProfileCard from '../../components/customerdashboard/CustomerProfileCard/CustomerProfileCard'
import FaqandChat from '../../components/customerdashboard/Faq&Chat/FaqandChat'
import FeeCalculator from '../../components/customerdashboard/FeeCalculator/FeeCalculator'

import './CustomerDashboard.css'
import AppLayout from '../../components/Layout/AppLayout';

const CustomerDashboard = () => {
  return (
    <AppLayout>

        <div className='cust-dash-wrapper'>

          <div className='cust-dash-left'>
            <CustomerProfileCard />
            <FeeCalculator />
            <div className='cust-dash-bigScreen'>
              <FaqandChat />
           
            </div>
          </div>

          <div className='cust-dash-right'>
            <CustDashTransaction />
            <div className='cust-dash-smallScreen'>
              <FaqandChat />
             
            </div>
          </div>

        </div>
    </AppLayout>
  )
}

export default CustomerDashboard
