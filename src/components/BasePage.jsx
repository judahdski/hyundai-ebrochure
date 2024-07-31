import React from 'react';
import konaExampleBanner from '../assets/img/kona_exmp_banner.jpg';
import { cars } from '../assets/data/cars';

const BasePage = ({ content }) => {
	const carID = localStorage.getItem('carID');
	const carBanner = cars.filter((row) => row.id == carID)[0]?.mainImage.banner;

	return (
		<main className='flex flex-col items-center'>
			{carBanner ? (
				<img
					src={carBanner}
					alt='Kona'
					className='w-screen'
				/>
			) : (
				<img
					src={konaExampleBanner}
					alt='Kona'
					className='w-screen'
				/>
			)}

			{content}
		</main>
	);
};

export default BasePage;
