import React, { useEffect, useState } from 'react'
import Header from '../../components/Header/Header'
import Header2 from '../../components/Header2/Header2'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import CartCard from '../../components/CartCard/CartCard'
import './Cart.css';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { getCartData } from '../../actions/Cart/CartAction'
import { useNavigate } from 'react-router-dom';
import { BiMenu, BiX } from 'react-icons/bi'
import Navbar from '../../components/Navbar/Navbar'
import { getCoupon } from '../../actions/Coupon/CouponAction'
import { ToastContainer, toast } from 'react-toastify'

const Cart = () => {
    const ce = useSelector(state => state.coupon.message);
    const [couponError, setCouponError] = useState(null);
    const couponErrorToast = (msg) => {
        toast(msg, { position: 'top-center' })
    }

    const navigate = useNavigate()
    const dispatch = useDispatch();
    const coupon = useSelector(state => state.coupon);
    const [hamburger, setHamburger] = useState(false);
    const toggleHamburger = () => {
        setHamburger(!hamburger);
    }
    const [cartItems, setCartItems] = useState(null);
    const auth = useSelector(state => state.user.user);
    const auth2 = useSelector(state => state.user);
    const cart = useSelector(state => state.cart.cart);
    const [cartTotal, setCartTotal] = useState(null);

    const [discount, setDiscount] = useState(0);
    const [afterDiscount, setAfterDiscount] = useState(0);
    const [type, setType] = useState(null);

    const [discountApplied, setDiscountApplied] = useState(false);

    useEffect(() => {
        if (auth) {
            dispatch(getCartData(auth._id))
        } else {
            navigate('/login')
        }
    }, [auth, dispatch, navigate])

    useEffect(() => {
        if (cart) {
            setCartItems(cart);
            let totalPrice = 0;
            for (let i = 0; i < cart?.length; i++) {
                totalPrice = totalPrice + ((cart[i].productid.price) * cart[i].quantity)
            }
            setCartTotal(totalPrice)
        }

    }, [cart])

    const handleCheckout = () => {
        if (auth2?.authenticate) {
            let disc;
            if (discountApplied) {
                if (type == "rupees") {
                    disc = discount;
                } else if (type == 'percentage') {
                    disc = (cartTotal * discount) / 100;
                }
                navigate('/billing', {
                    state: {
                        total: cartTotal,
                        discount: disc
                    }
                })
            } else {
                navigate('/billing', {
                    state: {
                        total: cartTotal,
                        discount: 0
                    }
                })
            }
        }
    }

    useEffect(() => {
        if (coupon) {
            setDiscount(coupon?.discount);
            setType(coupon?.type);
        }
    }, [coupon])

    const [couponCode, setCouponCode] = useState(null);

    useEffect(() => {
        setDiscountApplied(false);
    }, [])

    const handleCoupons = () => {
        setDiscountApplied(true);
        const coupon = {
            name: couponCode.toLowerCase(),
            price: cartTotal,
            items: cartItems.length,
        }
        dispatch(getCoupon(coupon)).then(() => {
            if (ce) {
                couponErrorToast(ce);
            }
        }).catch((err) => {
            if (ce) {
                couponErrorToast(ce);
            }
        })
    }


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
            <div className='flex flex-col sm:flex-row w-full h-screen'>
                <div className=' h-full w-full sm:pl-10 sm:pr-10 sm:pt-10 pl-4 pr-4 pt-5 pb-10'>
                    {cartItems?.length > 0 && <div className=' max-h-full w-full border border-[#1a1a1d3f] rounded flex flex-col justify-between pt-5 pb-5'>
                        <div className=' scrollbar flex flex-col max-w-full '>
                            {
                                cartItems?.map((c, key) => (
                                    <CartCard key={key} item={c} />
                                ))
                            }

                        </div>
                        <div className='pl-5 mt-5 hidden sm:flex'>
                            <Link to={'/'}><button className='w-[150px] h-8 text-white text-sm bg-darkred rounde-3xd flex items-center justify-center'><AiOutlineArrowLeft className='mr-[3px] font-semibold' size={14} />&nbsp;Back to shop</button></Link>
                        </div>
                        <div className='pl-3 mt-5 flex sm:hidden'>
                            <Link to={'/'}><button className='w-[45px] h-8 text-white text-sm bg-darkred rounded-3xl flex items-center justify-center'><AiOutlineArrowLeft className='mr-[3px] font-semibold' size={14} /></button></Link>
                        </div>
                    </div>}{
                        (cartItems?.length <= 0) &&
                        <div className='w-full  h-full flex justify-center pt-20 font-dmsans text-2xl'>
                            Your Cart Is Empty!
                        </div>
                    }
                </div>
                <div className='flex flex-col h-full sm:min-w-[400px] max-w-[400px] sm:pt-14 sm:pr-20 sm:pl-5 pl-3 pr-3'>
                    <div className='border w-full rounded border-[#1a1a1d37] pt-2 pl-4 pr-4 pb-3'>
                        <p >Have a coupon?</p>
                        <div className='flex justify-between items-center mt-2'>
                            <input onChange={(e) => { setCouponCode(e.target.value) }} type="text" placeholder='Add coupon' className='border uppercase  border-[#1a1a1d37] rounded-tl rounded-bl text-sm pl-3 h-9' />
                            <button onClick={handleCoupons} className='flex items-center justify-center text-red font-semibold h-9 border  border-[#1a1a1d37] w-full border-l-0 rounded-tr rounded-br'>Apply</button>
                        </div>
                        {/* <div className='flex'>
                            <p>50% off on 2 orders</p>
                        </div> */}
                    </div>
                    <div className='h-4'></div>
                    <div className='border w-full rounded border-[#1a1a1d37] pt-5 pl-4 pr-4 pb-3'>
                        <p className='font-dmsans'>Price Details</p>
                        <div className='flex flex-col mt-5'>
                            <div className='flex justify-between items-center w-full'>
                                <p>Price</p><p>₹{cartTotal}</p>
                            </div>
                            <div className='flex justify-between items-center w-full mt-2'>
                                <p>Discount</p><p className='text-[#00B517] font-semibold'>
                                    {(discountApplied && type == "rupees") ? `₹${discount}` : ''}
                                    {(!discountApplied || type == undefined) ? `₹0` : ''}
                                    {(discountApplied && type == "percentage") ? `₹${(cartTotal * discount) / 100}` : ''}

                                </p>
                            </div>
                            {/* <div className='flex justify-between items-center w-full mt-2'>
                                <p>Deliver Charges</p><p className='text-[#ff1818] font-semibold'>Na</p>
                            </div> */}
                        </div>
                        <div className='w-full h-[1px] bg-[#1a1a1d31] mt-5 mb-5'>
                        </div>
                        <div className='flex justify-between'>
                            <p className='text-xl font-dmsans'>Total:</p>
                            <p className='text-xl font-semibold'>
                                {
                                    (discountApplied && type === "rupees") ? 'Rs ' + (cartTotal - discount) : ''
                                }
                                {
                                    (discountApplied && type === "percentage") ? 'Rs ' + (cartTotal - (cartTotal * discount) / 100) : ''
                                }
                                {
                                    (!discountApplied || type === undefined) ? 'Rs ' + cartTotal : ''
                                }
                            </p>
                        </div>
                        <div className='mt-5 mb-4'>
                            <button className='text-white w-full flex items-center justify-center h-9 bg-[#00B517] rounded-3xl ' onClick={handleCheckout}>Checkout</button>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    )
}

export default Cart