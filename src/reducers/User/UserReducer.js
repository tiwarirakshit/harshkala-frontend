import { emailConstants, getUserConstants, getUserOrdersConstant, googleLoginConstant, otpConstants, userLoginConstants, userRegisterConstants, userUpdateConstants } from "../../constant/constant";

const initState = {
    authenticate: false,
    authenticating: false,
    isRegistered: false,
    isLogin: false,
    userUpdated: false,
    user: [],
    getUser: [],
    error: [],
    orders:[],
};

const UserReducer =(state = initState, action) => {

    switch (action.type) {
        case userLoginConstants.LOGIN_REQUEST:
            state = {
                ...state,
                authenticating: true
            }
            break;
        case getUserConstants.GET_USER_SUCCESS:
            state={
                ...state,
                user:action.payload.user,
            }
        case googleLoginConstant.GOOGLE_LOGIN_SUCCESS:
            state={
                ...state,
                authenticating:false,
                authenticate:true,
                user:action.payload.user,
                isLogin:true,
                logintype:"google",
            }
            break;
        case userLoginConstants.LOGIN_SUCCESS:
            state = {
                ...state,
                authenticating: false,
                authenticate: true,
                user: action.payload.user,
                isLogin:true,
                otpsent:false,
                otp:null,
            }
            break;
        case userLoginConstants.LOGIN_FAILURE:
            state = {
                ...state,
                error: action.payload.message
            }
            break;
        case userRegisterConstants.REGISTER_FAILURE:
            state={
                ...state,
                error:action.payload.msg
            }
            break;
        case userRegisterConstants.REGISTER_SUCCESS:
            state = {
                ...state,
                user: action.payload.user,
                authenticate: true,
                error: [],
                isRegistered:true
            }
            break;
        case userLoginConstants.LOGOUT_REQUEST:
            state = {
                ...state,
                authenticate: false,
                user: [],
                getUser: [],
                isLogin:false,
                isRegistered:false,
            }
            break;
        case userUpdateConstants.UPDATE_SUCCESS:
            state = {
                ...state,
                userUpdated: true,
                user: action.payload.user,
            }
            break;
        case otpConstants.OTP_SUCCESS:
            state = {
                ...state,
                otpsent: action.payload.otpsent,
                otp: action.payload.otp,
                userAlreadyExistError: null
            }
            break;
        case otpConstants.OTP_FAILURE:
            state = {
                ...state,
                otpsent: null,
                otp: null,
                userAlreadyExistError: action.payload.error,
                error:action.payload.error
            }
            break;
        case getUserOrdersConstant.USER_ORDERS_SUCCESS:
            state={
                ...state,
                orders:action.payload.orders,
            }
            break;
        case emailConstants.EMAIL_SUCCESS:
            state={
                ...state,
                otp:action.payload.otp,
                otpsent:true,
            }
        break;
    }
    return state;
}

export default UserReducer