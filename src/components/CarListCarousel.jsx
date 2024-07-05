'use client';

import { Carousel } from 'flowbite-react';
import { cars } from '../assets/data/cars';
import { carDetails } from '../assets/data/carDetails';

export const CarListCarousel = () => {
	return (
		<div>
			<Carousel
				slideInterval={1000}
				indicators={false}
				pauseOnHover={true}
				leftControl={
					<div className='p-8'>
						<i class='fa-solid fa-chevron-left text-base md:text-3xl'></i>
					</div>
				}
				rightControl={
					<div className='p-8'>
						<i class='fa-solid fa-chevron-right text-base md:text-3xl'></i>
					</div>
				}>
				{carDetails.map(({ carID, image }, index) => {
					let carName = cars.filter((car) => car.id == carID)[0].name;

					return (
						<CarCard
							key={index}
							imgPath={image.mainDisplay}
							carTitle={carName}
						/>
					);
				})}
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
