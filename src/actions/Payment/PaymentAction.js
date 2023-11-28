import { paymentConstants } from '../../constant/constant';
import axios from '../../helpers/axios';

export const makePayment = (amount)=>{
    return async (dispatch) => {
      dispatch({ type: paymentConstants.PAYMENT_REQUEST });
      const res = await axios.post(`/checkout`,{
          amount:amount
      }).catch((err)=>{
        console.log(err)
      })
      if (res.status === 200) {
        const { order } = res.data;
        dispatch({
          type: paymentConstants.PAYMENT_SUCCESS,
          payload: {
            order
          },
        });
      }
    };
  }