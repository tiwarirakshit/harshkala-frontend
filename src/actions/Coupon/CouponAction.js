import { checkCouponConstants } from "../../constant/constant";
import axios from "../../helpers/axios";

export const getCoupon = (coupon) => {
  return async (dispatch) => {
    dispatch({ type: checkCouponConstants.CHECK_COUPON_REQUEST });
    const res = await axios.post(`/check-coupon`, {
      ...coupon
    }).catch((err) => {

    })
    if (res.status === 200) {
      const { discount, minPurchase, minProducts, type, valid, message } = res.data;
      if (valid) {
        dispatch({
          type: checkCouponConstants.CHECK_COUPON_SUCCESS,
          payload: {
            valid,
            discount,
            type,
            minProducts,
            minPurchase
          },
        });
      }else{
        dispatch({
          type: checkCouponConstants.CHECK_COUPON_FAILURE,
          payload: {
            valid,
            message,
          },
        });
      }
    }
  };

};
