import { addToCartConstants, checkCouponConstants, getCartDataConstants, getSavedConstants, initialCartDataConstant, quantityEditConstants, removeCartDataConstants, removeSavedDataConstants, saveConstants } from "../../constant/constant";

const initState = {
    discount:null,
    type:null,
    minPurchase:null,
    minProducts:null,
    valid:false,
    message:null,
};

const CouponReducer = (state = initState, action) => {

    switch (action.type) {
        case checkCouponConstants.CHECK_COUPON_SUCCESS:
            state={
                ...state,
                discount:action?.payload?.discount,
                type:action?.payload?.type,
                minPurchase:action?.payload?.minPurchase,
                minProducts:action?.payload?.minProducts,
                minProducts:action?.payload?.minProducts,
                valid:action?.payload?.valid,
                message:null,
            }
            break;
        case checkCouponConstants.CHECK_COUPON_FAILURE:
            state={
                ...state,
                message:action?.payload?.message,
                valid:false,
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

export default CouponReducer