import React from 'react';
import { CarListCarousel } from '../components/CarListCarousel';
import { features } from '../assets/data';

const Lineups = () => {
	return (
		<div className='w-full max-w-[1280px]'>
			<div className='hidden md:flex -mt-[47px] rounded-2xl shadow overflow-hidden'>
				{features.map(({ title, icon, isMiddle }) => (
					<div className={isMiddle ? 'w-full bg-white py-4 flex flex-col items-center border-r-2 border-l-2 border-[#EDF3FA]' : 'w-full bg-white py-4 flex flex-col items-center'}>
						<img
							src={icon}
							alt={title}
							className='w-[32px]'
						/>
						<p className='pt-2 text-[18px] font-medium'>{title}</p>
					</div>
				))}
			</div>

			<div className='pt-8 pb-4 md:pb-2 px-4'>
				<h2 className='text-[#1C4682] text-2xl md:text-[32px] font-semibold'>Our Lineups</h2>
				<div className='w-[90px] md:-[120px] h-1 mt-1 md:mt-2 bg-[#D7E1ED]'></div>
			</div>

			<CarListCarousel />

			<div className='pb-16 md:pt-8 md:pb-[72px] px-4 flex flex-col md:flex-row items-center md:justify-center gap-4 md:gap-8'>
				<button className='w-full max-w-[310px] py-[14px] bg-[#1C4682] hover:bg-[#183e72] rounded-lg text-white text-[16px] md:text-[18px] font-medium md:order-2'>BUY ME</button>
				<button className='w-full max-w-[310px] py-[14px] bg-[#EDF3FA] hover:bg-[#e1e8f0] rounded-lg text-[#1C4682] text-[16px] md:text-[18px] md:order-1'>TEST DRIVE</button>
			</div>
		</div>
	);
};

export default Lineups;
