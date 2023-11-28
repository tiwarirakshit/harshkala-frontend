import React from 'react';
import Logo from '../../assets/logo.png';
import { BiSolidUpArrow, BiSolidDownArrow, BiSolidLogOutCircle, BiUser, BiHeart } from 'react-icons/bi';
import { AiOutlineContacts } from 'react-icons/ai';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { signOut } from '../../actions/User/UserAction';
import { useEffect } from 'react';
import { getSavedProducts } from '../../actions/Cart/CartAction';
import { getNotifications } from '../../actions/Notifications/Notifications';

const SideBar = ({ name, show }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const auth = useSelector(state => state.user.user);
    const logintype = useSelector(state => state.user.logintype);
    const [userId, setUserId] = useState(null);

    useEffect(() => {
        if (auth) {
            setUserId(auth?._id);
        }
    }, [auth])

    useEffect(()=>{
        if(userId){
            dispatch(getNotifications(userId));
        }
    },[userId])

    const userSignOut = () => {
        if (sessionStorage.getItem('googlelogin')) {
            sessionStorage.clear();
            window.open(`https://backend.hhkgifts.com/auth/logout`, "_self");
        }
        dispatch(signOut()).then((userSignedOut) => {
            sessionStorage.clear();
            navigate('/login')
        })
    }
    const [dropdown, setDropDown] = useState(false);



    const toggleDropDown = () => {
        setDropDown(!dropdown);
    }

    return (
        <div className={`${show ? 'flex' : 'hidden'} lg:flex absolute sm:relative z-50  flex-col bg-[#f6f6f6] h-screen min-w-[290px] max-w-[290px] pt-16 font-dmsans sm:shadow-none shadow-2xl`}>

            <Link to={'/'}><div className='w-full flex  pl-3 items-center mb-3s'>
                <img className='w-[80px]' src={Logo} alt="" />
                <p className='font-alegreya text-2xl text-red-500'>HasthKala</p>
            </div></Link>

            <div className={`relative overflow-hidden mt-5 w-full ${dropdown ? "h-[50px]" : "h-[225px]"}`}>
                <div className='font-semibold pl-5 pr-5 text-lg w-full h-10 cursor-pointer flex  items-center justify-between text-[#1a1a1dca]' onClick={toggleDropDown}><span>My Dashboard</span><span>{dropdown ? <BiSolidUpArrow size={15} color='gray' /> : <BiSolidDownArrow size={15} color='gray' />}</span></div>
                <div className={`flex flex-col w-full justify-center absolute ${dropdown ? "bottom-full" : "bottom-0"} transition-all  pb-6`}>
                    <button className={`mt-2 ${name === "orders" ? "text-red" : "text-gray"} text-gray  w-full ml-5 mr-5 flex items-center hover:text-red`} onClick={() => { navigate("/orders") }}><span className='mr-2'><BiUser size={20} /></span>My Orders</button>
                    <button className={`mt-2 ${name === "profile" ? "text-red" : "text-gray"}  w-full ml-5 mr-5 flex items-center  hover:text-red`} onClick={() => { navigate("/profile") }}><span className='mr-2'><BiUser size={20} /></span>My Profile</button>
                    <button className={`mt-2 ${name === "contact-us" ? "text-red" : "text-gray"} text-gray  w-full  ml-5 mr-5 flex items-center hover:text-red`} onClick={() => { navigate("/contact-us") }}><span className='mr-2'><AiOutlineContacts size={20} /></span>Contact Us</button>
                    <button className={`mt-2 ${name === "change-pass" ? "text-red" : "text-gray"} text-gray  w-full  ml-5 mr-5 flex items-center hover:text-red`} onClick={() => { navigate("/change-pass") }}><span className='mr-2'><BiUser size={20} /></span>Change Password</button>
                    <button className={`mt-2 ${name === "saved" ? "text-red" : "text-gray"} text-gray  w-full  ml-5 mr-5 flex items-center hover:text-red`} onClick={() => { navigate("/saved") }}><span className='mr-2'><BiHeart size={20} /></span>Saved For Later</button>
                </div>
            </div>
            <div className='flex justify-center h-3 items-center pr-3 pl-3'>
                <div className='bg-[#1a1a1d23] w-full h-[0.1px]'></div>
            </div>
            <div>
                <button className='mt-2 text-gray  w-full flex ml-5 mr-5 items-center hover:text-red' onClick={userSignOut}><span className='mr-2'><BiSolidLogOutCircle size={20} /></span>Logout</button>
            </div>
        </div>
    )
}

export default SideBar
