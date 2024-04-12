import React from 'react'
// import { Card } from 'antd';
import './CustomerProfileCard.css'
import { RxEyeClosed } from 'react-icons/rx'
import Withdrawbutton from '../../buttons/withdrawbutton/Withdrawbutton'
import Fundbutton from '../../buttons/fundbutton/Fundbutton'
import { useSelector } from 'react-redux'

const CustomerProfileCard = () => {
  // const {loading, error, data} = useSelector(state => state.user);
  const {loading, error, data} = useSelector(state => state.auth);
  console.log(data)
  var date = new Date()
  var year = date.getFullYear();

  var month = (1 + date.getMonth()).toString();
  month = month.length > 1 ? month : '0' + month;

  var day = date.getDate().toString();
  day = day.length > 1 ? day : '0' + day;
  var current_date = month + '/' + day + '/' + year;
  return (
    <div className='profile-card-con'>
    <div className='profile-card-wrapper'>
          <div className='profile-card-top'>
           <p className='profile-card-top-name'>{data.user.userName}</p>
           <small className='profile-card-top-id'>DATE - {current_date}</small>
          </div>
          <hr className='profile-card-line' />
          <div className='profile-card-middle'>
            
            <div className='profile-card-amount'>
                <div className='profile-card-total-con'>
                    <small className='profile-card-total'>Completed Tasks</small>
                    <p className='profile-card-balance-1'><sup className='profile-card-sign'></sup>{data.completedCount}</p>
                </div>
                <div className='profile-card-total-con'>
                    <small className='profile-card-total'>Pending Tasks</small>
                    <p className='profile-card-balance-2'><sup className='profile-card-sign'></sup>{data.pendingCount}</p>
                </div>
            </div>
          </div>
          <div className='profile-card-bottom'>
            
            <Fundbutton user_id = {data.user._id}/>
          </div>
    </div>
    </div>
  )
}

export default CustomerProfileCard