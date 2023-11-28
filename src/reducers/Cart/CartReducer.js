import { addToCartConstants, getCartDataConstants, getSavedConstants, initialCartDataConstant, quantityEditConstants, removeCartDataConstants, removeSavedDataConstants, saveConstants } from "../../constant/constant";

const initState = {
    saved: [],
    cart: [],
    error: false,
    itemAdded: false,
    itemRemoved: false,
    message: '',
    currentSaved: null,
    cartItems:null,
};

const CartReducer = (state = initState, action) => {

    switch (action.type) {
        case initialCartDataConstant.INITIAL_CART_DATA_SUCCESS:
            state={
                ...state,
                cartItems:action.payload.cartItems,
            }
            break;
        case getSavedConstants.GET_SAVED_SUCCESS:
            state = {
                ...state,
                saved: action.payload.savedproducts,
                error:false,
            }
            break;
        case saveConstants.SAVE_SUCCESS:
            state = {
                ...state,
                message: action.payload.message,
                currentSaved: action.payload.sid,
                error:false,
            }
            break;
        case saveConstants.SAVE_FAILURE:
            state = {
                ...state,
                message: action.payload.message,
                error:true,
            }
            break;
        case addToCartConstants.ADDTOCART_SUCCESS:
            state = {
                ...state,
                itemAdded: true
            }
            break;
        case getCartDataConstants.GETCARTDATA_SUCCESS:
            state = {
                ...state,
                cart: action.payload.cart
            }
            break;
        case removeCartDataConstants.REMOVECARTDATA_SUCCESS:
            state = {
                ...state,
                itemRemoved: true,
            }
            break;
        case removeSavedDataConstants.REMOVE_SAVED_SUCCESS:
            state = {
                ...state,
                message: action.payload.message
            }
            break;
        case quantityEditConstants.QUANTITY_EDIT_SUCCESS:
            state = {
                ...state,
                message: action.payload.message
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

export default CartReducer