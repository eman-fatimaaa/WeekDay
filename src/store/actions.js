
import axios from 'axios'



export const getProducts = ({ commit }) => {
    axios.get('https://fakestoreapi.com/products')
        .then(response => {
            commit('SET_PRODUCTS', response.data);
        })
}

export const getProduct = ({ commit }, productId) => {
    axios.get(`https://fakestoreapi.com/products/${productId}`)
        .then(response => {
            console.log(commit('SET_PRODUCT', response.data));

        })
}
//Fetches the specfied api of cart
export const addProductToCart = ({ commit }, { product, quantity }) => {
    commit("ADD_TO_CART", { product, quantity });

    axios.post("https://fakestoreapi.com/carts", {
        product_id: product.id,
        quantity,
    });
};
