import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store';
import { createSlice } from '@reduxjs/toolkit'

// Define a type for the slice state
interface WishlistState {
  items: number[],
}

// Define the initial state using that type
const initialState: WishlistState = {
  items: [],
}

export const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    addToWishlist: (state:WishlistState, action:PayloadAction<number>) => {
        state.items.push(action.payload);
        console.log(action.payload);
    }
  },
})

export const { addToWishlist } = wishlistSlice.actions
export const selectWishlist = (state: RootState) => state.wishlist;
export default wishlistSlice.reducer;