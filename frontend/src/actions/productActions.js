import axios from "axios";
import { 
  PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS, PRODUCT_LIST_FAIL,
  PRODUCT_DETAILS_REQUEST, PRODUCT_DETAILS_SUCCESS, PRODUCT_DETAILS_FAIL, PRODUCT_CREATE_REVIEW_RESET, 
  PRODUCT_CREATE_REVIEW_REQUEST, PRODUCT_CREATE_REVIEW_SUCCESS, PRODUCT_CREATE_REVIEW_FAIL,
  PRODUCT_TOP_REQUEST, PRODUCT_TOP_SUCCESS, PRODUCT_TOP_FAIL
} from "../constants/productConstants";

export const listProducts = (keyword = '', pageNumber = '', setFilteredProducts) => async (dispatch) => {
  //asyncThunk
  try {
    dispatch({ type: PRODUCT_LIST_REQUEST });
    //response.data
    //console.log(response, response.data);
    //onsole.log('keyword actions', keyword)
    const { data } = await axios.get(`/api/products?keyword=${keyword}&pageNumber=${pageNumber}`); //--/${pageNumber}

    dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data });
    setFilteredProducts(data.products);
    
  } catch (error) {
    dispatch({
      type: PRODUCT_LIST_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message//--generic err msg
    }); //error.response.data.message--postman test error msg
    //axios create this object. if backend returns error code then it return the result from backend in this object:
    //error.response.data
  }
};

export const listProductDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_DETAILS_REQUEST });

    const { data } = await axios.get(`/api/products/${id}`);

    dispatch({ type: PRODUCT_DETAILS_SUCCESS, payload: data});

    dispatch({ type: PRODUCT_CREATE_REVIEW_RESET }); //to reset any review succesSubmitted/alreadyExistFail msg
    //included in prodcu detail screen

  } catch (error) {
    dispatch({
      type: PRODUCT_DETAILS_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message
    });
  }
};


export const createProductReview = (productId, review) => async ( dispatch, getState ) => {
  try {
    dispatch({ type: PRODUCT_CREATE_REVIEW_REQUEST });

    const { userLogin: { userInfo } } = getState();

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    await axios.post(`/api/products/${productId}/reviews`, review, config);

    dispatch({ type: PRODUCT_CREATE_REVIEW_SUCCESS });
    //dispatch({ type: PRODUCT_CREATE_REVIEW_RESET }); //to reset any review succesSubmitted/alreadyExistFail msg


  } catch (error) {
    dispatch({
      type: PRODUCT_CREATE_REVIEW_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message
    })
  }
}

export const listTopProducts = () => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_TOP_REQUEST });

    const { data } = await axios.get(`/api/products/top`);

    dispatch({ type: PRODUCT_TOP_SUCCESS, payload: data });

  } catch (error) {

    dispatch({
      type: PRODUCT_TOP_FAIL, 
      payload: error.response && error.response.data.message ? error.response.data.message : error.message
    })
  }
}