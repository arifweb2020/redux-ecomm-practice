const myData = {
    AllPosts: [],
	cart: [],
}

const StoreData = (state = myData, action) =>{


    switch (action.type) {

        case "ALL_POST":

            return {
                ...state,
                AllPosts: action.payload
            }
			
			
			case "ADD_TO_CART":
      // Great Item data from products array
      const item = state.AllPosts.find(
        (product) => product.id === action.payload
      );
      // Check if Item is in cart already
      const inCart = state.cart.find((item) =>
        item.id === action.payload ? true : false
      );

      return {
        ...state,
        cart: inCart
          ? state.cart.map((item) =>
              item.id === action.payload ? { ...item, qty: item.qty + 1 } : item
            )
          : [...state.cart, { ...item, qty: 1 }],
      };

    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };

        
        default:

            return state


}




}

export default StoreData