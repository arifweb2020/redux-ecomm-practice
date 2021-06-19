import axios from 'axios';

const URL = 'http://localhost:3000/arifstore';

export const fetchProducts = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(URL);
      dispatch({ type: "FETCH_PRODUCTS", payload: response.data });
    } catch (error) {
      console.log(error);
    }
  };
};

export const addToCart = (itemID) => {
  return {
    type: "ADD_TO_CART",
    payload: itemID,
  };
};

export const removeFromCart = (itemID) => {
  return {
    type: "REMOVE_FROM_CART",
    payload: {
      id: itemID,
    },
  };
};


