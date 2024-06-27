import React from 'react';
import konaExampleBanner from '../assets/img/kona_exmp_banner.jpg';

const BasePage = ({ content }) => {
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
