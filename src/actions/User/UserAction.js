import {
  contactEmailConstants,
  emailConstants,
  getUserConstants,
  googleLoginConstant,
  otpConstants,
  userLoginConstants,
  userRegisterConstants,
  userUpdateConstants
} from "../../constant/constant";
import axios from "../../helpers/axios";

export const contactUsMailAction = (post) => {
  return async (dispatch) => {
    dispatch({ type: contactEmailConstants.CONTACT_EMAIL_REQUEST });
    const res = await axios.post('/contact-us-mail',{
      ...post
    });
    if(res.status === 200){
      const {message} =res.data;
      dispatch({
        type:contactEmailConstants.CONTACT_EMAIL_SUCCESS,
        payload:{
          message
        }
      })
    }
  }
}


export const loginWithGoogle = (user) => {
  return async (dispatch) => {
    dispatch({ type: googleLoginConstant.GOOGLE_LOGIN_REQUEST });
    const res = await axios.post('/google-signup',{
      ...user
    });
    if(res.status === 200){
      const {user} = res.data;
      dispatch({
        type:googleLoginConstant.GOOGLE_LOGIN_SUCCESS,
        payload:{
          user,
        }
      })
    }
  }
}

export const login = (user) => {

  return async (dispatch) => {
    dispatch({ type: userLoginConstants.LOGIN_REQUEST });
    const res = await axios.post(`/login`, {
      ...user,
    }).catch((err) => {
      const { message } = err.response.data;
      dispatch({
        type: userLoginConstants.LOGIN_FAILURE,
        payload: {
          message,
        },
      });
    })
    if (res.status === 200) {
      const { user } = res.data;
      dispatch({
        type: userLoginConstants.LOGIN_SUCCESS,
        payload: {
          user,
        },
      });
    }
  };
};

export const signup = (user) => {
  return async (dispatch) => {
    dispatch({ type: userRegisterConstants.REGISTER_REQUEST });
    const res = await axios.post(`/signup`, {
      ...user,
    }).catch((err) => {
      const { message } = err.response.data;
      dispatch({
        type: userRegisterConstants.REGISTER_FAILURE,
        payload: {
          message,
        },
      });
    })
    if (res.status === 200) {
      const { user } = res.data;
      dispatch({
        type: userRegisterConstants.REGISTER_SUCCESS,
        payload: {
          user: user,
        },
      });
    }
  };
};

export const update = (user) => {
  return async (dispatch) => {
    dispatch({ type: userUpdateConstants.UPDATE_REQUEST });
    const res = await axios.post(`/updateuser`, {
      ...user,
    });
    if (res.status === 200) {
      const { user } = res.data;
      dispatch({
        type: userUpdateConstants.UPDATE_SUCCESS,
        payload: {
          user: user,
        },
      });
    } else {
      if (res.status === 400 || res.status === 401) {
        dispatch({
          type: userUpdateConstants.UPDATE_FAILURE,
          payload: { message: res.data.message },
        });
      }
    }
  };
};

export const signOut = () => {
  return async (dispatch) => {
    localStorage.clear();
    dispatch({
      type: userLoginConstants.LOGOUT_REQUEST,
    });
  };
};


export const loginWithOTP = (phone) => {
  phone = parseInt(phone);
  return async (dispatch) => {
    const res = await axios.post(`/signinotp`, {
      phone: phone,
    });
    if (res.status === 200) {
      const { user } = res.data;
      dispatch({
        type: userLoginConstants.LOGIN_SUCCESS,
        payload: {
          user,
        },
      });
    } else {
      if (res.status === 400 || res.status === 401) {
        dispatch({
          type: userLoginConstants.LOGIN_FAILURE,
          payload: { message: res.data.error },
        });
      }
    }
  };
};


export const sendEmailVerification = (email, subject) => {
  return async (dispatch) => {
    dispatch({ type: emailConstants.EMAIL_REQUEST });
    try {
      const res = await axios.post('/login/emailverification', {
        email,
        subject,
      })
      if (res.status === 200) {
        const { emailSent, message, otp } = res.data;
        dispatch({
          type: emailConstants.EMAIL_SUCCESS,
          payload: {
            emailSent: emailSent,
            message: message,
            otp: otp,
          },
        });
      }
      return true;
    } catch (error) {
      if (error.response && error.response.status === 400 && error.response.data.success === false) {
        dispatch({
          type: emailConstants.EMAIL_FAILURE,
          payload: { error: error.response.data.message },
        });
      }
      else {
        dispatch({
          type: emailConstants.EMAIL_FAILURE,
          payload: { error: error.response.data.message },
        });
        console.error(error);
      }
      return false;
    }
  }
}

export const getUserData=(uid)=>{
  return async (dispatch)=>{
    dispatch({type:getUserConstants.GET_USER_REQUEST})
    try{
      const res = await axios.post('/get-user',{
        uid
      });
      if(res.status === 200){
        const user = res.data;
        dispatch({
          type:getUserConstants.GET_USER_SUCCESS,
          payload:{
            user
          }
        })
      }
    }catch(error){
      console.log(error);
    }
  }
}


export const sendotp = (phone, sendOtpType) => {
  return async (dispatch) => {
    dispatch({ type: otpConstants.OTP_REQUEST });
    try {
      let res = '';
      if (sendOtpType === "login") {
        res = await axios.post(`/login/mobileverification`, {
          phone: `+91${phone}`,
        });
      }
      else {
        res = await axios.post(`/register/mobileverification`, {
          phone: `+91${phone}`,
        });
      }
      if (res.status === 200) {
        const { otp, message } = res.data;
        dispatch({
          type: otpConstants.OTP_SUCCESS,
          payload: {
            otpsent: true,
            otp: otp,
            message: message
          },
        });
        return true;
      }
    } catch (error) {
      if (error.response && error.response.status === 400 && error.response.data.success === false) {
        // ("userAction 151",error.response.data.message); // Log the error message
        dispatch({
          type: otpConstants.OTP_FAILURE,
          payload: { error: error.response.data.message },
        });
      }
      else {
        dispatch({
          type: otpConstants.OTP_FAILURE,
          payload: { error: error.response.data.message },
        });
        console.error(error);
      }
      return false;
    }

  };
};

