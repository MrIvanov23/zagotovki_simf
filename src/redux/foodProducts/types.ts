type status = "loading" | "success" | "error";

export interface IFoodProduct {
    id: string,
    title: string,
	description: string,
    description2: string,
    description3: string,
    description4: string,
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