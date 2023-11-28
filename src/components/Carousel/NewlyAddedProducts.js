import '@splidejs/react-splide/css';
import './NewlyAddedCarousel.css';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import GoldenStar from '../../assets/goldenstar.png';
import GrayStar from '../../assets/graystar.png';


const NewlyAddedProducts = () => {

    const products = useSelector(state => state.initialData.newproducts);

    return (
        <div className='flex flex-col lg:flex-row w-full pl-5 pr-5 sm:pl-20 sm:pr-20 justify-center items-center'>
            <div className='flex'>
                <Link to={`/product/${products[0]?.slug}`}>
                    <div className='flex flex-col w-[150px] lg:w-[270px] xl:w-[300px] h-full shadow-xl rounded-bl-lg rounded-br-lg  sm:rounded-bl-3xl sm:rounded-br-3xl '>
                        <div className='w-full h-[115px] min-[392px]:h-[140px] lg:h-[270px] xl:h-[300px] overflow-hidden'>
                            <img className='min-h-full min-w-full rounded-tr-lg rounded-tl-lg sm:rounded-tr-3xl sm:rounded-tl-3xl hover:scale-110 transition-all duration-500' src={products[0]?.images[0].img} alt='Img1' />
                        </div>
                        <div className='w-full flex flex-col sm:pl-5 sm:pr-5 pl-1 pr-1'>
                            <p className='mb-2 mt-2 font-semibold font-alegreya text-sm sm:text-[16.5px]'>{products[0]?.name}</p>
                            <div className='flex justify-between mb-2 text-xs sm:text-sm'><span className='flex'>
                                <div className='h-3 w-3 mr-[2px]'><img className='h-full w-full' src={GoldenStar} alt="" /></div>
                                <div className='h-3 w-3 mr-[2px]'><img className='h-full w-full' src={GoldenStar} alt="" /></div>
                                <div className='h-3 w-3 mr-[2px]'><img className='h-full w-full' src={GoldenStar} alt="" /></div>
                                <div className='h-3 w-3 mr-[2px]'><img className='h-full w-full' src={GrayStar} alt="" /></div>
                                <div className='h-3 w-3 mr-[2px]'><img className='h-full w-full' src={GrayStar} alt="" /></div>
                            </span></div>
                            <p className='mb-2 text-xs sm:text-sm'><span className='font-semibold mr-3 text-[#BD1818] '>₹ {(products[0]?.discountprice == "null" || products[0]?.discountprice == null)?products[0]?.price : products[0]?.discountprice}</span><span className='text-xs line-through'>{(products[0]?.discountprice) ? products[0]?.price : ''}</span></p>
                        </div>
                    </div>
                </Link>
                <span className='w-7'></span>
                <Link to={`/product/${products[1]?.slug}`}>
                    <div className='flex flex-col  w-[150px]  lg:w-[270px] xl:w-[300px]  h-full shadow-xl rounded-bl-lg rounded-br-lg  sm:rounded-bl-3xl sm:rounded-br-3xl '>
                        <div className='w-full h-[115px] min-[392px]:h-[140px]  lg:h-[270px] xl:h-[300px] overflow-hidden'>
                            <img className='h-full w-full rounded-tr-lg rounded-tl-lg sm:rounded-tr-3xl sm:rounded-tl-3xl hover:scale-110 transition-all duration-500' src={products[1]?.images[0].img} alt='img1' />
                        </div>
                        <div className='w-full flex flex-col sm:pl-5 sm:pr-5 pl-1 pr-1'>
                            <p className='mb-2 mt-2 font-semibold font-alegreya text-sm sm:text-[16.5px]'>{products[1]?.name}</p>
                            <div className='flex justify-between mb-2 text-xs sm:text-sm'><span className='flex'>
                                <div className='h-3 w-3 mr-[2px]'><img className='h-full w-full' src={GoldenStar} alt="" /></div>
                                <div className='h-3 w-3 mr-[2px]'><img className='h-full w-full' src={GoldenStar} alt="" /></div>
                                <div className='h-3 w-3 mr-[2px]'><img className='h-full w-full' src={GoldenStar} alt="" /></div>
                                <div className='h-3 w-3 mr-[2px]'><img className='h-full w-full' src={GrayStar} alt="" /></div>
                                <div className='h-3 w-3 mr-[2px]'><img className='h-full w-full' src={GrayStar} alt="" /></div>
                            </span></div>
                            <p className='mb-2 text-xs sm:text-sm'><span className='font-semibold mr-3 text-[#BD1818] '>₹ {(products[1]?.discountprice != 'null') ? products[1]?.discountprice : products[1]?.price}</span><span className='text-xs line-through'>{(products[1]?.discountprice) ? products[1]?.price : ''}</span></p>
                        </div>
                    </div>
                </Link>
                <span className='hidden lg:block lg:w-7 '></span>
            </div>

            <span className='h-6'></span>
            <div className='flex'>
                <Link to={`/product/${products[2]?.slug}`}>
                    <div className='flex flex-col  w-[150px]  lg:w-[270px] xl:w-[300px]  h-full shadow-xl rounded-bl-lg rounded-br-lg  sm:rounded-bl-3xl sm:rounded-br-3xl '>
                        <div className='w-full h-[115px] min-[392px]:h-[140px]  lg:h-[270px] xl:h-[300px]  overflow-hidden'>
                            <img className='h-full w-full rounded-tr-lg rounded-tl-lg sm:rounded-tr-3xl sm:rounded-tl-3xl hover:scale-110 transition-all duration-500' src={products[2]?.images[0].img} alt='img1' />
                        </div>
                        <div className='w-full flex flex-col sm:pl-5 sm:pr-5 pl-1 pr-1'>
                            <p className='mb-2 mt-2 font-semibold font-alegreya text-sm sm:text-[16.5px]'>{products[2]?.name}</p>
                            <div className='flex justify-between mb-2 text-xs sm:text-sm'><span className='flex'>
                                <div className='h-3 w-3 mr-[2px]'><img className='h-full w-full' src={GoldenStar} alt="" /></div>
                                <div className='h-3 w-3 mr-[2px]'><img className='h-full w-full' src={GoldenStar} alt="" /></div>
                                <div className='h-3 w-3 mr-[2px]'><img className='h-full w-full' src={GoldenStar} alt="" /></div>
                                <div className='h-3 w-3 mr-[2px]'><img className='h-full w-full' src={GrayStar} alt="" /></div>
                                <div className='h-3 w-3 mr-[2px]'><img className='h-full w-full' src={GrayStar} alt="" /></div>
                            </span></div>
                            <p className='mb-2 text-xs sm:text-sm'><span className='font-semibold mr-3 text-[#BD1818] '>₹ {(products[0]?.discountprice == "null" || products[0]?.discountprice == null)?products[0]?.price : products[0]?.discountprice}</span><span className='text-xs line-through'>{(products[2]?.discountprice) ? products[2]?.price : ''}</span></p>
                        </div>
                    </div>
                </Link>
                <span className='w-7'></span>
                <Link to={`/product/${products[3]?.slug}`}>
                    <div className='flex lg:hidden xl:flex flex-col w-[150px] lg:w-[270px] xl:w-[300px]  h-full shadow-xl rounded-bl-lg rounded-br-lg  sm:rounded-bl-3xl sm:rounded-br-3xl '>
                        <div className='w-full h-[115px] min-[392px]:h-[140px]  lg:h-[270px] xl:h-[300px]  overflow-hidden'>
                            <img className='h-full w-full rounded-tr-lg rounded-tl-lg sm:rounded-tr-3xl sm:rounded-tl-3xl hover:scale-110 transition-all duration-500' src={products[3]?.images[0].img} alt='img1' />
                        </div>
                        <div className='w-full flex flex-col sm:pl-5 sm:pr-5 pl-1 pr-1'>
                            <p className='mb-2 mt-2 font-semibold font-alegreya text-sm sm:text-[16.5px]'>{products[3]?.name}</p>
                            <div className='flex justify-between mb-2 text-xs sm:text-sm'><span className='flex'>
                                <div className='h-3 w-3 mr-[2px]'><img className='h-full w-full' src={GoldenStar} alt="" /></div>
                                <div className='h-3 w-3 mr-[2px]'><img className='h-full w-full' src={GoldenStar} alt="" /></div>
                                <div className='h-3 w-3 mr-[2px]'><img className='h-full w-full' src={GoldenStar} alt="" /></div>
                                <div className='h-3 w-3 mr-[2px]'><img className='h-full w-full' src={GrayStar} alt="" /></div>
                                <div className='h-3 w-3 mr-[2px]'><img className='h-full w-full' src={GrayStar} alt="" /></div>
                            </span></div>
                            <p className='mb-2 text-xs sm:text-sm'><span className='font-semibold mr-3 text-[#BD1818] '>₹ {(products[3]?.discountprice == "null" || products[3]?.discountprice == undefined)?products[3]?.price : products[3]?.discountprice}</span><span className='text-xs line-through'>{(products[3]?.discountprice == "null")?'':products[3]?.price}</span></p>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default NewlyAddedProducts