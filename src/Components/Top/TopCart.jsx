import React from 'react';
// import Slider from 'react-slick';
import Tdata from './Tdata';

const TopCart = () => {
	// const settings = {
	// 	dots: false,
	// 	infinite: true,
	// 	slidesToShow: 3,
	// 	slidesToScroll: 1,
	// 	autoplay: true,
	// };
	return (
		<>
			{/* {...settings} */}
			{Tdata.map((value, index) => {
				return (
					<div className='main'>
						<React.Fragment>
							<div className='box product'>
								<div className='nametop d_flex'>
									<span className='tleft'>{value.para}</span>
									<span className='tright'>{value.desc}</span>
								</div>
								<div className='img'>
									<img
										src={value.cover}
										alt=''
										
									/>
								</div>
							</div>
						</React.Fragment>
					</div>
				);
			})}
		</>
	);
};

export default TopCart;
