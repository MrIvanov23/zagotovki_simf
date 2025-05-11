export interface ICartItem {
    id: string,
    title: string,
    price: number,
    images: string[],
    quantity: number
};

export interface ICartState {
    cartItems: ICartItem[]
};