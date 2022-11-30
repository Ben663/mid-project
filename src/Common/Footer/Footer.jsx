import React from 'react'
import './Footer.css'

const Footer = () => {
	return (
		<>
			<footer>
				<div className='container grid2'>
					<div className='box'>
						<h1>Bentze</h1>
						<p>
							The store is for the world. Here you can buy, choose and enjoy a
							whole selection of products
						</p>
					</div>
					<div className='box'>
						<h2>About</h2>
						<ul>
							<li>Careers</li>
							<li>Our Cares</li>
							<li>Privacy Policy</li>
						</ul>
					</div>
					<div className='box'>
						<h2>Customer Care</h2>
						<ul>
							<li>How to Buy </li>
							<li>Track Your Order </li>
							<li>Returns & Refunds </li>
						</ul>
					</div>
					<div className='box'>
						<h2>Contact</h2>
						<ul>
							<li>33 Selait Blades South Israel </li>
							<li>Email: help@gmail.com</li>
							<li>Phone: +972559400093</li>
						</ul>
					</div>
				</div>
			</footer>
		</>
	);
};

export default Footer;