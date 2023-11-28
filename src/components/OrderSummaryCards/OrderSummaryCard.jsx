import React from 'react';

const OrderSummaryCard = ({item}) => {
  return (
    <div className='w-full h-12 flex mb-2'>
        <div className='h-full w-12 p-[2px] mr-2'><img className='w-full h-full' src={item?.productid?.images[0].img} alt="" /></div>
        <div className='flex flex-col'>
            <p className='text-xs'>{item?.productid?.name} x {item?.quantity}</p>
            <p className='text-xs text-gray'>1 x ₹{item?.productid?.price}</p>
        </div>
    </div>
  )
}

export default OrderSummaryCard