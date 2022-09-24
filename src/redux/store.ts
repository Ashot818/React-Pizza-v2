import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import cart from "./cart/slice";
import filterSlice from './filter/slice'
import pizza from "./pizza/slice";
export const store = configureStore({
  reducer: {
    filterSlice,
    cart,
    pizza,
  },
});


export type RootState = ReturnType<typeof store.getState>

type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()