import React from 'react';
import konaExampleBanner from '../assets/img/kona_exmp_banner.jpg';
import { Carousel } from 'flowbite-react';

const BasePage = ({ content, carID }) => {
	return (
		<main className='flex flex-col items-center'>
			{/* <div className='h-56 sm:h-64 xl:h-80 2xl:h-96'>
				<Carousel slideInterval={5000}>
					
				</Carousel>
			</div> */}

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
