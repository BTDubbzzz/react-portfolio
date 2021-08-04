import React from 'react';
import Project from './Project';

function Portfolio(props) {
	const projects = props.data.projects.map(function (project) {
		return <Project data={project} />;
	});

	return (
		<section id="projects">
			<div className="row">
				<div className="twelve columns collapsed">
					<h1>Check Out Some of My Projects.</h1>

					<div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
						{projects}
					</div>
				</div>
			</div>
		</section>
	);
}

export default Portfolio;
