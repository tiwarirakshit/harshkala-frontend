import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import Header2 from '../../components/Header2/Header2';
import ProductCard from '../../components/ProductCard/ProductCard';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getFilteredProducts } from '../../actions/Product/ProductAction';
import Slider from '@material-ui/core/Slider';
import './Listing.css';
import { BiMenu, BiX } from 'react-icons/bi';
import Navbar from '../../components/Navbar/Navbar';

const ListingForCategories = () => {
    const [value, setValue] = useState([0, 4999]);
    const dispatch = useDispatch();

    const searchedProducts = useSelector(state => state.products.searchedProducts);
    const filteredProducts = useSelector(state => state.products.filteredproducts);
    // 0 - all products
    // 1 - searched products
    // 2 - filtered products
    const [pType, setPType] = useState(1);
    const [page, setPage] = useState(2);

    const rangeSelector = (event, newValue) => {
        setValue(newValue);
        dispatch(getFilteredProducts([], value, page));
        setPType(2);
    }
    const [hamburger,setHamburger] = useState(false);

    const toggleHamburger=()=>{
      setHamburger(!hamburger);
    }

    useEffect(() => {
        if (searchedProducts !== "") {
            setPType(1)
        }
    }, [searchedProducts])


    const handlePage = () => {
        let newPage = page + 1;
        setPage(newPage);
    }

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])



    return (
        <>
            <div className='flex flex-col'>
                <div className='absolute block sm:hidden top-4 left-6 z-[60]' onClick={toggleHamburger}>
                    {
                        hamburger ? <BiX color='darkred' size={22} /> :
                            <BiMenu size={22} color='#1a1a1d' />

                    }
                </div>
                <Navbar show={hamburger} />
                <Header />
                <Header2 />
                <div className='flex min-h-full h-[1400px]'>
                    <div className='hidden sm:flex flex-col items-end min-h-full min-w-[340px] max-w-[340px] pt-10 '>
                        <p className='text-sm font-semibold tracking-wide'>Showing 1-20 <span className='text-gray font-normal '>out of 2,356 products</span></p>
                        <div className='pt-4 pl-4 pr-4 w-[250px] min-h-[200px] mt-6 border rounded border-[#1a1a1d36]'>
                            <p className='font-semibold'>Prices</p>
                            <div className='flex justify-between items-center'>
                                <p className='text-sm mt-3 font-dmsans'>Range</p>
                                <p className='text-xs font-dmsans mt-3'>Rs {value[0]} - Rs {value[1]}</p>
                            </div>
                            <span className='w-full flex justify-center items-center h-14'>
                                <Slider
                                    value={value}
                                    min={0}
                                    max={4999}
                                    onChange={rangeSelector}
                                    valueLabelDisplay="auto"
                                />
                            </span>

                        </div>
                    </div>

                    <div className='flex flex-col min-h-full'>
                        <p className='mt-10 h-5 w-full flex justify-end text-sm text-gray font-dmsans pr-10'><span>Sort by:&nbsp;</span><span className='font-dmsans text-[#000]'>New Arrivals</span></p>
                        <div className='flex flex-col justify-between'>
                            <div className='min-h-full pt-8 pl-2 pr-2 sm:pl-14 max-w-full grid grid-cols-2 sm:grid-cols-3 gap-y-8'>
                                {
                                    pType === 1 && searchedProducts && searchedProducts.map((product, key) => (
                                        <ProductCard key={key} name={product?.name} img={product?.images[0].img} price={product?.discountprice} slug={product.slug} />
                                    ))
                                }                            {
                                    pType === 2 && filteredProducts?.map((product, key) => (
                                        <ProductCard key={key} name={product?.name} img={product?.images[0].img} price={product?.discountprice} slug={product.slug} />
                                    ))
                                }
                            </div>{
                                <div className='w-full h-20 flex justify-end items-start' onClick={handlePage}><button className='bg-red text-white w-[120px] h-[32px] font-dmsans mb-20'>Load More</button></div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ListingForCategories