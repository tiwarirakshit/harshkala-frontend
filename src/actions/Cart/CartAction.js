import axios from "../../helpers/axios";
import { addToCartConstants, getCartDataConstants, getSavedConstants, quantityEditConstants, removeCartDataConstants, removeSavedDataConstants, saveConstants, userLoginConstants } from "../../constant/constant";

export const addItemToCart = (pid, uid, quantity) => {
  return async (dispatch) => {
    dispatch({ type: addToCartConstants.ADDTOCART_REQUEST });
    const res = await axios.post(`/add-to-cart`, {
      pid,
      uid,
      quantity
    }).catch((err)=>{
      return err?.response?.data?.message;
    })
    if (res.status === 200) {
      const { cart, usercreated } = res.data;
      if (usercreated) {
        dispatch({
          type: addToCartConstants.ADDTOCART_SUCCESS,
          payload: {
            cart,
          },
        });
        dispatch({
          type: userLoginConstants.LOGIN_SUCCESS,
          payload: {
            user: res.data.user,
          },
        });
      } else {
        dispatch({
          type: addToCartConstants.ADDTOCART_SUCCESS,
          payload: {
            cart,
          },
        });
      }
    }
  };

};


export const getCartData = (uid) => {
  return async (dispatch) => {
    dispatch({ type: getCartDataConstants.GETCARTDATA_REQUEST });
    const res = await axios.post(`/get-cart-data`, {
      uid,
    }).catch((err) => {

    })
    if (res.status === 200) {
      const { cart } = res.data;
      dispatch({
        type: getCartDataConstants.GETCARTDATA_SUCCESS,
        payload: {
          cart,
        },
      });
    }
  };

};

export const quantityEdit = (cid, quantity) => {
  return async (dispatch) => {
    dispatch({ type: quantityEditConstants.QUANTITY_EDIT_REQUEST });
    const res = await axios.post(`/quantity-edit`, {
      cid,
      quantity
    }).catch((err) => {
      console.log(err)
    })
    if (res.status === 200) {
      const { message } = res.data;
      dispatch({
        type: quantityEditConstants.QUANTITY_EDIT_SUCCESS,
        payload: {
          message
        },
      });
    }
  };
}

export const saveProductForLater = (pid, uid) => {
  return async (dispatch) => {
    dispatch({ type: saveConstants.SAVE_REQUEST });
    await axios.post(`/save-for-later`, {
      pid,
      uid
    }).then((res) => {
      if (res.status === 200) {
        const { message, sid, usercreated } = res.data;
        if (usercreated) {
          dispatch({
            type: saveConstants.SAVE_SUCCESS,
            payload: {
              message,
              sid,
            },
          })
          dispatch({
            type: userLoginConstants.LOGIN_SUCCESS,
            payload: {
              user: res.data.user,
            }
          })
        } else {
          dispatch({
            type: saveConstants.SAVE_SUCCESS,
            payload: {
              message,
              sid
            },
          });
        }
      }
    }).catch((err) => {
      if(err.response.status === 400){
        const {message} = err.response.data;
        dispatch({
          type:saveConstants.SAVE_FAILURE,
          payload:{
            message
          }
        })
      }
    })

  }

};

export const getSavedProducts = (uid) => {
  return async (dispatch) => {
    dispatch({ type: getSavedConstants.GET_SAVED_REQUEST });
    const res = await axios.post(`/get-saved`, {
      uid
    }).catch((err) => {
      console.log(err)
    })
    if (res.status === 200) {
      const { savedProducts } = res.data;
      dispatch({
        type: getSavedConstants.GET_SAVED_SUCCESS,
        payload: {
          savedproducts: savedProducts
        },
      });
    }
  };

};

export const removeSavedData = (sid) => {
  return async (dispatch) => {
    dispatch({ type: removeSavedDataConstants.REMOVE_SAVED_REQUEST });
    const res = await axios.post(`/delete-saved-data`, {
      sid
    }).catch((err) => {
      console.log(err)
    })
    if (res.status === 200) {
      const { message } = res.data;
      dispatch({
        type: removeSavedDataConstants.REMOVE_SAVED_SUCCESS,
        payload: {
          message
        },
      });
    }
  }
}

export const removeCartData = (cid, initialquantity) => {
  return async (dispatch) => {
    dispatch({ type: removeCartDataConstants.REMOVECARTDATA_REQUEST });
    const res = await axios.post(`/delete-cart-data`, {
      cid,
      initialquantity
    }).catch((err) => {
      console.log(err)
    })
    if (res.status === 200) {
      const { message } = res.data;
      dispatch({
        type: removeCartDataConstants.REMOVECARTDATA_SUCCESS,
        payload: {
          message
        },
      });
    }
  };

};


