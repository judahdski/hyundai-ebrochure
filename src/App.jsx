import React from 'react';

import Header from './components/Header';
import Footer from './components/Footer';
import BasePage from './components/BasePage';

import Lineups from './pages/Lineups';

function App() {
	let page = 'lineups';
	const mainContent = <Lineups />;

	return (
		<div>
			<Header />
			<BasePage content={mainContent} />
			<Footer />
		</div>
	);
}

export default App;

/**
 * bagi color jadi beberapa kategori
 * mainColor = 1C4682
 */
