import { createSlice } from "@reduxjs/toolkit";
import { addressType } from "../types";

export interface ListAddressState {
  list: addressType[];
  chosenAddress: number;
}

const initialState: ListAddressState = {
  list: [],
  chosenAddress: 0,
};

export const listAddressSlice = createSlice({
  name: "listAddress",
  initialState,
  reducers: {
    getListAddress: (state) => {
      const data = localStorage.getItem("listAddress");
      if (data) {
        state.list = JSON.parse(data);
      }
    },
    getChosenAddress: (state) => {
      const data = localStorage.getItem("chosenAddress");
      if (data) {
        state.chosenAddress = JSON.parse(data);
      }
    },
    chooseAddress: (state, action) => {
      state.chosenAddress = action.payload;
      localStorage.setItem("chosenAddress", action.payload);
    },
    addAddress: (state, action) => {
      state.list.push(action.payload);
      localStorage.setItem("listAddress", JSON.stringify(state.list));
    },
    deleteAddress: (state, action) => {
      state.list.splice(action.payload, 1);
      localStorage.setItem("listAddress", JSON.stringify(state.list));
    },
    updateAddress: (state, action) => {
      const { address, index } = action.payload;
      state.list[index] = address;
      localStorage.setItem("listAddress", JSON.stringify(state.list));
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  addAddress,
  deleteAddress,
  updateAddress,
  getListAddress,
  getChosenAddress,
  chooseAddress,
} = listAddressSlice.actions;

export default listAddressSlice.reducer;
