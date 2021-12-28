import axios from 'axios';
import { PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS, PRODUCT_LIST_FAIL} from '../constants/productConstants';

export const listProducts = () => async (dispatch) => {
  try {

    dispatch({ type: PRODUCT_LIST_REQUEST });
    //response.data
    //console.log(response, response.data);
    const { data } = await axios.get('/api/products');

    dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data });

  } catch (error) {
    dispatch({
      type: PRODUCT_LIST_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message,//--generic err msg
    });//error.response.data.message--postman test error msg
  }
}