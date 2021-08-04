import React from 'react';

function Project(props) {
	const { title, category, image, url, codeurl } = props.data;
	const projectImage = 'images/portfolio/' + image;

	return (
		<div key={title} className="columns portfolio-item">
			<div>{title}</div>

			<div>
				<a href={codeurl}>Code Source</a>
			</div>
			<div className="item-wrap">
				<a href={url} target="_blank" rel="noopener noreferrer" title={title}>
					<img alt={title} src={projectImage} />
					<div className="overlay">
						<div className="portfolio-item-meta">
							<h5>{title}</h5>
							<p>{category}</p>
						</div>
					</div>
					<div className="link-icon">
						<i className="fa fa-link"></i>
					</div>
				</a>
			</div>
		</div>
	);
}

export default Project;
