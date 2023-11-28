import axios from "../../helpers/axios";
import { getUserOrdersConstant, orderConstants, orderPersonalizeConstants, userLoginConstants } from "../../constant/constant";

export const getOrders = (uid) => {
  return async (dispatch) => {
    dispatch({ type: getUserOrdersConstant.USER_ORDERS_REQUEST });
    const res = await axios.post(`/get-user-orders`, {
      uid
    });
    if (res.status === 200) {
      const { orders } = res.data;
      dispatch({
        type: getUserOrdersConstant.USER_ORDERS_SUCCESS,
        payload: {
          orders
        },
      });
    }
  };
}

export const orderItem = (fullname, country, state, city, email, phone, address, zipcode, usertype, uid, status, cartdata, paymentmode, orderName,totalprice) => {
  return async (dispatch) => {
    dispatch({ type: orderConstants.ORDER_REQUEST });
    const res = await axios.post(`/create-order`, {
      uid,
      status,
      cartdata,
      paymentmode,
      orderName,
      totalprice,
      fullname,
      country,
      state,
      city,
      country,
      email,
      phone,
      zipcode,
      address,
      usertype,
    })
    if (res.status === 200) {
      const { message, userCreated, user } = res.data;
      dispatch({
        type: orderConstants.ORDER_SUCCESS,
        payload: {
          message
        },
      });
      if (userCreated) {
        dispatch({
          type: userLoginConstants.LOGIN_SUCCESS,
          payload: {
            user
          },
        });
      }
    }
  };

};


export const orderPersonalizedItem = (orderObj) => {
  const formData = new FormData();
  for (const image of orderObj["images"]) {
    formData.append("images", image);
  }
  for (const key in orderObj) {
    if (orderObj[key] !== undefined && key !== "images") {
      formData.append(key, orderObj[key]);
    }
  }
  return async (dispatch) => {
    dispatch({ type: orderPersonalizeConstants.ORDER_PERSONALIZED_REQUEST });
    const res = await axios.post(`/create-personalized-order`, formData);
    if (res.status === 200) {
      const { message, userCreated, user } = res.data;
      dispatch({
        type: orderPersonalizeConstants.ORDER_PERSONALIZED_SUCCESS,
        payload: {
          message
        },
      });
      if (userCreated) {
        dispatch({
          type: userLoginConstants.LOGIN_SUCCESS,
          payload: {
            user: user
          },
        });
      }
    }
  };

};

