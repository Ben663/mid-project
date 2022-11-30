const Categories = () => {
	const data = [
		{
			cateImg: './Assets/Img/Category/cat1.png',
			cateName: 'Fashion',
		},
		{
			cateImg: './Assets/Img/Category/cat2.png',
			cateName: 'Electronic',
		},
		{
			cateImg: './Assets/Img/Category/cat3.png',
			cateName: 'Cars',
		},
		{
			cateImg: './Assets/Img/Category/cat4.png',
			cateName: 'Home & Garden',
		},
		{
			cateImg: './Assets/Img/Category/cat5.png',
			cateName: 'Gifts',
		},
		{
			cateImg: './Assets/Img/Category/cat6.png',
			cateName: 'Music',
		},
		{
			cateImg: './Assets/Img/Category/cat7.png',
			cateName: 'Health & Beauty',
		},
		{
			cateImg: './Assets/Img/Category/cat8.png',
			cateName: 'Pets',
		},
		{
			cateImg: './Assets/Img/Category/cat9.png',
			cateName: 'Baby Toys',
		},
		{
			cateImg: './Assets/Img/Category/cat10.png',
			cateName: 'Groceries',
		},
		{
			cateImg: './Assets/Img/Category/cat11.png',
			cateName: 'Books',
		},
	];

	return (
		<>
			<div className='category'>
				{data?.map((value, index) => {
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
					)
				})}
			</div>
		</>
	);
};

export default Categories;
