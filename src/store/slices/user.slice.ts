import { createSlice } from "@reduxjs/toolkit";
import { getUserStatus } from "store/actions/user.action";

const initialState = {
  count: 0,
  user: {
    id: null,
    username: null,
    email: null,
    firstName: null,
    lastName: null,
  },
  isLoading: false,
  error: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    increment: (state, { payload }) => {
      state.count = state.count + payload;
    },
    decrement: (state, { payload }) => {
      state.count = state.count - payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(getUserStatus.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getUserStatus.fulfilled, (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
    });
    builder.addCase(getUserStatus.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload as string;
    });
  },
});

export default userSlice.reducer;
export const { increment, decrement } = userSlice.actions;
