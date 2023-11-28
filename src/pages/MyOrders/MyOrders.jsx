import React from "react";
import SideBar from "../../components/SideBar/SideBar";
import {
  BiSolidBell,
  BiSearch,
  BiSolidDownArrow,
  BiX,
  BiMenu,
  BiRightArrow,
  BiLeftArrowAlt,
} from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import UserImage from "../../assets/lamp.jpg";
import { ToastContainer } from "react-toastify";
import Map from "../../assets/map.jpg";
import { useState } from "react";
import { useEffect } from "react";
import { getOrders } from "../../actions/Order/OrderAction";
import { useNavigate } from "react-router-dom";
import OrderCard from "../../components/MyOrderCards/OrderCard";
import { getUserData } from "../../actions/User/UserAction";

const MyOrders = () => {
  const [uid, setUid] = useState(null);
  const [orders, setOrders] = useState(null);
  const auth = useSelector((state) => state.user);
  const [hamburger, setHamburger] = useState(false);
  const userorders = useSelector((state) => state.user.orders);
  const [customimg, setCustomImg] = useState(false);

  useEffect(() => {
    if (!auth?.authenticate) {
      navigate("/");
    }
  }, [auth?.authenticate]);

  useEffect(() => {
    if (auth) {
      setUid(auth?.user?._id);
    }
  }, [auth]);

  useEffect(() => {
    if (uid) {
      dispatch(getOrders(uid));
    }
  }, [uid]);

  useEffect(() => {
    if (userorders) {
      setOrders(userorders);
    }
  }, [userorders]);

  useEffect(() => {
    if (uid) {
      dispatch(getUserData(uid));
    }
  }, [uid]);

  const toggleHamburger = () => {
    setHamburger(!hamburger);
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div>
      <div className="flex">
        <SideBar name={"orders"} show={hamburger} />

        <div className="flex flex-col w-full min-h-screen justify-start items-center sm:pl-10 pl-0 sm:pr-5 pr-0">
          {/* PROFILE HEADER  */}
          <div className="flex justify-between w-full pt-3 pb-3 items-center">
            <div className="flex justify-between items-center w-full h-full">
              <div
                className="flex sm:hidden z-50 pl-5"
                onClick={toggleHamburger}
              >
                {hamburger ? <BiX size={23} /> : <BiMenu size={23} />}
              </div>
              <div
                className="hidden sm:block"
                onClick={() => {
                  navigate("/");
                }}
              >
                <BiLeftArrowAlt size={28} />
              </div>
              <div className="flex justify-center items-center flex-row-reverse">
                <div className="h-10 w-10 rounded-full flex items-center justify-center mr-4 bg-[#1a1a1d12]">
                  <BiSolidBell size={20} color="gray" />
                </div>
                <div className="flex rounded-md">
                  <div className="flex flex-col text-xs font-semibold mr-2">
                    <p>{auth.user?.fullname}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* PROFILE HEADER  */}

          <div className="flex flex-col min-h-full w-full bg-gray-100 pt-2 pl-4 pr-4">
            {/* ORDER CARD  */}
            {orders?.map((order, key) => (
              <div>
                <OrderCard
                  cartdata={order?.cartdata}
                  price={order?.totalprice}
                  paymentmode={order?.paymentmode}
                  customimg={order?.customimg?.length > 0 ? true : false}
                  customtext={order?.customtext}
                  customlink={order?.customlink}
                  status={order?.status}
                />
                <br />
              </div>
            ))}
            {/* ORDER CARD  */}
          </div>
        </div>
      </div>

      <ToastContainer />
    </div>
  );
};

export default MyOrders;
