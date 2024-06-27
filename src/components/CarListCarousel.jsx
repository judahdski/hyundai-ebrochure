'use client';

import { Carousel } from 'flowbite-react';
import { carList } from '../assets/data';

export const CarListCarousel = () => {
	return (
		<div>
			<Carousel
				slideInterval={1000}
				indicators={false}
				pauseOnHover={true}>
				{carList.map(({ imgPath, name }) => (
					<CarCard
						imgPath={imgPath}
						carTitle={name}
					/>
				))}
			</Carousel>
		</div>
	);
};

const CarCard = ({ imgPath, carTitle }) => {
	return (
		<div className='w-full flex justify-center'>
			<div className='max-w-[640px] flex flex-col items-center gap-2 md:gap-6'>
				<img
					src={imgPath}
					alt={carTitle}
				/>
				<h4 className='text-2xl tracking-widest font-medium uppercase'>{carTitle}</h4>
			</div>
		</div>
	);
};
