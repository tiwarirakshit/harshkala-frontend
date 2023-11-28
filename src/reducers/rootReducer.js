import { combineReducers } from "redux";
import UserReducer from "./User/UserReducer";
import ProductsReducer from "./Products/ProductsReducer";
import InitialDataReducer from './InitialData/InitialDataReducer';
import CartReducer from "./Cart/CartReducer";
import CouponReducer from "./Coupon/CouponReducer";
import GiftBoxReducer from './GiftBox/GiftBoxReducer';
import GiftCardReducer from './GiftCard/GiftCardReducer';
import NotificationsReducer from './Notifications/NotificationsReducer'

const rootReducer = combineReducers({
    user: UserReducer,
    products:ProductsReducer,
    initialData:InitialDataReducer,
    cart:CartReducer,
    coupon:CouponReducer,
    giftbox:GiftBoxReducer,
    giftcard:GiftCardReducer,
    notification:NotificationsReducer,
});



export default rootReducer;