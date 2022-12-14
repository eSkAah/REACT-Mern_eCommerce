import {CART_ADD_ITEM, CART_REMOVE_ITEM} from "../constants/cartConstant";

export const cartReducer = (state = {cartItems: []}, action) => {
    console.log("state", state);
    switch (action.type) {
        case CART_ADD_ITEM:
            console.log("cartReducer:", action.payload);
            const item = action.payload;
            const existItem = state.cartItems.find((x) => x.product === item.product);

            if (existItem) {
                return {
                    ...state,
                    cartItems: state.cartItems.map((x) =>
                        x.product === existItem.product ? item : x
                    ),
                };
            } else {
                return {...state, cartItems: [...state.cartItems, item]};
            }
        case CART_REMOVE_ITEM:
            return {
                ...state,
                cartItems: state.cartItems.filter((x) => x.product !== action.payload),
            };
        default:
            return state;
    }
}