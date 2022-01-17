import axios from 'axios'
import {
  ORDER_CREATE_REQUEST,
  ORDER_CREATE_SUCCESS,
  ORDER_CREATE_FAIL,
  ORDER_DETAILS_FAIL,
  ORDER_DETAILS_SUCCESS,
  ORDER_DETAILS_REQUEST,
  ORDER_PAY_FAIL,
  ORDER_PAY_SUCCESS,
  ORDER_PAY_REQUEST,
  ORDER_LIST_MY_REQUEST,
  ORDER_LIST_MY_SUCCESS,
  ORDER_LIST_MY_FAIL,
  ORDER_LIST_FAIL,
  ORDER_LIST_SUCCESS,
  ORDER_LIST_REQUEST,
  ORDER_DELIVER_FAIL,
  ORDER_DELIVER_SUCCESS,
  ORDER_DELIVER_REQUEST
} from '../constants/orderConstants';
import { CART_CLEAR_ITEMS } from '../constants/cartConstants';

export const createOrder = (order) => async (dispatch, getState) => {
  try {
    dispatch({ type: ORDER_CREATE_REQUEST });
    //console.log(order);
    const { userLogin: { userInfo } } = getState();

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`
      }
    }

    const { data } = await axios.post('/api/orders', order, config);
    //console.log(data,'from server');
    dispatch({ type: ORDER_CREATE_SUCCESS, payload: data });
    //after placing the order//empty the cart
    dispatch({ type: CART_CLEAR_ITEMS });
    //dispatch({ type: CART_CLEAR_ITEMS, payload: data });
    localStorage.removeItem('cartItems');

  } catch (error) {
    dispatch({
      type: ORDER_CREATE_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message
    })
  }
}

export const deliverOrder = (order) => async (dispatch, getState) => {
  try {
    dispatch({ type: ORDER_DELIVER_REQUEST });

    const { userLogin: { userInfo } } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    }
    //since not sending any data
    const { data } = await axios.put( `/api/orders/${order._id}/deliver`, {}, config);

    dispatch({ type: ORDER_DELIVER_SUCCESS, payload: data });

  } catch (error) {
    dispatch({
      type: ORDER_DELIVER_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message
    })
  }
}

export const getOrderDetails = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: ORDER_DETAILS_REQUEST });

    const { userLogin: { userInfo } } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`
      }
    }

    const { data } = await axios.get(`/api/orders/${id}`, config);
    //console.log(data, 'data recieved from server');
    dispatch({ type: ORDER_DETAILS_SUCCESS, payload: data });

  } catch (error) {
    dispatch({
      type: ORDER_DETAILS_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message
    })
  }
}

export const payOrder = (orderId, paymentResult) => async ( dispatch, getState) => {
  try {
    dispatch({ type: ORDER_PAY_REQUEST });

    const { userLogin: { userInfo } } = getState();

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    const { data } = await axios.put( `/api/orders/${orderId}/pay`, paymentResult, config );

    dispatch({type: ORDER_PAY_SUCCESS, payload: data });

  } catch (error) {
    dispatch({
      type: ORDER_PAY_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message,
    })
  }
}

export const listMyOrders = () => async (dispatch, getState) => {
  try {
    dispatch({ type: ORDER_LIST_MY_REQUEST });

    const { userLogin: { userInfo } } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`
      }
    }

    const { data } = await axios.get(`/api/orders/myorders`, config);
    //console.log(data);
    dispatch({ type: ORDER_LIST_MY_SUCCESS, payload: data });

  } catch (error) {
    dispatch({
      type: ORDER_LIST_MY_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message
    })
  }
}

export const listOrders = () => async (dispatch, getState) => {
  try {
    dispatch({ type: ORDER_LIST_REQUEST });

    const { userLogin: { userInfo } } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    const { data } = await axios.get(`/api/orders`, config)
    //console.log(data);
    dispatch({ type: ORDER_LIST_SUCCESS, payload: data });

  } catch (error) {
    dispatch({
      type: ORDER_LIST_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message
    })
  }
}