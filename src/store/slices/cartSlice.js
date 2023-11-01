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
    updateProductQuantity: (state, action) => {
        let {productId, quantity} = action.payload;

        state.productsInCart.map((product) => {
            if(product.productId === productId) {
                product.quantity = quantity;
            }
            return product;
        });
    },
    removeProductFromCart: (state, action) => {
        let targetId = action.payload;
        state.productsInCart = state.productsInCart.filter((product) => {
            return product.productId !== targetId;
        });
    }
  },
});

const isProductInCart = (productsInCart, product) => {
    const notInList = -1
    let indexFound = notInList;

    if(productsInCart.length === 0) {
        return notInList;
    }

    for(let index = 0; index < productsInCart.length; index++) {
        if( productsInCart[index].productName === product.productName) {
            indexFound = index;
            break;
        }
    }
    return indexFound;
};

// Action creators are generated for each case reducer function
export const { addToCart, updateProductQuantity, removeProductFromCart } = cartSlice.actions;

export default cartSlice.reducer;