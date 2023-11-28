import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import {
  BiCheck,
  BiCheckCircle,
  BiCircle,
  BiMenu,
  BiRadio,
  BiRightArrowAlt,
  BiX,
} from "react-icons/bi";
import Header2 from "../../components/Header2/Header2";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { getGiftBoxes } from "../../actions/GiftBox/GiftBoxAction";
import { getAllProducts } from "../../actions/Product/ProductAction";
import { getGiftCards } from "../../actions/GiftCard/GiftCard";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import './giftbox.css'



const GiftBox = () => {
  const [hamburger, setHamburger] = useState(false);
  const [giftBoxes, setGiftBoxes] = useState(null);
  const [giftCards, setGiftCards] = useState(null);
  const [products, setProducts] = useState(null);
  const allgiftboxes = useSelector((state) => state.giftbox.giftboxes);
  const allproducts = useSelector((state) => state.initialData.products);
  const allcards = useSelector((state) => state.giftcard.giftcards);
  const [isMagnified, setIsMagnified] = useState(false);

  useEffect(() => {
    dispatch(getAllProducts(0, null));
  }, []);
  useEffect(() => {
    dispatch(getGiftCards());
  }, []);

  useEffect(() => {
    if (allproducts) {
      setProducts(allproducts);
    }
  }, [allproducts]);

  useEffect(() => {
    if (allcards) {
      setGiftCards(allcards);
    }
  }, [allcards]);

  const [currentPage, setCurrentPage] = useState(null);
  const [totalPrice, setTotalPrice] = useState(0);

  const errorToast = (msg) => {
    toast(msg, { position: "top-center" });
  };

  const toggleHamburger = () => {
    setHamburger(!hamburger);
  };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getGiftBoxes());
  }, []);

  useEffect(() => {
    if (allgiftboxes) {
      setGiftBoxes(allgiftboxes);
    }
  }, [allgiftboxes]);

  const [selectedBox, setSelectedBox] = useState(null);
  const [selectedCard, setSelectedCard] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const selectGiftBox = (box) => {
    setSelectedBox(box);
    setTotalPrice(box?.price);
  };
  const selectProduct = (product) => {
    setSelectedProduct(product);
    setTotalPrice(parseInt(totalPrice) + parseInt(product?.price));
  };
  const selectCard = (card) => {
    setSelectedCard(card);
    setTotalPrice(totalPrice + card?.price);
  };

  const handleCurrentPage = () => {
    if (currentPage == null) {
      selectedBox ? setCurrentPage("product") : errorToast("Select A Box!");
    } else if (currentPage == "product") {
      selectedProduct
        ? setCurrentPage("card")
        : errorToast("Select A Product!");
    } else if (currentPage == "card") {
      selectedCard ? handleCheckout() : errorToast("Select A Card!");
    }
  };

  const navigate = useNavigate();

  const handleCheckout = () => {
    const buydata = [
      { box: selectedBox },
      { product: selectedProduct },
      { card: selectedCard },
    ];
    navigate("/gift-buy-now", {
      state: {
        data: buydata,
        price: totalPrice,
      },
    });
  };

  return (
    <>
      <div className="flex flex-col ">
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

        <div className="pt-6 sm:pt-16 justify-center pb-10 items-center gift-nav flex">
          <div className={`line h-[3px] w-14 sm:w-[180px] bg-darkred`}></div>
          <div
            className={`circle h-6 w-6 border-4 rounded-full border-darkred`}
          ></div>
          <div
            className={`line h-[3px] w-14 sm:w-[280px] ${
              currentPage == "product" || currentPage == "card"
                ? "bg-darkred"
                : "bg-[#1a1a1d24]"
            }`}
          ></div>
          <div
            className={`circle h-4 w-4  rounded-full ${
              currentPage == "product" || currentPage == "card"
                ? "border-4 border-darkred h-6 w-6"
                : "bg-[#1a1a1d3a]"
            }`}
          ></div>
          <div
            className={`line h-[3px] w-14 sm:w-[280px] ${
              currentPage == "card" || currentPage == "card"
                ? "bg-darkred"
                : "bg-[#1a1a1d24]"
            }`}
          ></div>
          <div
            className={`circle h-4 w-4  rounded-full ${
              currentPage == "card"
                ? "border-4 border-darkred h-6 w-6"
                : "bg-[#1a1a1d3a]"
            }`}
          ></div>
          <div
            className={`line h-[3px] w-14 sm:w-[180px] ${
              selectedCard ? "bg-darkred" : "bg-[#1a1a1d24]"
            }`}
          ></div>
        </div>

        <div className="font-dmsans pl-10 uppercase font-semibold text-[#1a1a1d]">
          {currentPage == null && <p>Choose box type</p>}
          {currentPage == "product" && <p>Choose Product</p>}
          {currentPage == "card" && <p>Choose a card</p>}
        </div>

        <div className="mb-16 min-h-full flex flex-col-reverse lg:flex-row w-full sm:pl-20 sm:pr-20 pt-10 items-center lg:items-start ">
          {currentPage == null && (
            <div className="w-full pl-5 grid grid-cols-2 xl:grid-cols-3 gap-x-0">
              {giftBoxes?.map((box, key) => (
                <div
                  key={key}
                  className="h-[200px] sm:h-[300px] cursor-pointer shadow-xl w-[155px] sm:w-[250px] border rounded-lg flex flex-col justify-between pb-3 relative"
                  onClick={() => {
                    selectGiftBox(box);
                  }}

                  onMouseEnter={() => setIsMagnified(true)}
                    onMouseLeave={() => setIsMagnified(false)}
                    style={{ transform: isMagnified ? 'scale(1.2)' : 'scale(1)', transition: 'transform 0.5s ease-in-out' }}
                >
                  <div className="absolute right-3 top-3">
                    {selectedBox?._id == box?._id ? (
                      <BiCheckCircle size={25} color="darkred" />
                    ) : (
                      <BiCheckCircle size={23} color="gray" />
                    )}
                  </div>
                  <div className="h-[130px] sm:h-[200px] w-full">
                    <img
                      className="h-full w-full"
                      src={box?.images[0]?.img}
                      alt=""
                    />
                  </div>
                  <div>
                    <p className="pl-2 font-dmsans pt-2">{box?.name}</p>
                    <div className="font-semibold pl-2 font-dmsans text-darkred flex">
                      <p>₹&nbsp;{box?.price}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {currentPage == "product" && (
            <div className="w-full grid grid-cols-2 xl:grid-cols-3 gap-x-2 pl-2 pr-2">
              {products?.map((product, key) => (
                <div
                  key={key}
                  className="h-[230px] sm:h-[330px] cursor-pointer hover:scale-110 transition-all duration-500 shadow-xl sm:w-[260px] sm:min-w-[260px] max-w-[200px] border rounded-lg flex flex-col justify-start pb-3 relative mb-4"
                  onClick={() => {
                    selectProduct(product);
                  }}
                >
                  <div className="absolute right-3 top-3">
                    {selectedProduct?._id == product?._id ? (
                      <BiCheckCircle size={25} color="darkred" />
                    ) : (
                      <BiCheckCircle size={23} color="gray" />
                    )}
                  </div>
                  <div className="h-[130px] sm:h-[230px] rounded-t-xl w-full">
                    <img
                      className="h-full w-full rounded-t-lg"
                      src={product?.images[0]?.img}
                      alt=""
                    />
                  </div>
                  <div>
                    <p className="pl-1 sm:pl-3 pr-3  text-xs sm:text-[15px] font-dmsans pt-2">
                      {product?.name}
                    </p>
                    <p className="pl-1 sm:pl-3 pr-3  text-[10px] sm:text-xs pb-2 text-[#888888]">
                      {product?.description?.slice(0, 50)}...
                    </p>
                    <div className="font-semibold pl-1 sm:pl-3 font-dmsans text-darkred flex">
                      <p>₹&nbsp;{product?.price}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {currentPage == "card" && (
            <div className="w-full grid grid-cols-2 pl-2 pr-2 xl:grid-cols-3 gap-x-2 sm:gap-x-0">
              {giftCards?.map((card, key) => (
                <div
                  key={key}
                  className="h-[200px] sm:h-[310px] cursor-pointer hover:scale-110 transition-all duration-500 shadow-xl sm:w-[248px] border rounded-lg flex flex-col justify-start  pb-3 relative gap-y-5 pl-2"
                  onClick={() => {
                    selectCard(card);
                  }}
                >
                  <div className="absolute right-3 top-3">
                    {selectedCard?._id == card?._id ? (
                      <BiCheckCircle size={25} color="darkred" />
                    ) : (
                      <BiCheckCircle size={23} color="gray" />
                    )}
                  </div>
                  <div className="h-[130px] sm:h-[250px] w-full overflow-hidden">
                    <img
                      className="h-full w-full"
                      src={card?.images[0]?.img}
                      alt=""
                    />
                  </div>
                  <div>
                    <p className="pl-2 font-dmsans pt-2 text-xs sm:text-sm">
                      {card?.name}
                    </p>
                    <div className="font-semibold pl-2 font-dmsans text-darkred flex text-sm">
                      <p>₹&nbsp;{card?.price}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          <div>
            <div className="flex flex-col mb-10 sm:mb-4 w-[300px] sm:w-[400px]   min-h-[100px] max-h-[400px] pl-3 pt-3 border rounded pr-3 pb-3">
              <p className="text-sm font-dmsans ">Order Summary</p>
              <div className="min-h-20 mb-2 mt-1">
                {!selectedBox && (
                  <p className="font-dmsans h-full w-full flex justify-center items-center ">
                    Select a Box
                  </p>
                )}
                {selectedBox && (
                  <div className="flex mt-1">
                    <div className="h-16 w-16 border">
                      <img
                        className="h-full w-full"
                        src={selectedBox?.images[0]?.img}
                        alt=""
                      />
                    </div>
                    <p className="text-sm ml-2 font-dmsans pt-2 flex">
                      {selectedBox?.name}{" "}
                      <p className="text-[#1a1a1d4a]">&nbsp;&nbsp;x&nbsp;1</p>
                    </p>
                  </div>
                )}
                {selectedProduct && (
                  <div className="flex mt-1">
                    <div className="h-16 w-16 border">
                      <img
                        className="h-full w-full"
                        src={selectedProduct?.images[0]?.img}
                        alt=""
                      />
                    </div>
                    <p className="text-sm ml-2 font-dmsans pt-2 flex">
                      {selectedProduct?.name}{" "}
                      <p className="text-[#1a1a1d4a]">&nbsp;&nbsp;x&nbsp;1</p>
                    </p>
                  </div>
                )}
                {selectedCard && (
                  <div className="flex mt-1">
                    <div className="h-16 w-16 border">
                      <img
                        className="h-full w-full"
                        src={selectedCard?.images[0]?.img}
                        alt=""
                      />
                    </div>
                    <p className="text-sm ml-2 font-dmsans pt-2 flex">
                      {selectedCard?.name}{" "}
                      <p className="text-[#1a1a1d4a]">&nbsp;&nbsp;x&nbsp;1</p>
                    </p>
                  </div>
                )}
              </div>
              <div className="mt-1 font-dmsans flex justify-between items-center w-full">
                <p>Total</p>
                {selectedBox && !selectedProduct && (
                  <p className="pr-2">Rs {totalPrice}</p>
                )}
                {selectedProduct && !selectedCard && (
                  <p className="pr-2">
                    Rs{" "}
                    {parseInt(selectedBox.price) +
                      parseInt(selectedProduct.price)}
                  </p>
                )}
                {!selectedBox && <p className="pr-2">Rs 0</p>}
                {selectedCard && (
                  <p className="pr-2">
                    Rs{" "}
                    {parseInt(selectedBox.price) +
                      parseInt(selectedProduct.price) +
                      parseInt(selectedCard.price)}
                  </p>
                )}
              </div>
              <div className="w-full h-9 mt-2">
                <button
                  className="w-full h-full rounded-3xl bg-darkred text-white font-dmsans flex items-center justify-center"
                  onClick={handleCurrentPage}
                >
                  {selectedCard ? "Checkout" : "Next"}
                  <BiRightArrowAlt size={20} className="ml-1" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
      <ToastContainer />
    </>
  );
};

export default GiftBox;
