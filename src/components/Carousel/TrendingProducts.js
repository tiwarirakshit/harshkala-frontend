import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import './TrendingProducts.css';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import GoldenStar from '../../assets/goldenstar.png';
import GrayStar from '../../assets/graystar.png';

const TrendingProducts = () => {
    const navigate = useNavigate();
    const [products, setProducts] = useState(null);
    const trendingProducts = useSelector(state => state.products.trendingProducts);
    
    useEffect(() => {
        if (trendingProducts) {
            setProducts(trendingProducts);
        }
    }, [trendingProducts])

    return (
        <div className='relative splide2'>
            <div className='w-full text-lg sm:text-3xl mb-5 pl-5 sm:pl-20 flex flex-col'>
                <p className='font-alegreya font-semibold text-[#1a1a1d]'>Trending Products</p>
                <p className='text-xs sm:text-lg text-[#888888] '>Handpicked for your gifting needs</p>
            </div>
            <Splide aria-label="My Favorite Images" className='pl-5 pr-5 sm:pl-20 sm:pr-20 pt-2 pb-2'>
                {
                    products?.map((p, key) => (
                        <SplideSlide key={key} className='slides h-[240px] sm:min-h-[405px] max-w-[150px] sm:max-w-[300px] shadow-xl bg-[#ffffff] rounded-lg border border-[#1a1a1d21] cursor-pointer'
                            onClick={() => {
                                navigate(`/product/${p?.slug}`)
                            }}>
                            <div className='flex flex-col justify-between sm:justify-start w-full h-full'>
                                <div className='w-full'>
                                    <div className='w-full max-h-[140px] sm:max-h-[300px] overflow-hidden'>
                                        <img className='max-h-[300px] min-h-[300px] w-full rounded-tr-md rounded-tl-md hover:scale-110 transition-all duration-500' src={p?.images[0]?.img} alt="Image1" />
                                    </div>
                                    <p className='sm:hidden mb-2 mt-2 font-semibold font-alegreya text-sm sm:text-[16.5px] pl-1'>{p?.name}</p>

                                </div>
                                <div className='w-full flex flex-col sm:pl-5 sm:pr-5 pl-1 pr-1 h-full'>
                                    <p className='mb-2 mt-2 font-semibold font-alegreya text-sm sm:text-[16.5px] hidden sm:block'>{p?.name}</p>
                                    <div className='flex justify-between mb-2 text-xs sm:text-sm'><span className='flex'>
                                        <div className='h-3 w-3 mr-[1.5px]'><img className='h-full w-full' src={GoldenStar} alt="" /></div>
                                        <div className='h-3 w-3 mr-[1.5px]'><img className='h-full w-full' src={GoldenStar} alt="" /></div>
                                        <div className='h-3 w-3 mr-[1.5px]'><img className='h-full w-full' src={GoldenStar} alt="" /></div>
                                        <div className='h-3 w-3 mr-[1.5px]'><img className='h-full w-full' src={GrayStar} alt="" /></div>
                                        <div className='h-3 w-3 mr-[1.5px]'><img className='h-full w-full' src={GrayStar} alt="" /></div>
                                    </span></div>
                                    <p className='mb-2 text-xs sm:text-sm'><span className=' font-semibold mr-1 sm:mr-3 text-darkred '>₹ {p?.discountprice || p?.price}.00</span><span className='text-[12px] sm:text-xs line-through text-[#787878]'>{(p?.discountprice)?p.price:''}</span></p>
                                </div>
                            </div>
                        </SplideSlide>
                    ))
                }
            </Splide>
        </div>
    )
}

export default TrendingProducts

