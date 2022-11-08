import * as actionTypes from "../action-types";

const initialState = {
	products: [],
	details: {},
	cart: [],
};

const rootReducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.GET_ALL_PRODUCTS:
			return {
				...state,
				products: action.payload,
			};
		case actionTypes.GET_PRODUCT_DETAILS:
			return {
				...state,
				details: action.payload,
			};
		default:
			return state;
	}
};

export default rootReducer;
