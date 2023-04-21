import { createSlice } from "@reduxjs/toolkit"
const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: {},
        totalItemsCount: 0,
    },
    reducers: {
        additem: (state, action) => {
            const item = state.items[action.payload.id];
            const quantity =
                item && item.hasOwnProperty("quantity")
                    ? state.items[action.payload.id]?.quantity + 1
                    : 1;
            state.items[action.payload.id] = { ...action.payload, quantity };
            state.totalItemsCount = state.totalItemsCount + 1;
        },
        removeitem: (state, action) => {
            const item = state.items[action.payload];
            if (!item) return;
            if (item.quantity > 1) {
                item.quantity -= 1;
                state.totalItemsCount--;
            } else {
                state.totalItemsCount--;
                delete state.items[action.payload];
            }

        },
        clearitem: (state, action) => {
            state.items = []
        }
    }
})
export const { additem, removeitem, clearitem } = cartSlice.actions;
export default cartSlice.reducer;