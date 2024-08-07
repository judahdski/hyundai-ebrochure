import React, { useState } from 'react';

import Header from './components/Header';
import Footer from './components/Footer';
import BasePage from './components/BasePage';

import Lineups from './pages/Lineups';
import Contact from './pages/Contact';
import Pricelist from './pages/Pricelist';
import MainCarDetails from './pages/CarDetails/MainCarDetails';

function App() {
	const [page, setPage] = useState(null);

	let mainContent;

	if (page == 'scr_lu' || page == null) {
		mainContent = <Lineups setPage={setPage} />;
	} else if (page == 'scr_ct') {
		mainContent = <Contact />;
	} else if (page == 'scr_pl') {
		mainContent = <Pricelist />;
	} else {
		mainContent = <MainCarDetails />;
	}

	return (
		<div>
			<Header
				setPage={setPage}
				page={page}
			/>
			<BasePage content={mainContent ?? <Lineups />} />
			<Footer isContactPage={page == 'scr_ct'} />
		</div>
	);
}

export default App;
