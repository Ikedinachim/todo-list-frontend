import { Form, Layout, Menu, theme, Badge, Avatar, Spin} from 'antd';
import React, { useEffect, useLayoutEffect } from 'react';
import './AppLayout.css'
import { VscArrowSwap } from 'react-icons/vsc'
import { SlSettings } from 'react-icons/sl'
import { CiWallet } from 'react-icons/ci'
import { VscHome} from 'react-icons/vsc'
import { BiSupport} from 'react-icons/bi'
import { IoLogOutOutline, IoSearch } from 'react-icons/io5'
import { MdNotificationsNone } from 'react-icons/md'
// import search from '../../assets/images/search.png'
import Logo from '../../assets/logo.svg'
import CustomerDashboard from '../../pages/dashboard/Dashboard';


import { useNavigate } from 'react-router-dom';
import CompletedPage from '../../pages/completedPage/CompletedPage.jsx';
import PendingPage from '../../pages/pendingPage/PendingPage.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { authActions } from '../../reducers/authReducer.js';
import { getUserTasks } from '../../actions/TaskActions.js';

const { Header, Content, Sider } = Layout;





const AppLayout = ({children}) => {

  // const notification = useSelector(state => state.notification);
  
 
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {error,  auth} = useSelector(state => state.auth);
  const {loading, taskError, data} = useSelector(state => state.task);
  // console.log('get user details' + loading + data + error)
  useEffect(()=>{
    dispatch(getUserTasks());
    console.log('dsaf');
    // if(!auth.isAuthenticated){
    //   navigate('/')
    //   return;
    // }

    
  },[dispatch])

  // console.log(data.user.userName);

  const logoutUserHandler = () => {
    dispatch(authActions.logoutUser());
  
    navigate('/sign-in')
  }

  const searchInputChangeHandler = (e) => {
    // console.log(e.target.value)
    // dispatch(vendorSearch({
    //   search: e.target.value
    // }))
  }
  return (
    <Layout  className='wrapper'>
      { loading ? 
      <Spin
       spinning
       size='large'

      />:
        <React.Fragment>

      <Sider
        style={{ backgroundColor: "#232164", zIndex: "30" }}
        breakpoint='lg'
        collapsedWidth='0'
        onBreakpoint={(broken) => {
          console.log(broken)
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type)
        }}
      >
        <div className='logo' />
        <Menu
          className='sider'
          // theme="dark"
          // mode="inline"
          // defaultSelectedKeys={['4']}
          //   items={[UserOutlined, VideoCameraOutlined, UploadOutlined, UserOutlined].map(
          //     (icon, index) => ({
            //       key: String(index + 1),
            //       icon: React.createElement(icon),
            //       label: `nav ${index + 1}`,
            //     }),
            //   )}
        >
          <div className='sider-logo-con'>
            <img className='sider-logo' src={Logo} alt='' />
          </div>

          <div className='side-tab-wrapper'>
            <div className='side-tab-con'  onClick={() => navigate('/dashboard')}>
              <VscHome style={{ color: "#ffff" }} />
              <span className='side-tabs'>DASHBOARD</span>
            </div>

            <div className='side-tab-con' onClick={() => navigate('/completed-page')}>
              <VscArrowSwap style={{ color: "#ffff" }} />
              <span className='side-tabs'>COMPLETED TASKS</span>
            </div>

            <div className='side-tab-con'  onClick={() => navigate('/pending-page')}>
              <CiWallet style={{ color: "#ffff" }} />
              <span className='side-tabs'>PENDING TASKS</span>
            </div>

            <div className='side-tab-con' onClick={logoutUserHandler}>
              <IoLogOutOutline  style={{color: '#ffff'}} /><span className='side-tabs'>LOGOUT</span>
            </div>
          </div>

         
        </Menu>
      </Sider>

      <Layout className='content-con'>
        <Header className='header'>
          <div className='header-div1'>
            <p className='header-dash'>Dashboard</p>
          </div>

        <div className='header-right-div'>
              <h2>
                LETS'S GET THOSE TASK COMPLETED
              </h2>
          

                  {/* NOTIFICATION */}
          <div className='header-div-3'>
              <Badge count={12} overflowCount={99}>
                    <div>
                     <MdNotificationsNone className='header-notification-icon' style={{ fill: '#232164' }} />
                    </div>
             </Badge>
          </div>

                     {/* INITIALS */}
           <div>
             <Avatar className='header-avatar'>
              <p className='header-initials'>{data.user.userName.slice(0,2)}</p>
             </Avatar>
          </div>        
       </div>
        </Header>

        {/* INNER CONTENT */}
        <Content
          className='layout-content'
          style={{ margin: "0px 16px", color: "black" }}
        >
          {/* <CustomerDashboard /> */}
          {/* <CompletedPage /> */}
          {/* <PendingPage /> */}
          {children}
        </Content>
      </Layout>
            </React.Fragment>}
    </Layout>
    )
}
export default AppLayout
