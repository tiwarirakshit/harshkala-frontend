import { allCategoryConstants, categoryConstants, getNotificationConstants, newProductConstants, productConstants} from "../../constant/constant";

const initState = {
    notifications:[],
    totalnotifications:null,
    error: [],
};

const NotificationReducer= (state = initState, action) => {

    switch (action.type) {
        case getNotificationConstants.GET_NOTIFICATIONS_SUCCESS:
            state = {
                ...state,
                notifications:action.payload.notifications,
                totalnotifications:action.payload.totalnotifications,
            }
            break;
        default:{
            state={
                ...state
            }
        }
    }
    return state;
}

export default NotificationReducer