import React, { useState } from 'react';
import CarDetailNavigator from '../../components/CarDetailNavigator';
import SubHighlight from './components/SubHighlight';
import SubGallery from './components/SubGallery';
import SubPrice from './components/SubPrice';
import SubFullSpec from './components/SubFullSpec';

const MainCarDetails = () => {
	const [carDetailSection, setCarDetailSection] = useState('highlight');
	console.log({ carDetailSection });
	let sectionComponent;	

	switch (carDetailSection) {
		case 'highlight':
			sectionComponent = <SubHighlight />;
			break;
		case 'gallery':
			sectionComponent = <SubGallery />;
			break;
		case 'price':
			sectionComponent = <SubPrice />;
			break;
		case 'full_spec':
			sectionComponent = <SubFullSpec />;
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
