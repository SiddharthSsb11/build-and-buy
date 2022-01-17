import axios from 'axios'
import {
  USER_DETAILS_FAIL, USER_DETAILS_REQUEST, USER_DETAILS_SUCCESS, USER_DETAILS_RESET,
  USER_LOGIN_FAIL, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGOUT, 
  USER_REGISTER_FAIL, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS,
  USER_UPDATE_PROFILE_FAIL, USER_UPDATE_PROFILE_REQUEST, USER_UPDATE_PROFILE_SUCCESS, USER_UPDATE_PROFILE_RESET,
  USER_LIST_FAIL, USER_LIST_SUCCESS, USER_LIST_REQUEST, USER_LIST_RESET,
  USER_DELETE_REQUEST, USER_DELETE_SUCCESS, USER_DELETE_FAIL,
  USER_UPDATE_FAIL, USER_UPDATE_SUCCESS, USER_UPDATE_REQUEST
} from '../constants/userConstants';
import { ORDER_LIST_MY_RESET } from '../constants/orderConstants';
import { CART_CLEAR_ITEMS } from '../constants/cartConstants';


export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: USER_LOGIN_REQUEST});

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }

    const { data } = await axios.post('/api/users/login', { email, password }, config );//url, body, headers
    
    //console.log(data,'user login data');

    dispatch({type: USER_LOGIN_SUCCESS, payload: data});

    localStorage.setItem('userInfo', JSON.stringify(data));

  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message,
    })
  }
}

export const logout = () => (dispatch) => {

  localStorage.removeItem('userInfo');
  localStorage.removeItem('cartItems');
  localStorage.removeItem('shippingAddress');
  localStorage.removeItem('paymentMethod');

  dispatch({ type: USER_LOGOUT });
  dispatch({type:USER_DETAILS_RESET});///on logout erase/reset the user details
  dispatch({ type: ORDER_LIST_MY_RESET });
  dispatch({ type: USER_LIST_RESET });
  dispatch({ type: USER_UPDATE_PROFILE_RESET });
  dispatch({ type: CART_CLEAR_ITEMS });

}

export const register = (name, email, password) => async (dispatch) => {
  try {
    dispatch({type: USER_REGISTER_REQUEST});

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }

    const { data } = await axios.post('/api/users', { name, email, password }, config);

    dispatch({type: USER_REGISTER_SUCCESS, payload: data});

    dispatch({ type: USER_LOGIN_SUCCESS, payload: data});//same-way

    localStorage.setItem('userInfo', JSON.stringify(data));

  } catch (error) {
    dispatch({
      type: USER_REGISTER_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message
    });
  }
}

export const getUserDetails = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: USER_DETAILS_REQUEST });

    const { userLogin: { userInfo }} = getState(); //deep destructuring

    const config = {
      headers: {
        /* 'Content-Type': 'application/json', */
        Authorization: `Bearer ${userInfo.token}`
      }
    }

    const { data } = await axios.get(`/api/users/${id}`, config); //url--/api/users/profile--be route

    dispatch({ type: USER_DETAILS_SUCCESS, payload: data });

  } catch (error) {
    dispatch({
      type: USER_DETAILS_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message
    })
  }
}

export const updateUserProfile = (user) => async (dispatch, getState) => {
  try {

    dispatch({ type: USER_UPDATE_PROFILE_REQUEST});

    const { userLogin: { userInfo }} = getState();
    console.log(userInfo, 'userInfo at the time of login before update');
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`
      }
    }

    const { data } = await axios.put(`/api/users/profile`, user, config)
    const {email, isAdmin, name, _id} = data;

    dispatch({ type: USER_UPDATE_PROFILE_SUCCESS, payload: data });
    //console.log(data,'updated user data response from server');
    localStorage.setItem('userInfo', JSON.stringify(data));
    //updating the localstorage with newly recieved token and data from server

    dispatch({ type: USER_DETAILS_SUCCESS, payload: {email, isAdmin, name, _id} });
    //console.log('triggering user profile details');
    
    //console.log('triggering userInfo login_success after the update');
    dispatch({type: USER_LOGIN_SUCCESS, payload: data}); //user profile name in header fix

  } catch (error) {
    dispatch({
      type: USER_UPDATE_PROFILE_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message
    })
  }
}

export const listUsers = () => async (dispatch, getState) => {
  try {
    dispatch({ type: USER_LIST_REQUEST });

    const { userLogin: { userInfo } } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`
      }
    }

    const { data } = await axios.get(`/api/users`, config);
    //console.log(data);

    dispatch({ type: USER_LIST_SUCCESS, payload: data });

  } catch (error) {
    dispatch({
      type: USER_LIST_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message,
    })
  }
}


export const deleteUser = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: USER_DELETE_REQUEST });

    const { userLogin: { userInfo } } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`
      }
    }

    //const { data } = await axios.delete(`/api/users/${id}`, config);
    //console.log(data);
    await axios.delete(`/api/users/${id}`, config);

    dispatch({ type: USER_DELETE_SUCCESS });

  } catch (error) {
    dispatch({
      type: USER_DELETE_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message,
    })
  }
}


export const updateUser = (user) => async (dispatch, getState) => {
  try {
    dispatch({ type: USER_UPDATE_REQUEST });

    const { userLogin: { userInfo } } = getState();

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`
      }
    }

    const { data } = await axios.put(`/api/users/${user._id}`, user, config);
    //console.log(data, "updated/edited user data recieved from server");

    dispatch({ type: USER_UPDATE_SUCCESS });

    dispatch({ type: USER_DETAILS_SUCCESS, payload: data });//updating the user details with the updated data
    //dispatch({ type: USER_DETAILS_RESET });

  } catch (error) {
    dispatch({
      type: USER_UPDATE_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message: error.message
    })
  }
}