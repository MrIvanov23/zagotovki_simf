import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosFetch } from "../../axios/axios";

export const fetchFoodProducts = createAsyncThunk('foodProducts/fetchFoodProductsStatus', axiosFetch);
export const fetchFoodRelatedProducts = createAsyncThunk('foodRelatedProducts/fetchFoodProductsStatus', axiosFetch);
export const fetchFoodById = createAsyncThunk('foodById', axiosFetch);
