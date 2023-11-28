import React, { useEffect, useState } from 'react';
import Logo from '../../assets/contactus.gif';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { contactUsMailAction, login, loginWithGoogle, loginWithOTP, sendEmailVerification, sendotp, signup } from '../../actions/User/UserAction';
import Spinner from '../../components/Spinner/Spinner';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from '../../components/Header/Header';
import Header2 from '../../components/Header2/Header2';
import Google from '../../assets/google.svg';
import Apple from '../../assets/apple.svg';
import { FiEyeOff } from 'react-icons/fi';
import { api } from '../../helpers/baseUrl';
import Navbar from '../../components/Navbar/Navbar';
import { BiMenu, BiX } from 'react-icons/bi';
import Footer from '../../components/Footer/Footer';

const ContactUsPage = () => {
    const auth = useSelector(state => state.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [name, setName] = useState(null);
    const [phone, setPhone] = useState(null);
    const [email, setEmail] = useState(null);
    const [message, setMessage] = useState(null);
    const sendMailForm = (e) => {
        e.preventDefault();
        setLoading(true);
        if (name && email && phone && message) {
            const post = {
                uid:auth?.user?._id || 'null',
                name,
                email,
                phone,
                message
            }
            dispatch(contactUsMailAction(post)).then(() => {
                setLoading(false);
                navigate('/');
            })
        }
    }
    const [hamburger, setHamburger] = useState(false);
    const [loading, setLoading] = useState(false);
    const toggleHamburger = () => {
        setHamburger(!hamburger);
    }

    useEffect(()=>{
        window.scrollTo(0,0);
    },[])

    return (
        <div className='flex flex-col'>
            <div className='absolute block sm:hidden top-4 left-6 z-[60]' onClick={toggleHamburger}>
                {
                    hamburger ? <BiX color='darkred' size={22} /> :
                        <BiMenu size={22} color='#1a1a1d' />

                }
            </div>
            <Navbar show={hamburger} />
            <Header />
            <Header2 />
            <div className='w-full h-screen flex justify-start items-start mt-[-60px]'>
                <div className='hidden pt-20 sm:flex w-1/2 h-full flex-col justify-center items-center scale-50 lg:scale-100 '>
                    <div className='h-[400px] w-[400px] justify-center items-center ml-40'>
                        <img className='max-h-full max-w-full' src={Logo} alt="" />
                    </div>
                </div>


               
                    <div className='flex sm:w-1/2 w-full h-full flex-col justify-center items-center scale-90 lg:scale-100'>
                        <div className='border border-[#1a1a1d27] shadow-2xl w-[370px] sm:w-[400px] h-[490px]  sm:mr-32 rounded-md'>

                            <form action="" onSubmit={sendMailForm}>
                                <div className='text-pink w-full h-10 pt-5 text-xl flex items-center font-semibold justify-center font-dmsans text-darkred'>
                                Contact Us
                                </div>
                                <div className='pl-10 pr-10 pt-6'>
                                <label className='text-xs font-dmsans' htmlFor="">Name</label>
                                    <input type="text" className='border border-[#1a1a1d52] w-full h-9 mt-1 mb-3 text-xs text-gray pl-5 rounded-full' onChange={(e) => { setName(e.target.value) }} required />
                                    <label className='text-xs font-dmsans' htmlFor="">Email</label>
                                    <input type="email" className='border border-[#1a1a1d52] w-full h-9 mt-1 mb-3 text-xs text-gray pl-5 rounded-full' onChange={(e) => { setEmail(e.target.value) }} required />
                                    <label className='text-xs font-dmsans' htmlFor="">Mobile Number</label>
                                    <input type="text" className='border border-[#1a1a1d52] w-full h-9 mt-1 mb-3 text-xs text-gray pl-5 rounded-full' onChange={(e) => { setPhone(e.target.value) }} required />
                                    <label className='text-xs font-dmsans' htmlFor="">Message</label>
                                    <textarea className='border border-[#1a1a1d52] w-full h-16 mt-1 mb-3 text-xs text-gray pl-5 rounded-xl' onChange={(e) => { setMessage(e.target.value) }} required ></textarea>
                                    <button className='w-full h-11 bg-darkred font-dmsans uppercase text-[#ffffff] mt-5 rounded-3xl flex items-center justify-center' type='submit'>{loading ? <Spinner /> : `Send`}</button>
                                </div>
                            </form>

                        </div>
                    </div>
               
             
            </div>
            <ToastContainer />
            <Footer />
        </div>
    )
}

export default ContactUsPage
