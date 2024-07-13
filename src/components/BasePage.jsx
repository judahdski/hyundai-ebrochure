import React from 'react';
import konaExampleBanner from '../assets/img/kona_exmp_banner.jpg';
import { carDetails } from '../assets/data/carDetails';

const BasePage = ({ content, carID }) => {
	const carBannerPath = carID ? carDetails.filter((row) => row.carID == carID)[0].image.banner : null;

	return (
		<main className='flex flex-col items-center'>
			{/* <div className='h-56 sm:h-64 xl:h-80 2xl:h-96'>
				<Carousel slideInterval={5000}>
					
				</Carousel>
			</div> */}

			<img
				src={carBannerPath ?? konaExampleBanner}
				alt='Kona'
				className='w-screen'
			/>

			{content}
		</main>
	);
};

export default BasePage;
