import axios from "axios";

export const URL = 'https://6820573372e59f922ef85e37.mockapi.io/zagotovki_simf';



export const createUrl = ( searchValue: string, categoriesIndex: number ) => {
	const search = searchValue ? `&title=${searchValue}` : '';
	const category = categoriesIndex > 0 ? `&category=${categoriesIndex}` : '';

	if (!search && !category) return URL;

	return `${URL}?${category}${search}`;
};

export const createUrlByID = ( id: string | undefined ) => {
	return id !== undefined ? `${URL}/${id}` : URL;
};

export const createUrlByCategory = ( category: number ) => {
	return `${URL}?category=${category}&sortBy=rating&order=desc`;
};

export const createUrlForShopHome = () => {
	return `${URL}?sortBy=rating&order=desc&page=1&limit=8`;
};



export const axiosFetch = async (url: string) => {
	const response = await axios.get(url);
	return response.data;
};