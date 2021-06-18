// import axios from 'axios';

// const URL = 'https://600c30e638fd25001702cf7e.mockapi.io/api/v1/products';

// export const fetchProducts = () => {
//   return async (dispatch) => {
//     try {
//       const response = await axios.get(URL);
//       dispatch({ type: "FETCH_PRODUCTS", payload: response.data });
//     } catch (error) {
//       console.log(error);
//     }
//   };
// };

export const fetchProducts = ()=>{

  return async (dispatch)=>{

      const res = await fetch('https://run.mocky.io/v3/05e9651d-528e-4d7c-a60b-bae8f09684c6');

      const res1 = await res.json();

      const res2 = res1.products;

      console.log(res2);

      dispatch({
          type:"FETCH_PRODUCTS",
          payload:res2
      })
  }
}

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


