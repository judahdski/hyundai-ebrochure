import React, { useState } from 'react';
import CarDetailNavigator from '../../components/CarDetailNavigator';
import SubHighlight from './components/SubHighlight';
import SubGallery from './components/SubGallery';
import SubPrice from './components/SubPrice';
import SubFullSpec from './components/SubFullSpec';
import { Carousel } from 'flowbite-react';

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
		// <div className='w-full max-w-[1280px]'>
		// <CarDetailNavigator
		// 	carDetailSection={carDetailSection}
		// 	setCarDetailSection={setCarDetailSection}
		// />

		// 	{sectionComponent}
		// </div>
		<div className='w-full max-w-[1280px]'>
			<CarDetailNavigator
				carDetailSection={carDetailSection}
				setCarDetailSection={setCarDetailSection}
			/>
			<Carousel
				indicators={false}
				slide={false}
				onSlideChange={(slide) => setCarDetailSection(slide)}>
				<SubHighlight carID={carID} />
				<SubGallery carID={carID} />
				<SubPrice carID={carID} />
				<SubFullSpec carID={carID} />
			</Carousel>
		</div>
	);
};

export default MainCarDetails;
