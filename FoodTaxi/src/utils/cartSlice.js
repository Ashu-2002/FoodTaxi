import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name : "cart",
    initialState : {
        items: []
    },
    reducers : {
        addItem : (state, action) => {
            const newItem = action.payload;
            newItem.quantity=1;
            
            const index = state.items.findIndex((item) => item?.card?.info.id === newItem.card?.info?.id);
            // console.log("index= "+index);
            // console.log(newItem.card.info.id);
            if(index >= 0){
                const i = state.items.at(index); // Get the item at the specified index
                // i.quantity = 1;                  // Set its quantity to 1
                // state.items[index] = i;
                i.quantity++;          // Update the item in place (no need to push it again)
                // console.log(i.quantity);
            }
            else{
                state.items.push(newItem);
                // console.log(newItem);
            }
        },
        clearCart : (state) => {
            state.items.length = 0;
        }
    }
});

export const {addItem, clearCart} = cartSlice.actions;

export default cartSlice.reducer;