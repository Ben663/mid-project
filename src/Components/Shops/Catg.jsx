import React from 'react';

const Catg = () => {
	const data = [
		{
			cateImg: './Assets/Img/category/cat-1.png',
			cateName: 'Apple',
		},
		{
			cateImg: './Assets/Img/category/cat-2.png',
			cateName: 'Samasung',
		},
		{
			cateImg: './Assets/Img/category/cat1.png',
			cateName: 'Oppo',
		},
		{
			cateImg: './Assets/Img/category/cat2.png',
			cateName: 'Vivo',
		},
		{
			cateImg: './Assets/Img/category/cat5.png',
			cateName: 'Redimi',
		},
		{
			cateImg: './Assets/Img/category/cat6.png',
			cateName: 'Sony',
		},
	];
	return (
		<>
			<div className='category'>
				<div className='chead d_flex'>
					<h1>Brands </h1>
					<h1>Shops </h1>
				</div>
				{data.map((value, index) => {
					return (
						<div
							className='box f_flex'
							key={index}>
							<img
								src={value.cateImg}
								alt=''
							/>
							<span>{value.cateName}</span>
						</div>
					);
				})}
				<div className='box box2'>
					<button>View All Brands</button>
				</div>
			</div>
		</>
	);
};

export default Catg;
