import React, { useEffect, useState } from 'react';
import Header from '../../components/Header/Header';
import Header2 from '../../components/Header2/Header2';
import Footer from '../../components/Footer/Footer';
import Blog_Flowers from '../../assets/flowers.webp';
import Blog_Basket from '../../assets/basket.png';
import Blog_Collage from '../../assets/collage.png';
import Blog_jewelery from '../../assets/jewelery.png';
import Blog_gifts from '../../assets/bloggifts.png';
import { BiMenu, BiX } from 'react-icons/bi';
import Navbar from '../../components/Navbar/Navbar';
const Blogs = () => {

    useEffect(()=>{
        window.scrollTo(0,0);
    },[])
    const [hamburger, setHamburger] = useState(false);

    const toggleHamburger = () => {
      setHamburger(!hamburger);
    }

    return (
        <>
            <div className='flex flex-col relative'>
                <div className='absolute block sm:hidden top-4 left-6 z-[60]' onClick={toggleHamburger}>
                    {
                        hamburger ? <BiX color='darkred' size={22} /> :
                            <BiMenu size={22} color='#1a1a1d' />

                    }
                </div>
                <Navbar show={hamburger}/>
                <Header />
                <Header2 />
                <div className='flex flex-col items-center'>
                    <h1 className='w-full flex pl-3 lg:pl-10 font-alegreya text-2xl font-semibold pt-5 mb-5'>Blogs</h1>
                    <div className='flex flex-col w-full px-6 lg:w-[800px] leading-7 tracking-wide text-[#383838] font-dmsans'>
                        <p className='text-sm sm:text-lg'>
                            Gifts can be a way to express feelings of appreciation and
                            gratitude towards someone. They symbolize love and
                            devotion. People best communicate through the use of
                            symbols like gifts.
                        </p>
                        <p className='mt-4 text-sm sm:text-lg'>
                            Gift-giving is a universal way to show interest, appreciation,
                            and gratitude. It’s also an important part of our social fabric
                            and plays a crucial role in how we communicate, bond, and
                            love. It’s worth noting that the act of giving gifts is not just
                            limited to humans, animals also give gifts as part of their
                            mating rituals.
                        </p>
                        <h1 className='text-black uppercase mt-10 font-dmsans text-lg sm:text-2xl font-bold'>
                            5 BEST GIFTS FOR FAMILY AND FRIENDS
                        </h1>


                        <h2 className='text-black uppercase mt-3 pl-1 sm:pl-3 font-dmsans  sm:text-lg font-semibold'>
                            1. FLOWERS
                        </h2>
                        <div className='p-4 sm:p-20 w-full'>
                            <img src={Blog_Flowers} alt="" />
                        </div>
                        <p className='text-sm sm:text-lg'>
                            The most common yet the most beautiful gift one can
                            give is flowers be it your parents, your partner or even a
                            friend. This gesture never gets old and is always looked
                            as a sweet and a very lovely thing to show someone you
                            are thinking of them.
                        </p>


                        <h2 className='text-black uppercase mt-8 pl-1 sm:pl-3 font-dmsans sm:text-lg font-semibold'>
                            2. ASSORTED FOOD BASKET
                        </h2>
                        <div className='p-10 sm:p-20 w-full flex justify-center scale-110'>
                            <img src={Blog_Basket} alt="" />
                        </div>
                        <p className='text-sm sm:text-lg'>
                            As an old saying goes ”Food is the fastest way to reach
                            someone’s heart” is indeed true. Giving your foodie friend or
                            family member an assorted food basket with exquisite items
                            is a classic gesture to show you care about them.
                        </p>


                        <h2 className='text-black uppercase mt-8 pl-1 sm:pl-3 font-dmsans sm:text-lg font-semibold'>
                            3. PHOTO COLLAGE
                        </h2>
                        <div className='p-8 sm:p-20 w-full flex justify-center scale-110'>
                            <img src={Blog_Collage} alt="" />
                        </div>
                        <p className='text-sm sm:text-lg'>
                            Giving a collection of your memories with your loved
                            one in one frame talks out loud about the beautiful and
                            fun times spent together.
                        </p>


                        <h2 className='text-black uppercase mt-8 pl-1 sm:pl-3 font-dmsans sm:text-lg font-semibold'>
                            4. AN ENGRAVED JEWELRY
                        </h2>
                        <div className='p-10 sm:p-20 w-full flex justify-center scale-110'>
                            <img src={Blog_jewelery} alt="" />
                        </div>
                        <p className='text-sm sm:text-lg'>
                            Most people make a habit of treating themselves once in
                            a while to something special or at the very least make
                            sure that they renew the basics such as shoes, clothing,
                            bags, and coats every now and then. However, there are
                            some things that are just not on most people’s radar,
                            mostly because it is extra, considered a luxury, and come
                            at a significant cost. A jewelry is a timeless gift.
                        </p>


                        <h2 className='text-black uppercase mt-8 pl-1 sm:pl-3 font-dmsans sm:text-lg font-semibold text-black'>
                            5. PERSONALISED GIFTS
                        </h2>
                        <div className='p-10 sm:p-20 w-full flex justify-center scale-110'>
                            <img src={Blog_gifts} alt="" />
                        </div>
                        <p className='text-sm sm:text-lg'>
                            There is nothing as special as a personalised gift because
                            they resonate with people’s emotions and show them
                            how much they mean to you. They make the person feel
                            special about themselves and evoke happy memories.
                            They are unique and highly valued and they last for a
                            lifetime.

                        </p>

                        <p className='mt-6 text-xl font-bold mb-20'>
                            Happy Gifting :)
                        </p>


                    </div>
                </div>
                <Footer />
            </div>
        </>
    )
}

export default Blogs