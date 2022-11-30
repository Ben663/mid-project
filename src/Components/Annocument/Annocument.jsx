import React from 'react';
import Assets from '../Assets/Img/banner-1.png'; 
import Assets1 from '../Assets/Img/banner-2.png'; 
const Annocument = () => {
	const mystyle = {
		width: '30%',
		height: '340px',
	};
	const mystyle1 = {
		width: '68%',
		height: '340px',
	};
	return (
		<>
			<section className='annocument background'>
				<div className='container d_flex'>
					<div
						className='img'
						style={mystyle}>
						<img
							src= {Assets}
							width='100%'
							height='100%'
							alt=''
						/>
					</div>
					<div
						className='img'
						style={mystyle1}>
						<img
							src={Assets1}
							width='100%'
							height='100%'
							alt=''
						/>
					</div>
				</div>
			</section>
		</>
	);
};

export default Annocument;
