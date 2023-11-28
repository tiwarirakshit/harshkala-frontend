import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import './NewlyAddedCarousel.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getFilteredProducts, getSearchedProducts } from '../../actions/Product/ProductAction';
import WalletCards from '../../assets/walletcards.png';
import IllustrationFrames from '../../assets/frames.png';
import AcrylicFrames from '../../assets/acrylicframes.png';
import Keychains from '../../assets/key chains.jpg';
import Canvas from '../../assets/canvas.png';
import Diary from '../../assets/diary.jpg';
import Mugs from '../../assets/mugs.jpg';
import Latest from '../../assets/latest.webp';

const CircularCategories = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [category, setCategory] = useState(null);
    const allcategories = useSelector(state => state.initialData.categories)


    const handleCategoryClick = (id, type) => {
        dispatch(getFilteredProducts(id, [0, 4999], 0, type)).then((res) => {
            navigate(`/listing`)
        })
    }


    return (
        <div className='splide5 relative'>
            <Splide aria-label="My Favorite Images" className='pl-2 pr-2 sm:pl-14 sm:pr-12' options={{
                arrows: false,
                pagination: true,
                perPage: 4,
            }}>

                <SplideSlide className='h-[100px] max-w-[90px] sm:h-[270px] sm:max-w-[230px]  bg-transparent pl-1 pr-1'>
                    <div className='relative flex flex-col w-full h-[100px] sm:h-[280px] items-center justify-center hover:scale-95 cursor-pointer  transition-all duration-500'
                        onClick={() => { handleCategoryClick('65200f034c7ac010cd3ea839','child') }}>
                        <span className='bg-red h-[60px] w-[60px] sm:h-[190px] sm:w-[190px] rounded-full overflow-hidden'>
                            <img className='min-h-full min-w-full ' src={WalletCards} alt="" />
                        </span>
                        <br className='hidden sm:block' />
                        <p className='text-[10px] sm:text-[17px] mt-1 sm:mt-0'>{'Wallet Cards'}</p>
                    </div>
                </SplideSlide>
                <SplideSlide className='h-[100px] max-w-[90px] sm:h-[270px] sm:max-w-[230px]  bg-transparent pl-1 pr-1'>
                    <div className='relative flex flex-col w-full h-[100px] sm:h-[280px] items-center justify-center hover:scale-95 cursor-pointer  transition-all duration-500'
                        onClick={() => { handleCategoryClick('652012e19785c326409f4e10','child') }}>
                        <span className='bg-red h-[60px] w-[60px] sm:h-[190px] sm:w-[190px] rounded-full overflow-hidden'>
                            <img className='min-h-full w-full scale-110' src={IllustrationFrames} alt="" />
                        </span>
                        <br className='hidden sm:block' />
                        <p className='hidden sm:block text-[10px] sm:text-[17px] mt-1 sm:mt-0'>{('Illustration Frames')}</p>
                        <p className='sm:hidden block text-[10px] sm:text-[17px] mt-1 sm:mt-0'>{('Illustration Frames').slice(0,16)}</p>
                    </div>
                </SplideSlide>
                <SplideSlide className='h-[100px] max-w-[90px] sm:h-[270px] sm:max-w-[230px]  bg-transparent pl-1 pr-1'>
                    <div className='relative flex flex-col w-full h-[100px] sm:h-[280px] items-center justify-center hover:scale-95 cursor-pointer  transition-all duration-500'
                        onClick={() => { handleCategoryClick('652034e4524a1cc420ec0eab','child') }}>
                        <span className='bg-red h-[60px] w-[60px] sm:h-[190px] sm:w-[190px] rounded-full overflow-hidden'>
                            <img className='min-h-full w-full relative' src={AcrylicFrames} alt="" />
                        </span>
                        <br className='hidden sm:block' />
                        <p className='text-[10px] sm:text-[16px] mt-1 sm:mt-0'>{'Acrylic Frames'}</p>
                    </div>
                </SplideSlide>
                <SplideSlide className='h-[100px] max-w-[90px] sm:h-[270px] sm:max-w-[230px]  bg-transparent pl-1 pr-1'>
                    <div className='relative flex flex-col w-full h-[100px] sm:h-[280px] items-center justify-center hover:scale-95 cursor-pointer  transition-all duration-500'
                        onClick={() => { handleCategoryClick('6520119941537efb120e647e','child') }}>
                        <span className='bg-red h-[60px] w-[60px] sm:h-[190px] sm:w-[190px] rounded-full overflow-hidden'>
                            <img className='min-h-full w-full relative bottom-5' src={Diary} alt="" />
                        </span>
                        <br className='hidden sm:block' />
                        <p className='text-[10px]  sm:text-[16px] mt-1 sm:mt-0'>{'Custom Diaries'}</p>
                    </div>
                </SplideSlide>
                <SplideSlide className='h-[100px] max-w-[90px] sm:h-[270px] sm:max-w-[230px]  bg-transparent pl-1 pr-1'>
                    <div className='relative flex flex-col w-full h-[100px] sm:h-[280px] items-center justify-center hover:scale-95 cursor-pointer  transition-all duration-500'
                        onClick={() => { handleCategoryClick('65203530524a1cc420ec0eb4','parent') }}>
                        <span className='bg-red h-[60px] w-[60px] sm:h-[190px] sm:w-[190px] rounded-full overflow-hidden'>
                            <img className='min-h-full w-full relative scale-125 bottom-3 sm:bottom-10' src={Latest} alt="" />
                        </span>
                        <br className='hidden sm:block' />
                        <p className='text-[10px] sm:text-[16px] mt-1 sm:mt-0'>{'Diwali Hamper'}</p>
                    </div>
                </SplideSlide>
                <SplideSlide className='h-[100px] max-w-[90px] sm:h-[270px] sm:max-w-[230px]  bg-transparent pl-1 pr-1'>
                    <div className='relative flex flex-col w-full h-[100px] sm:h-[280px] items-center justify-center hover:scale-95 cursor-pointer  transition-all duration-500'
                        onClick={() => { navigate('/listing',{state:{from:'latest'}}) }}>
                        <span className='bg-red h-[60px] w-[60px] sm:h-[190px] sm:w-[190px] rounded-full overflow-hidden'>
                            <img className='min-h-full w-full relative scale-125 bottom-3 sm:bottom-10' src={Latest} alt="" />
                        </span>
                        <br className='hidden sm:block' />
                        <p className='text-[10px]  sm:text-[16px] mt-1 sm:mt-0'>{'Latest Arrival'}</p>
                    </div>
                </SplideSlide>
                <SplideSlide className='h-[100px] max-w-[90px] sm:h-[270px] sm:max-w-[230px]  bg-transparent pl-1 pr-1'>
                    <div className='relative flex flex-col w-full h-[100px] sm:h-[280px] items-center justify-center hover:scale-95 cursor-pointer  transition-all duration-500'
                        onClick={() => { handleCategoryClick('6520128c9785c326409f4e07','subchild') }}>
                        <span className='bg-red h-[60px] w-[60px] sm:h-[190px] sm:w-[190px] rounded-full overflow-hidden'>
                            <img className='min-h-full w-full scale-125' src={Mugs} alt="" />
                        </span>
                        <br className='hidden sm:block' />
                        <p className='text-[10px]  sm:text-[16px] mt-1 sm:mt-0'>{'Custom Mugs'}</p>
                    </div>
                </SplideSlide>
                <SplideSlide className='h-[100px] max-w-[90px] sm:h-[270px] sm:max-w-[230px]  bg-transparent pl-1 pr-1'>
                    <div className='relative flex flex-col w-full h-[100px] sm:h-[280px] items-center justify-center hover:scale-95 cursor-pointer  transition-all duration-500'
                        onClick={() => { handleCategoryClick('6520128c9785c326409f4e07','subchild') }}>
                        <span className='bg-red h-[60px] w-[60px] sm:h-[190px] sm:w-[190px] rounded-full overflow-hidden'>
                            <img className='min-h-full w-full scale-125' src={Canvas} alt="" />
                        </span>
                        <br className='hidden sm:block' />
                        <p className='text-[10px]  sm:text-[16px] mt-1 sm:mt-0'>{'Custom Canvas'}</p>
                    </div>
                </SplideSlide>
                <SplideSlide className='h-[100px] max-w-[90px] sm:h-[270px] sm:max-w-[230px]  bg-transparent pl-1 pr-1'>
                    <div className='relative flex flex-col w-full h-[100px] sm:h-[280px] items-center justify-center hover:scale-95 cursor-pointer  transition-all duration-500'
                        onClick={() => { handleCategoryClick('6520128c9785c326409f4e07','subchild') }}>
                        <span className='bg-red h-[60px] w-[60px] sm:h-[190px] sm:w-[190px] rounded-full overflow-hidden'>
                            <img className='min-h-full w-full scale-125' src={Mugs} alt="" />
                        </span>
                        <br className='hidden sm:block' />
                        <p className='text-[10px]  sm:text-[16px] mt-1 sm:mt-0'>{'MP Art Products'}</p>
                    </div>
                </SplideSlide>


            </Splide>
        </div>
    )
}

export default CircularCategories