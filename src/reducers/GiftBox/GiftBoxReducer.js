import { getGiftBoxConstants } from "../../constant/constant";

const initState = {
    giftboxes:[],
};

const GiftBoxReducer = (state = initState, action) => {

    switch (action.type) {
        case getGiftBoxConstants.GET_GIFTBOX_SUCCESS:
            state ={
                ...state,
                giftboxes:action.payload.giftboxes,
            }
            break;
        default: {
            state = {
                ...state
            }
        }
    }
    return state;
}

export default GiftBoxReducer