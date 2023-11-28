import React, { useEffect, useState } from 'react'
import SideBar from '../../components/SideBar/SideBar'
import { useDispatch, useSelector } from 'react-redux';
import SavedProductCard from '../../components/ProductCard/SavedProductCard';
import { BiSolidBell, BiSearch, BiSolidDownArrow, BiMenu, BiCross, BiX, BiLeftArrowAlt } from 'react-icons/bi';
import UserImage from '../../assets/lamp.jpg';
import { getSavedProducts } from '../../actions/Cart/CartAction';
import Spinner from '../../components/Spinner/Spinner';
import { useNavigate } from 'react-router-dom';

const Saved = () => {
  const [hamburger, setHamburger] = useState(false);
  const navigate = useNavigate();
  const toggleHamburger = () => {
    setHamburger(!hamburger);
  }
  const auth = useSelector(state => state.user);
  useEffect(() => {
    if (!auth?.authenticate) {
      navigate('/')
    }
  }, [auth?.authenticate])


  const [savedproducts, setSavedProducts] = useState(null);
  const products = useSelector(state => state.cart.saved);

  const dispatch = useDispatch();
  useEffect(() => {
    if (auth) {
      dispatch(getSavedProducts(auth?.user?._id)).then((res) => {
      })
    }
  }, [auth, dispatch])

  useEffect(() => {
    if (products) {
      setSavedProducts(products);
    }
  }, [products])

  return (
    <div>
      <div className='flex'>
        <SideBar name={"saved"} show={hamburger} />
        <div className='flex flex-col w-full h-full pl-5 pr-4'>

          {/* PROFILE HEADER  */}
          <div className='flex justify-between w-full pt-3 pb-3 items-center'>
            <div className='flex justify-between items-center w-full h-full'>
              <div className='flex sm:hidden z-50 pl-5' onClick={toggleHamburger}>
                {
                  hamburger ? <BiX size={23} /> : <BiMenu size={23} />
                }
              </div>
              <div className='hidden sm:block' onClick={() => { navigate('/') }}>
                <BiLeftArrowAlt size={28} />
              </div>
              <div className='flex justify-center items-center flex-row-reverse'>
                <div className='h-10 w-10 rounded-full flex items-center justify-center mr-4 bg-[#1a1a1d12]'><BiSolidBell size={20} color='gray' /></div>
                <div className='flex rounded-md'>
                  <div className='flex flex-col text-xs font-semibold mr-2'>
                    <p>{auth.user?.fullname}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* PROFILE HEADER  */}

          <div className='sm:pt-14 pt-8  sm:pl-10'>
            <h1 className='font-dmsans  sm:text-xl'>Saved For Later</h1>
            {savedproducts ? <div className='flex flex-col min-h-full'>
              <div className='flex flex-col justify-between'>
                <div className='min-h-full pt-8 max-w-full grid grid-cols-2 sm:grid-cols-5 gap-y-8'>
                  {
                    savedproducts?.map((product, key) => (
                      <SavedProductCard key={key} name={product?.pid.name} img={product?.pid.images[0].img} price={product?.pid.price} slug={product.pid.slug} id={product?._id} />
                    ))
                  }
                </div>
              </div>
            </div> : <Spinner />}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Saved