import * as actionsTypes from "../action-types.js";

export function getAllProducts() {
	return async function (dispatch) {
		try {
			const pedido = await fetch("https://fakestoreapi.com/products");
			const data = await pedido.json();

			console.log(data);
			dispatch({
				type: actionsTypes.GET_ALL_PRODUCTS,
				payload: data,
			});
		} catch (err) {
			console.log({ error: err.message });
		}
		console.log("pedido realizado");
		// 	fetch("https://fakestoreapi.com/products")
		// 		.then(res => res.json())
		// 		.then(data =>
		// 			dispatch({
		// 				type: actionsTypes.GET_ALL_PRODUCTS,
		// 				payload: data,
		// 			})
		// 		)
		// 		.catch(err => console.log({ error: err.message }))
		// 		.finally(() => console.log("pedido realizado"));
	};
}

export function getProductDetails(id) {
	return async function (dispatch) {
		try {
			const pedido = await fetch(
				`https://fakestoreapi.com/products/${id}`
			);
			const data = pedido.json();
			dispatch({
				type: actionsTypes.GET_PRODUCT_DETAILS,
				payload: data,
			});
		} catch (err) {
			console.log({ error: err.message });
		}
	};
}
