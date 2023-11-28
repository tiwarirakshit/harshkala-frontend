import { getNotificationConstants } from "../../constant/constant";
import axios from "../../helpers/axios";

export const getNotifications= (uid) => {
  return async (dispatch) => {
    dispatch({ type: getNotificationConstants.GET_NOTIFICATIONS_REQUEST });
    const res = await axios.post(`/get-notification`, {
      uid
    });
    if (res.status === 200) {
      const {notifications,totalnotifications } = res.data;
      dispatch({
        type: getNotificationConstants.GET_NOTIFICATIONS_SUCCESS,
        payload: {
          notifications,
          totalnotifications
        },
      });
    }
  };
}

