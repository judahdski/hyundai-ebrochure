import React from 'react';
import konaExampleBanner from '../assets/img/kona_exmp_banner.jpg';
// import { carDetails } from '../assets/data/carDetails';

const BasePage = ({ content }) => {
	const carID = localStorage.getItem('carID');
	// const carBannerPath = carID ? carDetails.filter((row) => row.carID == carID)[0].image.banner : null;

	return (
		<main className='flex flex-col items-center'>
			<img
				src={konaExampleBanner}
				alt='Kona'
				className='w-screen'
			/>

			{content}
		</main>
	);
};

export default BasePage;
