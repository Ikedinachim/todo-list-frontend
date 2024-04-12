import React from 'react'
import './FaqandChat.css'
import { IoIosAddCircle, IoIosPeople } from 'react-icons/io'
import { HiOutlineChatBubbleLeftRight } from 'react-icons/hi2'

const FaqandChat = () => {
  return (
    <div className='fc-con'>
    <div className='fc-wrapper'>

        <div className='fc-faq-div1'>
            <div className='fc-faq-icon-div'>
                <IoIosAddCircle className='fc-faq-icon1' />
            </div>
            <div className='fc-content-div'>
                <p className='fc-title'>New Task</p>
                <p className='fc-words'>Add A New Task Now!</p>
            </div>
        </div>

        <div className='fc-faq-div2'>
            <div className='fc-faq-icon-div'>
                <IoIosPeople className='fc-faq-icon2' />
            </div>
            <div className='fc-content-div'>
                <p className='fc-title'>Share</p>
                <p className='fc-words'>Share Your Progress!</p>
            </div>
        </div>

    </div>
    </div>
  )
}

export default FaqandChat