import React from 'react';

function Network(props) {
	return props.data.map(function (network) {
		return (
			<li key={network.name}>
				<a href={network.url}>
					<i className={network.className}></i>
				</a>
			</li>
		);
	});
}

export default Network;
