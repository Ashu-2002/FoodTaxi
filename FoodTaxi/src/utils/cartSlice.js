import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name : "cart",
    initialState : {
        items: localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")): [],
        totalQuantity: localStorage.getItem("totalQuantity") ? JSON.parse(localStorage.getItem("totalQuantity")) : 0
    },
    reducers : {
        addItem : (state, action) => {
            const newItem = action.payload;
            newItem.quantity=1;
            const index = state.items?.findIndex((item) => item?.card?.info.id === newItem.card?.info?.id);
            
            if(index >= 0){
                const itemAtIndex = state.items.at(index);
                itemAtIndex.quantity++;
            }
            else{
                state.items.push(newItem);
            }
            state.totalQuantity++;
            localStorage.setItem("cart", JSON.stringify(state.items));
            localStorage.setItem("totalQuantity", JSON.stringify(state.totalQuantity));
        },
        removeItem : (state, action) => {
            const item = action.payload;
            const index = state.items.findIndex((i) => i?.card?.info.id === item.card?.info?.id);
            
            if(index >= 0){
                const itemAtIndex = state.items.at(index);
                
                if(itemAtIndex.quantity > 1)
                    itemAtIndex.quantity--;
                else
                    state.items.splice(index, 1);

                state.totalQuantity--;
                localStorage.setItem("cart", JSON.stringify(state.items));
                localStorage.setItem("totalQuantity", JSON.stringify(state.totalQuantity));
            }
        },
        clearCart : (state) => {
            state.items.length = 0;
            state.totalQuantity = 0;

            localStorage.setItem("cart", JSON.stringify(state.items));
            localStorage.setItem("totalQuantity", JSON.stringify(state.totalQuantity));
        }
    }
});

export const {addItem, removeItem, clearCart} = cartSlice.actions;

export default cartSlice.reducer;