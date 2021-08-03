import React from 'react';
import Network from './Network';

function Footer(props) {
	return (
		<footer>
			<div className="row">
				<div className="twelve columns">
					<ul className="social-links">
						<Network data={props.data.social}></Network>
					</ul>

					<ul className="copyright">
						<li>&copy; Copyright 2021 Blake Wright</li>
					</ul>
				</div>
				<div id="go-top">
					<a className="smoothscroll" title="Back to Top" href="#home">
						<i className="icon-up-open"></i>
					</a>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
