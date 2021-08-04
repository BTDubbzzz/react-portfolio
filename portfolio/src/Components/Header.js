import React from 'react';
import Network from './Network';

function Header(props) {
	const { name, occupation, description } = props.data;
	const city = props.data.address.city;

	return (
		<header id="home">
			<nav id="nav-wrap">
				<a className="mobile-btn" href="#nav-wrap" title="Show navigation">
					Show navigation
				</a>
				<a className="mobile-btn" href="#home" title="Hide navigation">
					Hide navigation
				</a>

				<ul id="nav" className="nav">
					<li className="current">
						<a className="smoothscroll" href="#home">
							Home
						</a>
					</li>
					<li>
						<a className="smoothscroll" href="#about">
							About
						</a>
					</li>
					<li>
						<a className="smoothscroll" href="#resume">
							Skills
						</a>
					</li>
					<li>
						<a className="smoothscroll" href="#portfolio">
							Projects
						</a>
					</li>
					<li>
						<a className="smoothscroll" href="#contact">
							Contact
						</a>
					</li>
				</ul>
			</nav>

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