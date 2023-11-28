import React from 'react';
import { BiHeart, BiCart, BiUserCircle, BiMenu, BiSearch } from 'react-icons/bi';
import Logo from '../../assets/logo.png';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { getSearchedProducts } from '../../actions/Product/ProductAction';
import { useEffect } from 'react';
import { getInitialCartData } from '../../actions/InitialData/InitialDataAction';

const Header = ({ name }) => {

    const dispatch = useDispatch();
    const [value, setValue] = useState(null);

    const handleSearch = () => {
        if (value != "") {
            dispatch(getSearchedProducts(value, 1)).then((result) => {
                navigate('/listing');
            })
        }
    }

    const navigate = useNavigate();
    const auth = useSelector(state => state.user);
    const cartItems = useSelector(state => state.cart.cartItems);
    const userNav = () => {
        if (auth?.authenticate === false) {
            navigate('/login');
        } else {
            navigate('/profile')
        }
    }

    useEffect(() => {
        if (auth?.user) {
            dispatch(getInitialCartData(auth?.user?._id));
        }
    }, [auth?.user,])

    return (
        <>
            <div className='flex h-14 sm:h-20 items-center justify-between pl-4 sm:pl-20 sm:pr-20 pr-4 border-b shadow-md' >
                <div className='flex h-full w-[100px] sm:w-[200px] items-center justify-start'>
                    <div className='block w-[20px] sm:hidden mr-6 cursor-pointer'></div>
                    <Link to={'/'}><div className='w-[45px] sm:w-[70px]  max-h-[70px] flex items-center font-alegreya text-red-600 '><img className='h-full w-full mr-1' src={Logo} alt="" />
                        <div className=' sm:text-2xl hidden sm:flex min-w-[200px]'>Harsh HasthKala</div>
                    </div></Link>
                </div>
                <div className='relative items-center hidden lg:flex'>
                    <span onClick={handleSearch} className=' cursor-pointer absolute right-3'><BiSearch color='gray' size={19} /></span>
                    <input onChange={(e) => { setValue(e.target.value) }} type="text" placeholder='Search your favorites' className='border border-[#1a1a1d9f] shadow text-gray rounded-full h-10 w-[450px] pl-4 text-sm'
                        onKeyPress={event => {
                            if (event.key === 'Enter') {
                                handleSearch();
                            }
                        }}
                    />
                </div>
                <div className='flex '>
                    <span className='mr-6 cursor-pointer hover:scale-105 transition-all'><Link to={'/wishlist'}><BiHeart size={23} /></Link></span>
                    <span className='mr-6 cursor-pointer hover:scale-105 transition-all relative w-8'><Link to={'/cart'}><BiCart size={23} /><p className='absolute bg-darkred right-0 top-0 rounded-full flex justify-center items-center text-white font-dmsans text-xs w-4 h-4'>{cartItems}</p></Link></span>
                    <span className=' cursor-pointer hover:scale-105 transition-all' onClick={userNav}><Link><BiUserCircle size={23} /></Link></span>
                </div>
            </div>

            <div className='relative h-14 items-center bg-red-600 flex pl-5 pr-5 sm:hidden'>
                <span onClick={handleSearch} className=' cursor-pointer absolute right-[21px] bg-darkred pt-[7px] pb-[7px] pl-2 pr-2 rounded-lg'><BiSearch color='white' size={19} /></span>
                <input onChange={(e) => setValue(e.target.value)} type="text" placeholder='Search your favorites' className='border border-[#1a1a1d3a] shadow text-gray rounded-md h-9 w-[450px] pl-4 text-sm'
                    onKeyPress={event => {
                        if (event.key === 'Enter') {
                            handleSearch();
                        }
                    }} />
            </div>
        </>
    )
}

export default Header