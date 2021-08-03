import React from 'react';
import resumeData from './resumeData.json';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';

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
