import React from 'react';
import Header from '../../components/Header/Header';
import Header2 from '../../components/Header2/Header2';
import OrderSummaryCard from '../../components/OrderSummaryCards/OrderSummaryCard';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { orderItem, orderPersonalizedItem } from '../../actions/Order/OrderAction';
import { api } from '../../helpers/baseUrl'
import axios from '../../helpers/axios';
import { getCartData } from '../../actions/Cart/CartAction';
import { BiCheckCircle, BiMenu, BiX } from 'react-icons/bi';
import Navbar from '../../components/Navbar/Navbar';

const PersonalizeBuy = () => {
    const navigate = useNavigate();
    const errorToast = (msg) => {
        toast(`${msg}`, { position: 'top-center' })
    }

    const location = useLocation();

    const auth = useSelector(state => state.user.user);

    const [totalPrice, setTotalPrice] = useState(null);
    const [tax, setTax] = useState(null);
    const [discount, setDiscount] = useState(0);
    const [shipping, setShipping] = useState(null);

    const [paymentMode, setPaymentMode] = useState(null);
    const [cod, setCod] = useState(false);
    const [cardPayment, setCardPayment] = useState(false);

    const [buynowdata, setBuyNowData] = useState(false);
    const [lastname, setLastName] = useState(null);
    const [email, setEmail] = useState(null);
    const [city, setCity] = useState(null);
    const [state, setState] = useState(null);
    const [country, setCountry] = useState(null);
    const [phone, setPhone] = useState(null);
    const [address, setAddress] = useState(null);
    const [zipcode, setZipCode] = useState(null);
    const [uid, setUid] = useState(null);
    const [status, setStatus] = useState(null);
    const [quantity, setQuantity] = useState(null);
    const [firstname, setFirstName] = useState(null);
    const [img, setImg] = useState(null);
    const [customText, setCustomText] = useState(null);
    const [customImage, setCustomImage] = useState(null);
    const [customLink, setCustomLink] = useState(null);
    const [blobImg, setblobImg] = useState(null);

    useEffect(() => {
        if (auth) {
            setFirstName(auth?.fullname?.split(" ")[0]);
            setLastName(auth?.fullname?.split(" ")[1]);
            setEmail(auth?.email);
            setPhone(auth?.phone);
            setCity(auth?.city);
            setState(auth?.state);
            setAddress(auth?.address);
            setCountry(auth?.country);
            setZipCode(auth?.zipcode);
            setUid(auth?._id);
        }
        if (location) {
            setTotalPrice(location.state.total)
            setDiscount(location.state.discount);
            setBuyNowData(location.state.data);
            setQuantity(location.state.quantity);
            setImg(location.state.data.images[0].img);
            setCustomImage(location?.state?.customImage);
            setCustomText(location?.state?.customText);
            setCustomLink(location?.state?.customLink);
            setblobImg(location?.state?.blobImg);

        }
    }, [auth, location])

    useEffect(() => {
        if (totalPrice) {
            let temptax = (totalPrice * 18) / 100;
            setTax(temptax)
        }
    }, [totalPrice])

    useEffect(() => {
        if (cod) {
            setShipping(79);
        } else {
            setShipping(0);
        }
    }, [cod])

    useEffect(() => {
        if (!location?.state) {
            navigate('/');
        }
    }, [location?.state])

    const handleCod = () => {
        setCod(true);
        setCardPayment(false);
        setPaymentMode("Cash");
        setStatus("Pending");
    }
    const handleCardPayment = () => {
        setCardPayment(true);
        setCod(false);
        setPaymentMode("Online");
        setStatus("Pending");
    }
    const [orderPlaced,setOrderPlaced] = useState(false);
    const dispatch = useDispatch();
    const handlePlaceOrder = () => {
        if (firstname && lastname && country && state && city && email && phone && address && zipcode) {
            var usertype = auth?.usertype;
            const orderObj = {
                fullname: firstname + " " + lastname,
                country,
                state,
                city,
                email,
                phone,
                address,
                zipcode,
                usertype,
                uid,
                status,
                cartdata: JSON.stringify(buynowdata),
                paymentmode: paymentMode,
                orderName,
                totalprice: parseFloat((parseInt(totalPrice) + parseInt(shipping)) - (discount || 0)).toFixed(2),
                customText,
                customLink,
                images: customImage,
            }
            dispatch(orderPersonalizedItem(orderObj)).then(() => {
                errorToast("Order Created Successfully");
                setOrderPlaced(true);
                setTimeout(() => {
                    navigate("/orders");
                }, 2000);
            })
        } else {
            errorToast("Fill all the unoptional fields")
        }
    }


    const handleOpenRazorpay = (data) => {

        const options = {
            key: 'rzp_test_QjwunCBCAXXLPv',
            amount: Number(data.amount),
            currency: data.currency,
            order_id: data.id,
            name: 'HASTHKALA',//
            description: 'XYZ',//
            handler: function (response) {
                axios.post(`${api}/verify-payment`, { response: response })
                    .then(res => {
                        handlePlaceOrder();
                    })
                    .catch(err => {
                        errorToast("Payment Failed: " + err)
                    })
            }

        }
        const rzp = new window.Razorpay(options)
        rzp.open()

    }

    useEffect(()=>{
        if(buynowdata){
            handleCartData(buynowdata)
        }
    },[buynowdata])

    const [orderName,setOrdername] = useState(null);
    const handleCartData=(cart)=>{
        setOrdername(cart.name);
    }

    const handlePayment = (amount) => {
        const _data = { amount: amount }
        axios.post(`${api}/checkout`, _data)
            .then(res => {
                handleOpenRazorpay(res.data.data)
            })
            .catch(err => {
                console.log(err)
            })
    }
    const [hamburger, setHamburger] = useState(false);

    const toggleHamburger = () => {
        setHamburger(!hamburger);
    }

    return (
        <div className='flex flex-col relative'>
            {orderPlaced && <div className='fixed w-full h-screen flex justify-center items-center bg-[#5f5f5f71]'>
                <div className='w-[450px] h-[300px] bg-white shadow-2xl rounded pt-5 font-dmsans pl-10 pr-10'>
                    <p className='w-full flex h-10 items-center rounded-full text-green text-3xl tracking-wide font-bold text-[#267c32] uppercase  justify-center'>Thank You!</p>
                    <div className='w-full justify-center flex items-center mt-5'><BiCheckCircle size={100} color='green' /></div>
                    <p className='w-full text-[#888888] flex justify-center'>Redirecting...</p>
                    <p className='w-full flex justify-center text-[#888888] mt-2 text-lg'>Hurray! Your Order Has Been Placed</p>
                </div>
            </div>}
            <div className='absolute block sm:hidden top-4 left-6 z-[60]' onClick={toggleHamburger}>
                {
                    hamburger ? <BiX color='darkred' size={22} /> :
                        <BiMenu size={22} color='#1a1a1d' />

                }
            </div>
            <Navbar show={hamburger} />
            <Header />
            <Header2 />
            <div className='flex sm:flex-row flex-col min-h-screen items-center'>
                <div className='h-full w-full sm:pl-10 sm:pr-20 sm:pt-14 pt-5 pl-2'>
                    <div className='h-full w-full'>
                        <p className='font-dmsans'>Billing Information</p>
                        <form action="" className='flex flex-col pl-3 sm:pl-9'>

                            <span className='h-5'></span>

                            <div className='flex'>
                                <div className='flex flex-col mr-3'>
                                    <label htmlFor="" className='text-xs sm:text-sm font-dmsans mb-[3px]'>User name</label>
                                    <input type="text" placeholder={firstname ? firstname : `First name`} onChange={(e) => { setFirstName(e.target.value) }} className=' tracking-wide pl-3 text-xs sm:h-9 sm:w-[250px] w-[160px] border rounded-3xl border-[#1a1a1d43]' />
                                </div>
                                <div className='flex flex-col sm:mr-3'>
                                    <label htmlFor="" className=' text-xs sm:text-sm font-dmsans mb-[3px] text-white'>.</label>
                                    <input type="text" placeholder={lastname ? lastname : 'Last name'} onChange={(e) => { setLastName(e.target.value) }} className='tracking-wide pl-3 text-xs sm:h-9  sm:w-[250px] w-[160px] border rounded-3xl border-[#1a1a1d43]' />
                                </div>
                                <div className='hidden sm:flex flex-col w-full'>
                                    <label htmlFor="" className='text-sm font-dmsans mb-[3px]'>Company Name <span className='text-gray'>(Optional)</span></label>
                                    <input type="text" className='h-9 border max-w-full min-w-full rounded-3xl border-[#1a1a1d43]' />
                                </div>

                            </div>

                            <span className='h-4 '></span>

                            <div className='flex flex-col'>
                                <label htmlFor="" className='text-xs sm:text-sm font-dmsans mb-[3px]'>Address</label>
                                <input type="text" className='sm:h-9 h-8 border rounded-3xl border-[#1a1a1d43] sm:w-full w-[335px] pl-3 text-[14px]' placeholder={address ? address : ''} onChange={(e) => { setAddress(e.target.value) }} />
                            </div>

                            <span className='h-4'></span>
                            <div className='flex w-full'>
                                <div className='flex flex-col mr-3 sm:w-1/4 w-[160px]'>
                                    <label htmlFor="" className='text-xs sm:text-sm font-dmsans mb-[3px]'>Country</label>
                                    <input type="text" className='h-8 sm:h-9  border rounded-3xl border-[#1a1a1d43]' onChange={(e) => { setCountry(e.target.value) }} placeholder={country ? country : ''} />
                                </div>
                                <div className='flex flex-col mr-3 sm:w-1/4'>
                                    <label htmlFor="" className='text-xs sm:text-sm font-dmsans mb-[3px] '>Region/State</label>
                                    <input type="text" className='h-8 sm:h-9  border rounded-3xl border-[#1a1a1d43] text-xs pl-2' placeholder={state ? state : ""} onChange={(e) => { setState(e.target.value) }} />
                                </div>
                                <div className='hidden sm:flex flex-col mr-3 w-1/4'>
                                    <label htmlFor="" className='text-sm font-dmsans mb-[3px]'>City</label>
                                    <input type="text" className='h-9 border  rounded-3xl border-[#1a1a1d43] text-xs pl-2' placeholder={city ? city : ''} onChange={(e) => { setCity(e.target.value) }} />
                                </div>
                                <div className='hidden sm:flex flex-col w-1/4'>
                                    <label htmlFor="" className='text-sm font-dmsans mb-[3px]'>Zip Code</label>
                                    <input type="text" className='h-9 border  rounded-3xl border-[#1a1a1d43] text-xs pl-2' onChange={(e) => { setZipCode(e.target.value) }} placeholder={zipcode ? zipcode : ''} />
                                </div>
                            </div>
                            <span className='h-4'></span>
                            <div className='flex w-full'>
                                <div className='sm:hidden flex flex-col mr-3 w-[160px]'>
                                    <label htmlFor="" className='text-xs sm:text-sm font-dmsans mb-[3px]'>City</label>
                                    <input type="text" className='h-8 sm:h-9 border  rounded-3xl border-[#1a1a1d43] text-xs pl-2' placeholder={city ? city : ''} onChange={(e) => { setCity(e.target.value) }} />
                                </div>
                                <div className='sm:hidden flex flex-col w-[160px]'>
                                    <label htmlFor="" className='text-xs sm:text-sm font-dmsans mb-[3px]'>Zip Code</label>
                                    <input type="text" className='h-8 sm:h-9 border rounded-3xl border-[#1a1a1d43] text-xs pl-2' onChange={(e) => { setZipCode(e.target.value) }} placeholder={zipcode ? zipcode : ''} />
                                </div>
                            </div>

                            <span className='h-4'></span>
                            <div className='flex w-full'>
                                <div className='flex flex-col mr-3 sm:w-1/2 w-[160px]'>
                                    <label htmlFor="" className='text-xs sm:text-sm font-dmsans mb-[3px]'>Email</label>
                                    <input type="text" className='h-8 sm:h-9  border rounded-3xl border-[#1a1a1d43] text-xs pl-2' onChange={(e) => { setEmail(e.target.value) }} placeholder={email ? email : ''} />
                                </div>
                                <div className='flex flex-col mr-3 sm:w-1/2 w-[160px]'>
                                    <label htmlFor="" className='text-xs sm:text-sm font-dmsans mb-[3px] '>Phone Number</label>
                                    <input type="text" className='h-8 sm:h-9 border rounded-3xl border-[#1a1a1d43] text-xs pl-2' onChange={(e) => { setPhone(e.target.value) }} placeholder={phone ? phone : ''} />
                                </div>
                            </div>
                          
                        </form>
                    </div>


                    <div className='sm:min-h-[220px] h-[190px] w-full border border-[#1a1a1d3f] rounded pt-5 mt-5 sm:pr-5 sm:mb-10'>
                        <p className='text-sm font-dmsans ml-2'>Payment Option</p>
                        <form action="" className='flex flex-col sm:pl-9 pl-3 sm:pr-0 pr-3 pt-5 '>
                            <div className='pl-10 h-[100px] w-full border pt-2 pb-2 rounded border-[#1a1a1d4a] flex'>
                                <div className='flex flex-col justify-center items-center'>
                                    <p className='text-2xl font-semibold text-darkred'>₹</p>
                                    <p className='mt-1 mb-2 text-xs font-dmsans'>Cash on Delivery</p>
                                    <input type="radio" className='h-[14px] w-[14px]' value={true} onClick={handleCod} checked={cod ? true : false} />
                                </div>
                                <div className='h-full w-[1px] bg-[#1a1a1d4a] ml-5 mr-5'></div>
                                <div className='flex flex-col justify-center items-center'>
                                    <p className='text-2xl font-semibold text-darkred'>₹</p>
                                    <p className='mt-1 mb-2 text-xs font-dmsans'>UPI/Debit/Credit Card</p>
                                    <input type="radio" className='h-[14px] w-[14px]' onClick={handleCardPayment} checked={cardPayment ? true : false} />
                                </div>
                            </div>
                        </form>
                    </div>

                </div>
                <div className='h-full sm:max-w-[400px] w-[340px] sm:min-w-[445px] sm:pr-20 pt-14'>
                    <div className='flex flex-col w-full h-[430px] border rounded border-[#1a1a1d47] pl-4 pt-3 pr-4'>
                        <h1 className='font-dmsans'>Order Summary</h1>
                        <div className='w-full min-h-[140px] overflow-y-scroll max-h-[140px] order-scrollbar mt-3 mb-4'>
                            <div className='w-full h-12 flex mb-2'>
                                <div className='h-full w-12 mr-2'><img className='w-full h-full' src={img} alt="" /></div>
                                <div className='flex flex-col'>
                                    <p className='text-xs'>{buynowdata?.name} x {quantity}</p>
                                    <p className='text-xs text-gray'>1 x ₹{buynowdata.price}</p>
                                </div>
                            </div>

                            <div>
                                {customImage && (customText || customLink) && blobImg &&
                                    <div className='flex flex-col font-dmsans text-sm'>
                                        <p className='mb-1'> - Custom Image and Text</p>
                                        <div className='flex'>
                                            <div className='h-12 w-12 flex items-center'><img className='h-full w-full' src={blobImg} alt="" /></div><div className='h-10 flex items-center font-dmsans font-bold text-2xl ml-2 mr-2'>:</div>
                                            {
                                                customText ? <p className='h-10 flex items-center'>" {customText} "</p> : <p></p>
                                            }
                                            {
                                                customLink ? <p>Spotify Link</p> : <p></p>

                                            }

                                        </div>
                                    </div>

                                }
                            </div>
                        </div>
                        <div className='flex justify-between text-[13px] font-dmsans'>
                            <p className=' text-gray '>Sub-total</p>
                            <p>₹{parseFloat(totalPrice - tax).toFixed(2)}</p>
                        </div>
                        <span className='h-1'></span>
                        <div className='flex justify-between text-[13px] font-dmsans'>
                            <p className=' text-gray '>Shippping</p>
                            <p>₹{shipping}</p>
                        </div>
                        <span className='h-1'></span>
                        <div className='flex justify-between text-[13px] font-dmsans'>
                            <p className=' text-gray '>Discount</p>
                            <p>₹{discount || 0}</p>
                        </div>
                        <span className='h-1'></span>
                        <div className='flex justify-between text-[13px] font-dmsans'>
                            <p className=' text-gray '>Tax</p>
                            <p>₹{parseFloat(tax).toFixed(2)}</p>
                        </div>
                        <div className='mt-4 mb-4'>
                            <div className='w-full bg-[#1a1a1d2c] h-[1px]'></div>
                        </div>
                        <div className='flex justify-between text-[16px] font-dmsans'>
                            <p>Total</p>
                            <p>₹{parseFloat((parseInt(totalPrice) + parseInt(shipping)) - (discount || 0)).toFixed(2)}</p>
                        </div>
                        <div className='mt-4'>
                            <button className='bg-darkred text-white uppercase w-full h-10 rounded-3xl text-[14px] font-dmsans flex items-center justify-center' onClick={() => {
                                if (cod) {
                                    handlePlaceOrder();
                                } else {
                                    handlePayment(totalPrice);
                                }
                            }}>Place order<AiOutlineArrowRight size={18} className='ml-2' /></button>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    )
}

export default PersonalizeBuy