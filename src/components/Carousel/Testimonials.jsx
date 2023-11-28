import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import Lamp from '../../assets/lamp.jpg';
import './Testimonials.css'
import GoldenStar from '../../assets/goldenstar.png';
import GrayStar from '../../assets/graystar.png';
import R1 from '../../assets/Reviews/1.jpg';
import data from './testimonialData';

const Testimonials = () => {
    return (
        <div className='bg-red-700 pt-5 pb-5 sm:pt-10 sm:pb-10 splide3'>
            <div className='w-full text-lg sm:text-3xl mb-5 sm:mb-5 text-[#ffffff] flex justify-center font-alegreya'>Testimonials</div>
            <Splide aria-label="My Favorite Images" className='pl-5 pr-5 sm:pl-8 sm:pr-8 pt-2 pb-2'>

                {
                    data.map((d, key) => (
                            <SplideSlide className=' cursor-pointer h-[210px] max-w-[200px] sm:h-[300px] sm:max-w-[370px]  shadow-md bg-[#ffffff] rounded-lg border border-[#1a1a1d21] slide-testimonial'>
                                <div className='relative flex flex-col w-full h-full pt-8 pl-2 pr-2 sm:pl-5 sm:pr-5'>
                                    <div className='absolute font-dmsans right-7 sm:right-16 top-9 sm:top-10 text-[70px] sm:text-[100px] text-[#787878]'>"</div>
                                    <div className='border-4 rounded-full w-[60px] h-[60px] sm:w-[90px] sm:h-[90px]'><img className='h-full w-full rounded-full' src={d.img} alt="" /></div>
                                    <div className='flex mt-2'>
                                        <p className='font-dmsans text-xs'>{d.name}</p>
                                    </div>
                                    <div className='flex mt-1'>
                                        <div className='h-3 w-3 mr-[2px]'><img className='h-full w-full' src={GoldenStar} alt="" /></div>
                                        <div className='h-3 w-3 mr-[2px]'><img className='h-full w-full' src={GoldenStar} alt="" /></div>
                                        <div className='h-3 w-3 mr-[2px]'><img className='h-full w-full' src={GoldenStar} alt="" /></div>
                                        <div className='h-3 w-3 mr-[2px]'><img className='h-full w-full' src={GoldenStar} alt="" /></div>
                                        <div className='h-3 w-3 mr-[2px]'><img className='h-full w-full' src={GoldenStar} alt="" /></div>
                                    </div>
                                    <div className='mt-3 sm:mt-4 text-[10px] sm:text-[13.5px]'>
                                        <p>
                                            {(d.msg).slice(0,120)+'...'}
                                        </p>
                                    </div>
                                </div>
                            </SplideSlide>
                    ))

                }


            </Splide>
        </div>
    )
}

export default Testimonials