import Assets from '../Assets/Img/Category/cat1.png'
import Assets1 from '../Assets/Img/Category/cat2.png'
import Assets3 from '../Assets/Img/Category/cat4.png'
import Assets4 from '../Assets/Img/Category/cat5.png'
import Assets5 from '../Assets/Img/Category/cat6.png'
import Assets6 from '../Assets/Img/Category/cat7.png'
import Assets7 from '../Assets/Img/Category/cat8.png'
import Assets8 from '../Assets/Img/Category/cat9.png'
import Assets9 from '../Assets/Img/Category/cat10.png'
import Assets10 from '../Assets/Img/Category/cat11.png'
const Categories = () => {
	const data = [
		{
			cateImg: Assets,
			cateName: 'Fashion',
		},
		{
			cateImg: Assets1,
			cateName: 'Electronic',
		},
		{
			cateImg: Assets3,
			cateName: 'Home & Garden',
		},
		{
			cateImg: Assets4,
			cateName: 'Gifts',
		},
		{
			cateImg: Assets5,
			cateName: 'Music',
		},
		{
			cateImg: Assets6,
			cateName: 'Health & Beauty',
		},
		{
			cateImg: Assets7,
			cateName: 'Pets',
		},
		{
			cateImg: Assets8,
			cateName: 'Baby Toys',
		},
		{
			cateImg: Assets9,
			cateName: 'Groceries',
		},
		{
			cateImg: Assets10,
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
