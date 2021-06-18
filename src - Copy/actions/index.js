//import axios from 'axios';

export const allPost = ()=>{

    return async (dispatch)=>{

        const res = await fetch('https://run.mocky.io/v3/05e9651d-528e-4d7c-a60b-bae8f09684c6');

        const res1 = await res.json();

        const res2 = res1.products;

        console.log(res2);

        dispatch({
            type:"ALL_POST",
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