export const SET_PRODUCTS = (state, products) => {
    state.products = products;

}
export const SET_PRODUCT = (state, product) => {
    state.product = product;
}
//Authentication for route gaurds
export const setauthentication = (state, status) => {
    state.authenticated = status;
}
//State for the increment of cart
export const ADD_TO_CART = (state, { product, quantity }) => {
    let productInCart = state.cart.find((item) => {
        return item.product.id === product.id;
    });
    if (productInCart) {
        productInCart.quantity += quantity;
        return;
    }
    state.cart.push({
        product,
        quantity
    })
};