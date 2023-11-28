import React from 'react';
import { Link } from 'react-router-dom';
import GoldenStar from '../../assets/goldenstar.png';
import GrayStar from '../../assets/graystar.png';

const ProductCard = ({product}) => {
    return (
        <Link to={`/product/${product?.slug}`}>
            <div className='flex flex-col max-[390px]:w-full w-[175px] sm:w-[310px] h-[250px] sm:min-h-[420px] shadow-xl sm:rounded-3xl  sm:rounded-bl-3xl sm:rounded-br-3xl mr-10 border border-[#1a1a1d2e]'>
                <div className='w-full h-[145px] min[392px]:h-[140px] sm:h-[300px]'>
                    <img className='h-full w-full sm:rounded-tr-3xl sm:rounded-tl-3xl' src={product?.images[0]?.img} alt="Image1" />
                </div>
                <div className='w-full flex flex-col sm:pl-5 sm:pr-5 pl-1 pr-1'>
                    <div className='sm:mb-2 mb-1 mt-2 font-semibold font-alegreya text-sm sm:text-[16.5px]'>{product?.name}</div>
                    <div className='flex justify-between mb-2 text-xs sm:text-sm'><span className='flex'>
                        <div className='h-[10px] w-[11px] mr-[1px]'><img className='h-full w-full' src={GoldenStar} alt="" /></div>
                        <div className='h-[10px] w-[11px] mr-[1px]'><img className='h-full w-full' src={GoldenStar} alt="" /></div>
                        <div className='h-[10px] w-[11px] mr-[1px]'><img className='h-full w-full' src={GoldenStar} alt="" /></div>
                        <div className='h-[10px] w-[11px] mr-[1px]'><img className='h-full w-full' src={GrayStar} alt="" /></div>
                        <div className='h-[10px] w-[11px] mr-[1px]'><img className='h-full w-full' src={GrayStar} alt="" /></div>
                    </span><span className='flex justify-center w-[70px]  h-[15px] sm:h-[25px] sm:w-[100px] items-center text-[7px] sm:text-xs bg-[#087e1c] text-[#ffffff] sm:pl-2 sm:pt-1 sm:pb-1 rounded sm:pr-2 '>Quick Delivery</span></div>
                    <p className='mb-2 text-xs sm:text-sm'><span className='font-semibold mr-1 sm:mr-3 text-darkred '>₹ {(product?.discountprice == 'null' || product?.discountprice == undefined)?product?.price:product.discountprice}</span><span className='text-[11px] sm:text-xs line-through'>{(product?.discountprice == 'null' || product?.discountprice == undefined)?'':'₹ '+product?.price}</span></p>
                </div>
            </div>
        </Link>
    )
}

export default ProductCard