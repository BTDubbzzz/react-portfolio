import React from 'react';

function Resume(props) {
	const skillmessage = props.data.skillmessage;
	const skills = props.data.skills.map(function (skill) {
		const className = 'bar-expand ' + skill.name.toLowerCase();
		return (
			<li key={skill.name}>
				<span style={{ width: skill.level }} className={className}></span>
				<em>{skill.name}</em>
			</li>
		);
	});

	return (
		<section id="resume">
			<div className="row skill">
				<div className="three columns header-col">
					<h1>
						<span>Skills</span>
					</h1>
				</div>

				<div className="nine columns main-col">
					<p>{skillmessage}</p>

					<div className="bars">
						<ul className="skills">{skills}</ul>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Resume;
