export const getCartFromLocalStorage = () => {
    const organicFoodCartItems = localStorage.getItem('organicFoodCartItems');

    return organicFoodCartItems ? JSON.parse(organicFoodCartItems) : [];
};