import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IFoodProduct, IFoodProductsState } from "./types";
import { fetchFoodById, fetchFoodProducts, fetchFoodRelatedProducts, } from "./asyncThunk";

const initialState: IFoodProductsState = {
	foodProductsList: [],
    foodRelatedProducts: [],
    foodById: null,

	status: "loading",
    statusFoodById: "loading",
    statusFoodRelatedProducts: "loading"
};

export const foodProductsSlise = createSlice({
	name: "foodProducts",
	initialState,
	reducers: {
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchFoodProducts.pending, (state) => {
				state.foodProductsList = [];
				state.status = "loading";
			})
			.addCase(fetchFoodProducts.fulfilled, (state, action: PayloadAction<IFoodProduct[]>) => {
				state.foodProductsList = action.payload;
				state.status = "success";
			})
			.addCase(fetchFoodProducts.rejected, (state) => {
				state.foodProductsList = [];
				state.status = "error";
			});

        builder
			.addCase(fetchFoodRelatedProducts.pending, (state) => {
				state.foodRelatedProducts = [];
				state.statusFoodRelatedProducts = "loading";
			})
			.addCase(fetchFoodRelatedProducts.fulfilled, (state, action: PayloadAction<IFoodProduct[]>) => {
				state.foodRelatedProducts = action.payload;
				state.statusFoodRelatedProducts = "success";
			})
			.addCase(fetchFoodRelatedProducts.rejected, (state) => {
				state.foodRelatedProducts = [];
				state.statusFoodRelatedProducts = "error";
			});

        builder
			.addCase(fetchFoodById.pending, (state) => {
				state.foodById = null;
				state.statusFoodById = "loading";
			})
			.addCase(fetchFoodById.fulfilled, (state, action: PayloadAction<IFoodProduct>) => {
				state.foodById = action.payload;
				state.statusFoodById = "success";
			})
			.addCase(fetchFoodById.rejected, (state) => {
				state.foodById = null;
				state.statusFoodById = "error";
			});
	},
});

export default foodProductsSlise.reducer;