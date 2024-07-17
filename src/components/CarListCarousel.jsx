'use client';

import { Carousel } from 'flowbite-react';
import { cretaMD, palisadeMD } from '../assets/img/main_display/index';

export const CarListCarousel = ({ setPage }) => {
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
				<CarCard
					imgPath={cretaMD}
					carTitle='creta'
					carID='asdf'
					setPage={setPage}
				/>
				<CarCard
					imgPath={palisadeMD}
					carTitle='palisade'
					carID='123asdf'
					setPage={setPage}
				/>
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
