import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    productsInCart: [],
  },
  reducers: {
    addToCart: (state, action) => {
        const productForCart = Object.assign({quantity: 1}, action.payload);
        const notInList = -1
        let indexFound = isProductInCart(state.productsInCart, productForCart);

        if(indexFound === notInList) {
            state.productsInCart.push(productForCart);
        } else {
            state.productsInCart[indexFound].quantity++;
        }
    },
  },
});

const isProductInCart = (productsInCart, product) => {
    const notInList = -1
    let indexFound = notInList;

    if(productsInCart.length === 0) {
        return notInList;
    }

    for(let index = 0; index < productsInCart.length; index++) {
        console.log("Within loop: " + index);
        if( productsInCart[index].productName === product.productName) {
            indexFound = index;
            break;
        }
    }
    return indexFound;
};

// Action creators are generated for each case reducer function
export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;