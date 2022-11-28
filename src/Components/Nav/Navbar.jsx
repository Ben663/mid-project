import React from 'react'
import './Navbar.css'
import logo from '../Nav/logo.svg'
import {Link} from 'react-router-dom'

function Navbar() {
    return (
			<nav className='menu-container'>
				<input
					type='checkbox'
					aria-label='Toggle menu'
				/>
				<span></span>
				<span></span>
				<span></span>
				<Link to='/'>
					<img
						className='menu-logo'
						src={logo}
						alt='logo'
					/>
				</Link>
				<div className='menu'>
					<ul>
						<li>
							<Link to='/'>Home</Link>
						</li>
						<li>
							<Link to='/Product'>Product</Link>
						</li>
						<li>
							<Link to='/ProductItem'>Spcific Item</Link>
						</li>
					</ul>
				</div>
			</nav>
		);
}

export default Navbar