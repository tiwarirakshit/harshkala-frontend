import {   getGiftCardConstants } from "../../constant/constant";
import axios from "../../helpers/axios";

export const getGiftCards = () => {
  return async (dispatch) => {
    dispatch({ type: getGiftCardConstants.GET_GIFTCARD_REQUEST });
    const res = await axios.get(`/get-all-giftcard`).catch((err) => {
    })
    if (res.status === 200) {
      const { giftcards} = res.data;
        dispatch({
          type: getGiftCardConstants.GET_GIFTCARD_SUCCESS,
          payload: {
            giftcards,
          },
        });
    }
  };

};
