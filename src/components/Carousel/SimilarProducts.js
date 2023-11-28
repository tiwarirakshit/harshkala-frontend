import '@splidejs/react-splide/css';
import './NewlyAddedCarousel.css';
import { Link, useNavigate } from 'react-router-dom';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import GoldenStar from '../../assets/goldenstar.png';
import GrayStar from '../../assets/graystar.png';


const SimilarProducts = ({ products }) => {

    const navigate = useNavigate();

    return (
        <div className='relative splide5 mb-20'>
            <Splide aria-label="My Favorite Images" className='pl-5 pr-5 sm:pl-20 sm:pr-20 pt-2 pb-2' options={{
                arrows:false,
                pagination:true,
            }}>

                {
                    products?.map((p, key) => (
                        <SplideSlide key={key} className='slides h-[220px] sm:h-[400px] max-w-[140px] sm:max-w-[300px] shadow-xl bg-[#ffffff] rounded-lg border border-[#1a1a1d21] cursor-pointer'
                            onClick={() => {
                                navigate(`/product/${p?.slug}`)
                            }}>
                            <div className='flex flex-col w-full h-full'>
                                <div className='w-full max-h-[120px] sm:max-h-[300px] overflow-hidden'>
                                    <img className='h-full w-full rounded-tr-md rounded-tl-md hover:scale-110 transition-all duration-500' src={p?.images[0]?.img} alt="Image1" />
                                    {/* <img className='h-full w-full rounded-tr-md rounded-tl-md hover:scale-110 transition-all duration-500' src={'https://picsum.photos/298/300'} alt="Image1" /> */}
                                </div>
                                <div className='w-full flex flex-col sm:pl-5 sm:pr-5 pl-1 pr-1'>
                                    <p className='mb-2 mt-2 font-semibold font-alegreya text-sm sm:text-[16.5px]'>{p?.name}</p>
                                    <div className='flex justify-between mb-2 text-xs sm:text-sm'><span className='flex'>
                                        <div className='h-3 w-3 mr-[2px]'><img className='h-full w-full' src={GoldenStar} alt="" /></div>
                                        <div className='h-3 w-3 mr-[2px]'><img className='h-full w-full' src={GoldenStar} alt="" /></div>
                                        <div className='h-3 w-3 mr-[2px]'><img className='h-full w-full' src={GoldenStar} alt="" /></div>
                                        <div className='h-3 w-3 mr-[2px]'><img className='h-full w-full' src={GrayStar} alt="" /></div>
                                        <div className='h-3 w-3 mr-[2px]'><img className='h-full w-full' src={GrayStar} alt="" /></div>
                                    </span></div>
                                    <p className='mb-2 text-xs sm:text-sm'><span className=' font-semibold mr-3 text-darkred '>₹ {p?.price}.00</span><span className='text-xs line-through'>3200.00</span></p>
                                </div>
                            </div>
                        </SplideSlide>
                    ))

                }


            </Splide>
        </div>
    )
}

export default SimilarProducts