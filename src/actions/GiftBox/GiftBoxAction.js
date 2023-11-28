import {  getGiftBoxConstants } from "../../constant/constant";
import axios from "../../helpers/axios";

export const getGiftBoxes = () => {
  return async (dispatch) => {
    dispatch({ type: getGiftBoxConstants.GET_GIFTBOX_REQUEST });
    const res = await axios.get(`/get-all-giftbox`).catch((err) => {
    })
    if (res.status === 200) {
      const { giftboxes} = res.data;
        dispatch({
          type: getGiftBoxConstants.GET_GIFTBOX_SUCCESS,
          payload: {
            giftboxes,
          },
        });
    }
  };

};
