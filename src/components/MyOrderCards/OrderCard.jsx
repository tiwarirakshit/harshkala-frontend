import React, { useEffect, useState } from "react";
import { BiCheckCircle } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const OrderCard = ({
  cartdata,
  price,
  paymentmode,
  customtext,
  customlink,
  customimg,
  status,
}) => {
  const navigate = useNavigate();

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const statusModes = [
    "Your Order Is Processing",
    "Delivered!",
    "Order Cannot Be Delivered",
  ];
  const [statusforcustomer, setstatusforcustomer] = useState(null);

  useEffect(() => {
    const date = new Date();
    var todayDate = date.getDate() + 10;
    var currentMonth = date.getMonth();
    if (todayDate > 31) {
      todayDate = todayDate - 31;
      currentMonth = currentMonth + 1;
    }
    if (status == "Delivered") {
      setstatusforcustomer(statusModes[1]);
    } else if (status == "Pending") {
      setstatusforcustomer(statusModes[0]);
    } else {
      setstatusforcustomer(
        `Will Deliver On ${todayDate} ${months[currentMonth]}`
      );
    }
  }, [status]);

  return (
    <>
      {cartdata.length >= 1 ? (
        cartdata?.map((c, key) => (
          <div
            onClick={() => {
              navigate(`/product/${c?.productid?.slug}`);
            }}
            key={key}
            className="flex bg-white w-full cursor-pointer h-[100px]  sm:h-[150px] items-center pl-2 sm:pl-5 justify-between sm:pr-10 pr-4 shadow-lg"
          >
            <div className="flex items-center">
              <div className="sm:w-24 sm:h-24 w-16 h-16 mr-5">
                <img
                  className="rounded h-full w-full mr-3"
                  src={
                    c?.productid?.images[0]?.img ||
                    c[0]?.product?.images[0]?.img ||
                    c?.card?.images[0]?.img ||
                    c?.box?.images[0]?.img ||
                    c?.product?.images[0]?.img ||
                    c?.giftcard?.images[0]?.img
                  }
                  alt=""
                />
              </div>
              <div className="flex flex-col">
                <h1 className="font-dmsans block sm:hidden text-[13px] mb-[5px] sm:mb-0 sm:text-[16px]">
                  Deliverd on Sep 15
                </h1>
                <h1 className="text-[#333337]  text-[14px] sm:text-[16px]">
                  {c?.productid?.name}
                </h1>
                <p className="text-[#787878] text-[11px] sm:text-[11px] flex">
                  {c?.productid?.dimensions ? (
                    <p className="mr-1">{`Size: ${c.productid.dimensions}`}</p>
                  ) : (
                    ""
                  )}
                  {c?.productid?.material ? (
                    <p className="mr-1">{` Material: ${c.productid.material}`}</p>
                  ) : (
                    ""
                  )}
                  {c?.productid?.color ? (
                    <p className="mr-1">{`Color: ${c.productid.color}`}</p>
                  ) : (
                    ""
                  )}
                </p>
              </div>
            </div>
            <div className="h-full pt-10">
              <p className="font-dmsans ">
                Mode:&nbsp;
                <span className="text-green-500 font-dmsans">
                  {paymentmode}
                </span>
              </p>
              <p className="font-dmsans">₹ {price}</p>
            </div>
            <div className="hidden sm:flex flex-col items-end h-full pt-8">
              <h1 className="font-dmsans">{statusforcustomer}</h1>
            </div>
          </div>
        ))
      ) : (
        <div
          onClick={() => {
            navigate(`/product/${cartdata?.slug}`);
          }}
          className="flex bg-white w-full cursor-pointer h-[100px]  sm:h-[150px] items-center pl-2 sm:pl-5 justify-between sm:pr-10 pr-4 shadow-lg mb-2"
        >
          <div className="flex items-center">
            <div className="sm:w-24 sm:h-24 w-16 h-16 mr-5">
              <img
                className="rounded h-full w-full mr-3"
                src={
                  cartdata?.images[0]?.img ||
                  cartdata?.productid?.images[0]?.img ||
                  cartdata[0]?.product?.images[0]?.img ||
                  cartdata?.card?.images[0]?.img ||
                  cartdata?.box?.images[0]?.img ||
                  cartdata?.product?.images[0]?.img
                }
                alt=""
              />
            </div>
            <div className="flex flex-col">
              <h1 className="font-dmsans block sm:hidden text-[13px] mb-[5px] sm:mb-0 sm:text-[16px]">
                Deliverd on Sep 15
              </h1>
              <h1 className="text-[#333337]  text-[14px] sm:text-[16px]">
                {cartdata?.name || cartdata?.productid?.name}
              </h1>
              <p className="text-[#787878] text-[11px] sm:text-xs">
                Color: Cream Size: 22x24cm
              </p>
              {customimg && (
                <p className="text-[10px] sm:text-xs sm:mt-2 flex">
                  <BiCheckCircle color="green" className="mr-1" size={18} />
                  Custom Img
                </p>
              )}
              {customtext != undefined && (
                <p className="text-[10px] sm:text-xs sm:mt-2 flex">
                  <BiCheckCircle color="green" className="mr-1" size={18} />
                  Custom Text:&nbsp;{customtext}
                </p>
              )}
              {customlink != undefined && customlink != "null" && (
                <p className="text-[10px] sm:text-xs sm:mt-2 flex">
                  <BiCheckCircle size={18} className="mr-1" color="green" />
                  Custom Link:&nbsp;{customlink}
                </p>
              )}
            </div>
          </div>
          <div className="h-full pt-10">
            <p className="font-dmsans ">
              Mode:&nbsp;
              <span className="text-green-500 font-dmsans">{paymentmode}</span>
            </p>
            <p className="font-dmsans">₹ {price}</p>
          </div>
          <div className="hidden sm:flex flex-col items-end h-full pt-8">
            <h1 className="font-dmsans">{statusforcustomer}</h1>
          </div>
        </div>
      )}
    </>
  );
};

export default OrderCard;
