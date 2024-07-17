import React, { useState } from 'react';
import CarDetailNavigator from '../../components/CarDetailNavigator';
import SubHighlight from './components/SubHighlight';
import SubGallery from './components/SubGallery';
import SubPrice from './components/SubPrice';
import SubFullSpec from './components/SubFullSpec';

const MainCarDetails = () => {
	const [carDetailSection, setCarDetailSection] = useState('highlight');

	let sectionComponent;
	const carID = localStorage.getItem('carID');

	switch (carDetailSection) {
		case 'highlight':
			sectionComponent = <SubHighlight carID={carID} />;
			break;
		case 'gallery':
			sectionComponent = <SubGallery carID={carID} />;
			break;
		case 'price':
			sectionComponent = <SubPrice carID={carID} />;
			break;
		case 'full_spec':
			sectionComponent = <SubFullSpec carID={carID} />;
			break;

		default:
			break;
	}

	return (
		<div className='w-full max-w-[1280px]'>
			<CarDetailNavigator
				carDetailSection={carDetailSection}
				setCarDetailSection={setCarDetailSection}
			/>

			{sectionComponent}
		</div>
	);
};

export default MainCarDetails;
