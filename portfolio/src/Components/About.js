import React from 'react';

function About(props) {
	const { name, image, bio, phone, email, resumedownload } = props.data;
	const profilepic = 'images/' + image;

	return (
		<section id="about">
			<div className="row">
				<div className="three columns">
					<img
						className="profile-pic"
						src={profilepic}
						alt="Blake Wright Profile Pic"
					/>
				</div>
				<div className="nine columns main-col">
					<h2>About Me</h2>

					<p>{bio}</p>
					<div className="row">
						<div className="columns contact-details">
							<h2>Contact Details</h2>
							<p className="address">
								<span>{name}</span>
								<br />

								<span>{phone}</span>
								<br />
								<span>{email}</span>
							</p>
						</div>
						<div className="columns download">
							<p>
								<a
									href="./public/documents/Blake_Wright_Resume_PDF.pdf"
									target="blank"
									className="button"
								>
									<i className="fa fa-download"></i>Download Resume
								</a>
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default About;
