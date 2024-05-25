import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from './ProductCard';
import classes from './Product.module.css';
import Loader from '../Loader/Loder';

function Product() {
	const [products, setProducts] = useState();
	const [isLoading, setIsLoading] = useState(false);
	useEffect(() => {
		setIsLoading(true);	
		axios
			.get('https://fakestoreapi.com/products')
			.then(res => {
				setProducts(res.data);
				setIsLoading(false);
			})
			.catch(err => {
				console.log(err);
				setIsLoading(false);
			});
	}, []);
//loader is just showing the user the page will return something as promise ....sow wehn the page is loadeded it must show loading sign for the user
	return (
		<>
			{isLoading ? (
				<Loader />
			) : (
				<section className={classes.products_container}>
					{products?.map(singleProduct => {
						return (
							<ProductCard
								renderAdd={true}
								product={singleProduct}
								key={singleProduct.id}
							/>
						);
					})}
				</section>
			)}
		</>
	);
}

export default Product;
