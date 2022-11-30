import React from 'react';
import Categories from './Categories';
import Data from '../Data';
// import SliderHome from './Slider';
import './Home.css';

const Home = () => {
	return (
		<>
			<section className='home' >
				<div className='container d_flex' >
					<Categories />
					{Data.productItems.map((img, index) => {
						return (
							<img
								key={index}
								src={img.cover}
								alt=''
							/>
						);
					})}
					{/* <SliderHome /> */}
				</div>
			</section>
		</>
	);
};

export default Home;
