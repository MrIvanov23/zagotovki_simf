type status = "loading" | "success" | "error";

export interface IFoodProduct {
    id: string,
    title: string,
    description: string,
    ingredients: string,
    cooking: string,
    expirationDate: string,
    calorie: string,
    images: string[],
	price: number,
    category: number,
    rating: number 
};

export interface IFoodProductsState {
    foodById: IFoodProduct | null,
    foodRelatedProducts: IFoodProduct[],
	foodProductsList: IFoodProduct[],
	status: status,
    statusFoodById: status,
    statusFoodRelatedProducts: status
};