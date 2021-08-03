import React from 'react';
import resumeData from './resumeData.json';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';
import Resume from './Components/Resume';
import Contact from './Components/Contact';
import Portfolio from './Components/Portfolio';

function App() {
	if (!resumeData) {
		return <div>Loading...</div>;
	}

	return (
		<div className="App">
			<Header data={resumeData.main} />
			<About data={resumeData.main} />
			<Resume data={resumeData.resume} />
			<Portfolio data={resumeData.portfolio} />
			<Contact data={resumeData.main} />
			<Footer data={resumeData.main} />
		</div>
	);
}

export default App;
