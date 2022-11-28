
import React from 'react';
import { Link } from 'react-router-dom';
import '../Footer/Footer.css';

function Footer() {
    return (
			<div className='footer-container'>
				<div className='container'>
					<ul>
						<li>look for :</li>
						<li>
							<Link href='#'>Services</Link>
						</li>
						<li>
							<Link href='#'>About Us</Link>
						</li>
						<li>
							<Link href='#'>Countact Us</Link>
						</li>
					</ul>
				</div>
			</div>
		);
}

export default Footer;
