'use client';

import { Carousel } from 'flowbite-react';
import { cretaMD, palisadeMD } from '../assets/img/main_display/index';
import { cars } from '../assets/data/cars';
import { carDetails } from '../assets/data/carDetails';

export const CarListCarousel = ({ setPage }) => {
	return (
		<div>
			<Carousel
				slideInterval={1000}
				indicators={false}
				pauseOnHover={true}
				leftControl={
					<div className='p-8'>
						<i className='fa-solid fa-chevron-left text-base md:text-3xl'></i>
					</div>
				}
				rightControl={
					<div className='p-8'>
						<i className='fa-solid fa-chevron-right text-base md:text-3xl'></i>
					</div>
				}>
				{cars.map(({ id, name, type }) => {
					const carObj = carDetails.filter((row) => row.id == id)[0].carDetail;

					return (
						<CarCard
							key={id}
							carID={id}
							carTitle={name}
							imgPath={carObj.mainImage?.mainDisplay}
							setPage={setPage}
						/>
					);
				})}
			</Carousel>
		</div>
	);
};

const CarCard = ({ setPage, imgPath, carTitle, carID }) => {
	return (
		<div
			className='w-full flex justify-center cursor-pointer'
			onClick={() => {
				setPage(carID);
				localStorage.setItem('carID', carID);
			}}>
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
