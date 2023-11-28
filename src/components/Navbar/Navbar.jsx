import React, { useEffect, useState } from 'react'
import Logo from '../../assets/logo.png';
import { BiCompass, BiHome, BiHomeAlt, BiHomeAlt2, BiPlus, BiSolidCart, BiSolidCompass, BiSolidHeart, BiSolidHome, BiSolidHomeSmile, BiSolidUser } from 'react-icons/bi';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getFilteredProducts } from '../../actions/Product/ProductAction';
const Navbar = ({ show }) => {
    const navigate = useNavigate();
    const [s,sets] = useState(false);
    const [category, setCategory] = useState(null);
    const allcategory = useSelector(state => state.initialData.allcategory);
    useEffect(() => {
        if (allcategory) {
            setCategory(allcategory);
        }
    }, [allcategory])

    const [showCategory, setShowCategory] = useState(false);
    const [showOccasion, setShowOccasion] = useState(false);
    const [showSubChild, setShowSubChild] = useState(false);
    const toggleShowCategory = () => {
        setShowCategory(!showCategory);
    }
    const toggleShowOccasion = () => {
        setShowOccasion(!showOccasion);
    }
    const toggleShowSubChild = () => {
        setShowSubChild(!showSubChild);
    }

    const [children, setChildren] = useState(null);
    const [Ochildren, setOChildren] = useState(null);
    const getChildren = (c) => {
        if (children == null) {
            setChildren(c);
        } else {
            setChildren(null);
        }
    }
    const getOChildren = (c) => {
        if (Ochildren == null) {
            setOChildren(c);
        } else {
            setOChildren(null);
        }
    }

    const dispatch = useDispatch();
    const handleCategoryClick=(id,type)=>{
        sets(false);
        dispatch(getFilteredProducts(id,[0,4999],0,type)).then(()=>{
            navigate('/listing');
        })
    }

    useEffect(()=>{
        if(show){
            sets(show);
        }
    },[show])
    return (
        <div className={`transition-all  pt-12 duration-300 absolute w-[300px] shadow-2xl min-h-full bg-[#f3f3f4] z-[51] ${!s || !show ? 'hidden' : 'flex'} sm:hidden flex flex-col`}>
            <Link to={'/'}><div className='mb-5 w-full h-[50px] pl-5 flex items-center text-white text-[13px] font-dmsans bg-darkred justify-between pr-5' >
                <span className='flex'><BiSolidHome className='mr-2' size={18} />Home</span>
                <span className='w-10 h-10'><img className='h-full w-full' src={Logo} alt="" /></span>
            </div></Link>

            <div className=' w-full max-h-[50px] min-h-[50px] pl-5 flex items-center border-t border-b font-dmsans  justify-between pr-5 relative' onClick={toggleShowCategory} >
                <span className='flex'>Shop By Category</span>
                <span className='w-10 h-full flex items-center'><BiPlus size={23} color='gray' /></span>
            </div>

            {showCategory && <div className='relative flex flex-col mb-3'>
                {
                    category?.map((child, key) => (
                        <div key={key} className='flex flex-col'>
                            <div className='flex justify-between items-center pl-5 pr-10 ' onClick={() => { getChildren(child?._id) }}>
                                {child?.name != "Occasion" && child?.name != "Gift You Way" && <p className='text-[#5b5b5b] font-dmsans mt-3 text-sm' >{child?.name}</p>}
                                {child?.children?.length > 0 && child?.name != "Occasion" && <BiPlus color='gray' size={18} />}
                            </div>
                            {(children == child?._id && child?.children?.length > 0) && <div className='relative  w-full min-h-20 pl-5 pr-10 text-sm font-dmsans text-[#5b5b5b]'>
                                {
                                    child?.children?.map((subchild, key) => (
                                        <div key={key} className='mt-2'>
                                            <div className='flex' onClick={()=>{handleCategoryClick(subchild?._id,'child')}}>
                                                <p>{'- '}{subchild?.name}</p>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>}
                        </div>
                    ))
                }
            </div>}


            <div className=' w-full max-h-[50px] min-h-[50px] pl-5 flex items-center border-t border-b font-dmsans  justify-between pr-5 relative' onClick={toggleShowOccasion} >
                <span className='flex'>Shop By Occasion</span>
                <span className='w-10 h-full flex items-center'><BiPlus size={23} color='gray' /></span>
            </div>

            {showOccasion && <div className='relative flex flex-col mb-3'>
                {
                    category?.map((child, key) => (
                        <div key={key} className='flex flex-col'>
                            {(child?.name == "Occasion") && <div className='relative  w-full min-h-20 pl-5 pr-10 text-sm font-dmsans text-[#5b5b5b]'>
                                {
                                    child?.children?.map((subchild, key) => (
                                        <div key={key} className='mb-2 flex flex-col mt-3'>
                                            <div className='flex justify-between items-center' onClick={() => { getOChildren(subchild?._id) }}>
                                                <p>{subchild?.name}</p>
                                                <p>{subchild?.children?.length > 0 && <BiPlus size={18} color='gray' />}</p>
                                            </div>
                                            {subchild?._id == Ochildren && subchild?.children?.length > 0 &&
                                                <div className='min-h-10 w-full pr-10'>
                                                    {
                                                        subchild?.children?.map((c,key)=>(
                                                            <div key={key} className='flex w-full font-dmsans mt-2' onClick={()=>{handleCategoryClick(c?._id,'subchild')}} > 
                                                                <p className='w-full'>{'- '}{c?.name}</p>
                                                            </div>
                                                        ))
                                                    }
                                                </div>
                                            }
                                        </div>
                                    ))
                                }
                            </div>}
                        </div>
                    ))
                }
            </div>}

            <Link to={'/gift-box'}><div className='mb-4 w-full max-h-[50px] min-h-[50px] pl-5 flex items-center border-t border-b font-dmsans  justify-between pr-5 relative' onClick={toggleShowCategory} >
                <span className='flex'>Gift Your Way</span>
            </div></Link>


            <div className='pl-5'>
                <ul className='text-gray'>
                    <Link to={'/orders'}><li className='flex text-[#404040] items-center mb-3'><BiSolidCompass size={20} className='mr-2' /> My Orders</li></Link>
                    <Link to={'/cart'}><li className='flex text-[#404040] items-center mb-3'><BiSolidCart size={20} className='mr-2' /> My Cart</li></Link>
                    <Link to={'/wishlist'}><li className='flex text-[#404040] items-center mb-3'><BiSolidHeart size={20} className='mr-2' /> My Wishlist</li></Link>
                    <Link to={'/profile'}><li className='flex text-[#404040] items-center mb-3'><BiSolidUser size={20} className='mr-2' /> My Account</li></Link>
                </ul>
            </div>
            <div className='w-full border '>
            </div>
            <div className='pl-5 mt-2'>
                <ul className='text-gray'>
                    <li onClick={
                        () => {
                            navigate('/footer-pages', {
                                state: {
                                    type: "return&refund"
                                }
                            })
                        }
                    } className='flex text-[#404040] items-center mb-3'>Help Centre</li>
                    <li onClick={
                        () => {
                            navigate('/footer-pages', {
                                state: {
                                    type: "privacypolicy"
                                }
                            })
                        }
                    } className='flex text-[#404040] items-center mb-3'>Privacy Policy</li>
                </ul>
            </div>
            <div className='w-full border '>
            </div>
        </div>
    )
}

export default Navbar