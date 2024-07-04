import React, { useState } from 'react';

import Header from './components/Header';
import Footer from './components/Footer';
import BasePage from './components/BasePage';

import Lineups from './pages/Lineups';
import Contact from './pages/Contact';
import Pricelist from './pages/Pricelist';

function App() {
	const [page, setPage] = useState('lineups');
	let mainContent;

	switch (page) {
		case 'lineups':
			mainContent = <Lineups />;
			break;
		case 'contact':
			mainContent = <Contact />;
			break;
		case 'pricelist':
			mainContent = <Pricelist />;
			break;

		default:
			break;
	}

	return (
		<div>
			<Header setPage={setPage} page={page} />
			<BasePage content={mainContent ?? <Lineups />} />
			{page == 'contact' ? <div></div> : <Footer />}
		</div>
	);
}

export default App;

/**
 * bagi color jadi beberapa kategori
 * mainColor = 1C4682
 */
