import React, { useState } from 'react';

import Header from './components/Header';
import Footer from './components/Footer';
import BasePage from './components/BasePage';

import Lineups from './pages/Lineups';
import Contact from './pages/Contact';
import Pricelist from './pages/Pricelist';

function App() {
	const [page, setPage] = useState(null);
	let mainContent;

	switch (page) {
		case 'scr_lu':
			mainContent = <Lineups />;
			break;
		case 'scr_ct':
			mainContent = <Contact />;
			break;
		case 'scr_pl':
			mainContent = <Pricelist />;
			break;
	}

	return (
		<div>
			<Header
				setPage={setPage}
				page={page}
			/>
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
