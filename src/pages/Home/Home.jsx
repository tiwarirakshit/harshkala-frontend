import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import TrendingProducts from "../../components/Carousel/TrendingProducts";
import Testimonials from "../../components/Carousel/Testimonials";
import NewlyAddedProducts from "../../components/Carousel/NewlyAddedProducts";
import GiftBoxes from "../../assets/giftboxes.png";
import Header from "../../components/Header/Header";
import Header2 from "../../components/Header2/Header2";
import CircularCategories from "../../components/Carousel/CircularCategories";
import Footer from "../../components/Footer/Footer";
import { useState } from "react";
import Blog1 from "../../assets/blog1.jpg";
import Blog2 from "../../assets/blog2.png";
import Blog3 from "../../assets/blog3.jpg";
import Banner from "../../components/Carousel/Banner";
import Navbar from "../../components/Navbar/Navbar";
import { BiCross, BiMenu, BiX } from "react-icons/bi";
import Blog_Flowers from "../../assets/flowers.webp";
import Blog_Basket from "../../assets/basket.png";
import Blog_Collage from "../../assets/collage.png";
import Blog_jewelery from "../../assets/jewelery.png";
import Blog_gifts from "../../assets/bloggifts.png";

const Home = () => {
  const [category, setCategory] = useState(null);
  const navigate = useNavigate();
  const auth = useSelector((state) => state.user);
  const allcategories = useSelector((state) => state.initialData.categories);
  const [hamburger, setHamburger] = useState(false);

  const toggleHamburger = () => {
    setHamburger(!hamburger);
  };
  useEffect(() => {
    if (allcategories) {
      setCategory(allcategories);
    }
  }, [allcategories]);

  return (
    <>
      <div className="flex flex-col">
        <div
          className="absolute block sm:hidden top-4 left-6 z-[60]"
          onClick={toggleHamburger}
        >
          {hamburger ? (
            <BiX color="darkred" size={22} />
          ) : (
            <BiMenu size={22} color="#1a1a1d" />
          )}
        </div>
        <Navbar show={hamburger} />
        <Header />
        <Header2 />

        {/* GOLDEN BORDER  */}
        <div className="w-full pl-1 pr-1 sm:pl-10 sm:pr-10 lg:pl-12 lg:pr-12 pt-6 sm:pt-8 mb-4 sm:mb-0">
          <Banner />
        </div>
        {/* GOLDEN BORDER  */}

        {/* HEADING 1 */}
        <div className="h-10 sm:h-28 mb-1 w-full flex items-center justify-end  text-lg sm:text-3xl text-[#1a1a1d]  flex-col">
          <p className="font-alegreya font-semibold text-[#1a1a1d]">
            Top Categories
          </p>
          <p className="text-[#888888] text-xs sm:text-lg">
            Wide range of Gifts for your celebration
          </p>
        </div>
        {/* HEADING 1 */}

        <br className="hidden sm:block" />

        {/* CIRCLE CATGORIES  */}
        <CircularCategories />
        {/* CIRCLE CATGORIES  */}

        <br />
        <br className="hidden sm:block" />
        <br className="hidden sm:block" />
        <br className="hidden sm:block" />
        <br className="hidden sm:block" />

        {/* TRENDING PRODUCTS  */}
        <div className="w-full h-[300px] sm:h-[500px] ">
          <TrendingProducts />
        </div>
        {/* TRENDING PRODUCTS  */}

        {/* HEADING 2 */}
        <div className="h-5 sm:h-28  w-full flex flex-col items-start justify-end mt-12 text-lg sm:text-3xl sm:pl-20 pl-5">
          <p className="font-alegreya text-[#1a1a1d] font-semibold">
            Newly Added Products
          </p>
          <p className="text-[#888888] text-xs sm:text-lg">
            Look for latest gifts
          </p>
        </div>
        {/* HEADING 2 */}

        <br />
        <br className="hidden sm:block" />
        <br className="hidden sm:block" />

        {/* NEWLY ADDED PRODUCTS  */}
        <div className="w-full max-h-[540px] sm:h-[900px] lg:h-[500px]">
          <NewlyAddedProducts />
        </div>
        {/* NEWLY ADDED PRODUCTS  */}
        <br className="hidden sm:block" />
        {/* SEARCH  */}
        <div className="flex h-[50px] sm:h-[100px] w-full  xl:pl-20 xl:pr-20 pl-5 pr-5  sm:rounded-lg relative items-center mt-10">
          <div className="z-10 h-full w-full border border-[#DD2745] rounded-lg flex items-center justify-between">
            <div className="flex flex-col pl-2 sm:pl-8">
              <p className="uppercase text-[#DD2745] font-semibold text-xs sm:text-2xl  font-noto ">
                Find The Perfect Gift
              </p>
              <p className="text-[9px] sm:text-xs text-[#DD2745]">
                Discover Gift by Recipent, Relationship & Occasions
              </p>
            </div>

            <div className=" w-full sm:w-[150px] hidden sm:flex justify-center items-center z-0 relative bottom-8 left-16 ">
              <img
                src={GiftBoxes}
                className="absolute top-10 right-[200px] h-[80px] "
                alt=""
              />
              <img
                className="h-full w-[120px] ml-8 sm:ml-0 sm:w-[450px]  z-40"
                src={GiftBoxes}
                alt=""
              />
            </div>

            <div className="flex pr-2 sm:pr-8">
              <Link to={"/listing"}>
                <button className="bg-[#dd2745] text-[#ffffff] text-[12px] sm:text-lg sm:w-[180px] h-[30px] w-[110px] sm:h-[65px] rounded-3xl">
                  EXPLORE
                </button>
              </Link>
            </div>
          </div>
        </div>
        {/* SEARCH  */}
        <br />
        <br className="hidden sm:block" />
        <br className="hidden sm:block" />

        <br className="hidden sm:block" />
        <br className="hidden sm:block" />

        {/* TESTIMONIALS  */}
        <div>
          <Testimonials />
        </div>
        {/* TESTIMONIALS  */}

        {/* BLOGS  */}
        <div className="flex flex-col min-h-[700px] items-center ">
          <div className="h-20 sm:h-32 font-alegreya flex items-center justify-center text-3xl font-semibold text-[#1a1a1d]">
            Blogs
          </div>
          <div className="flex flex-col lg:flex-row pl-5 pr-5 sm:pl-20 sm:pr-20 max-[600px]:w-full ">
            <div className="flex flex-col justify-center sm:justify-start items-center sm:mr-8  sm:w-[360px] w-full">
              <div className="w-[300px] sm:w-[360px] h-[220px] sm:h-[300px] mb-5">
                <img className="h-full w-full" src={Blog_Flowers} alt="" />
              </div>
              <div className="pl-5 pr-5 sm:pl-0 sm:pr-0">
                <p className="font-semibold mb-2 text-[15px] uppercase font-dmsans">
                  5 Best Gifts for family and friends
                </p>
                <p className="text-xs sm:text-sm text-gray leading-6 ">
                  Gifts can be a way to express feelings of appreciation and
                  gratitude towards someone. They symbolize love and devotion.
                  People best communicate through the use of symbols like
                  gifts...
                </p>
                <p
                  className="cursor-pointer font-dmsans text-red text-sm font-semibold mt-3 text-darkred"
                  onClick={() => {
                    navigate("/blog");
                  }}
                >
                  Learn more >
                </p>
              </div>
            </div>

            <div className="flex flex-col w-full items-center justify-start sm:w-[360px] sm:mr-8 mt-4 sm:mt-0">
              <div className="sm:w-full bg-[#61616b22] rounded-md h-[90px] mr-5 sm:mr-0 ml-5 sm:ml-0 sm:h-[80px] font-alegreya flex items-center justify-center  text-[15px] sm:text-lg pl-2 pr-2 sm:pl-10 sm:pr-10">
                Gift-giving is a universal way to show interest, appreciation,
                and gratitude
              </div>
              <div className="w-[300px] sm:w-full mt-5 h-[250px]">
                <img src={Blog_Basket} className="h-full w-full" alt="" />
              </div>
              <div className="mt-5 pl-5 pr-5 sm:pl-0 sm:pr-0">
                <p className="font-alegreya mb-2"></p>
                <p className="text-xs sm:text-sm text-gray leading-6 ">
                  It’s worth noting that the act of giving gifts is not just
                  limited to humans, animals also give gifts as part of their
                  mating rituals
                </p>
                <p
                  className="font-dmsans text-red text-sm font-semibold mt-3 text-darkred cursor-pointer"
                  onClick={() => {
                    navigate("/blog");
                  }}
                >
                  Learn more >
                </p>
              </div>
            </div>

            <div className="lg:hidden xl:flex flex-col w-full sm:w-[360px] justify-center items-center mt-8 sm:mt-0">
              <div className="w-[300px] h-[180px] sm:w-[360px] sm:h-[240px] mb-5">
                <img className="h-full w-full" src={Blog_gifts} alt="" />
              </div>
              <div className="w-[300px] h-[180px] sm:w-[360px] sm:h-[240px]">
                <img className="h-full w-full" src={Blog_jewelery} alt="" />
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />

        {/* BLOGS  */}
      </div>

      <Footer />
    </>
  );
};

export default Home;
