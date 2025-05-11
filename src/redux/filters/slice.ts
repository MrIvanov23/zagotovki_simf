import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IFiltersState } from "./types";

const initialState: IFiltersState = {
    activeSearchValue: '',
    activeCategories: 0
};

export const filtersSlise = createSlice({
	name: "filters",
	initialState,
	reducers: {
        setActiveSearchValue: (state, action: PayloadAction<string>) => {
            state.activeSearchValue = action.payload;
        },
        setActiveCategories: (state, action: PayloadAction<number>) => {
            state.activeCategories = action.payload;
        }
	}
});

export const { setActiveSearchValue, setActiveCategories } = filtersSlise.actions;

export default filtersSlise.reducer;
