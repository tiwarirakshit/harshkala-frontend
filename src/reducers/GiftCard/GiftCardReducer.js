import {  getGiftCardConstants } from "../../constant/constant";

const initState = {
    giftcards:[],
};

const GiftCardReducer = (state = initState, action) => {

    switch (action.type) {
        case getGiftCardConstants.GET_GIFTCARD_SUCCESS:
            state ={
                ...state,
                giftcards:action.payload.giftcards,
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

export default GiftCardReducer