import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../redux/actions";

const ProductsContainer = () => {
	const dispatch = useDispatch();
	const productsRedux = useSelector(state => state.products);
	useEffect(() => {
		!productsRedux.length && dispatch(getAllProducts());
	}, []);
	return (
		<div>
			{productsRedux.map(el => (
				<div>
					<h1>{el.title}</h1>
					<img src={el.image} style={{ width: "300px" }} />
				</div>
			))}
		</div>
	);
};

export default ProductsContainer;
