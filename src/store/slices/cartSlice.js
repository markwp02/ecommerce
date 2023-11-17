import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    orderProductsList: [],
  },
  reducers: {
    addToCart: (state, action) => {
        const orderProduct = {orderProductQuantity: 1, product: action.payload};
        const notInList = -1
        let indexFound = isProductInCart(state.orderProductsList, orderProduct.product);

        if(indexFound === notInList) {
            state.orderProductsList.push( orderProduct );
        } else if(orderProduct.product.productStock > state.orderProductsList[indexFound].orderProductQuantity){
            state.orderProductsList[indexFound].orderProductQuantity++;
        } else {
            console.warn("Attempted to add more items then is in stock");
        }
    },
    updateProductQuantity: (state, action) => {
        let {productId, newProductQuantity} = action.payload;

        state.orderProductsList.map((orderProduct) => {
            if(orderProduct.product.productId === productId) {
                orderProduct.orderProductQuantity = newProductQuantity;
            }
            return orderProduct;
        });
    },
    removeProductFromCart: (state, action) => {
        let targetId = action.payload;
        state.orderProductsList = state.orderProductsList.filter((orderProduct) => {
            return orderProduct.product.productId !== targetId;
        });
    },
    resetCart: (state, action) => {
        state.orderProductsList = [];
    }
  },
});

const isProductInCart = (orderProductsList, product) => {
    const notInList = -1
    let indexFound = notInList;

    if(orderProductsList.length === 0) {
        return notInList;
    }

    for(let index = 0; index < orderProductsList.length; index++) {
        if( orderProductsList[index].product.productName === product.productName) {
            indexFound = index;
            break;
        }
    }
    return indexFound;
};

// Action creators are generated for each case reducer function
export const { addToCart, updateProductQuantity, removeProductFromCart, resetCart } = cartSlice.actions;

export default cartSlice.reducer;