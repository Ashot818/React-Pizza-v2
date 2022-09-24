import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Pizza, SearchPizzaParams } from "./type";

export const fetchPizzas = createAsyncThunk<Pizza[],SearchPizzaParams>(
    "pizza/fetchPizzasStatus",
    async (params) => {
      const { order, sortBy, category, search, currentPage } = params;
      const { data } = await axios.get<Pizza[]>(
        `https://62ffa0219350a1e548e311d0.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`
      );
  
      return data ;
    }
  );