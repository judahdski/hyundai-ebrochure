import React from 'react';

import Header from './components/Header';
import Footer from './components/Footer';
import BasePage from './components/BasePage';

import Lineups from './pages/Lineups';
import Contact from './pages/Contact';
import MainCarDetails from './pages/CarDetails/MainCarDetails';

function App() {
	let page = 'a';
	const mainContent = <MainCarDetails />;

	return (
		<div>
			<Header />
			<BasePage content={mainContent} />
			{page == 'contact' ? <div></div> : <Footer />}
		</div>
	);
}

export default App;

/**
 * bagi color jadi beberapa kategori
 * mainColor = 1C4682
 */
