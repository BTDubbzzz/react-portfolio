import React from 'react';
import Network from './Network';
import Navigation from './Navigation';

function Header(props) {
	const { name, occupation, description } = props.data;
	const city = props.data.address.city;

	return (
		<header id="home">
			<Navigation></Navigation>

			<div className="row banner">
				<div className="banner-text">
					<h1 className="responsive-headline">I'm {name}.</h1>
					<h3>
						I'm a {city} based <span>{occupation}</span> {description}.
					</h3>
					<hr />
					<ul className="social">
						<Network data={props.data.social}></Network>
					</ul>
				</div>
			</div>

			<p className="scrolldown">
				<a className="smoothscroll" href="#about">
					<i className="icon-down-circle"></i>
				</a>
			</p>
		</header>
	);
}

export default Header;
