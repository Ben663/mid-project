import React from 'react';
import Home from '../Components/MainHome/Home';
// import FlashDeals from '../Components/FlashDeals/FlashDeals';
import TopCate from '../Components/Top/TopCate';
import NewArrivals from '../Components/Arrivals/NewArrivals';
import Shop from '../Components/Shops/Shop';
import Annocument from '../Components/Annocument/Annocument';
import Wrapper from '../Components/Wrapper/Wrapper';
// import Discount from '../Components/Discount/Discount'

const Store = ({ productItems, addToCart, CartItem, shopItems }) => {
	return (
		<>
			<Home CartItem={CartItem} />
			{/* <FlashDeals
				productItems={productItems}
				addToCart={addToCart}
			/> */}
			<TopCate />
			<NewArrivals />
			{/* <Discount /> */}
			<Shop
				shopItems={shopItems}
				addToCart={addToCart}
			/>
			<Annocument />
			<Wrapper />
		</>
	);
};
export default Store;
