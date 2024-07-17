import React from 'react';
import { CarListCarousel } from '../componentscar_listCarousel';
import { generalCode } from '../assets/data/generalCodes';

const Lineups = ({ setPage, setCarID }) => {
	return (
		<div className='w-full max-w-[1280px]'>
			{/* Features */}
			<div className='hidden md:flex -mt-[47px] rounded-2xl shadow overflow-hidden'>
				{generalCode
					.filter((item) => item.category == 'feature')
					.map(({ code, description, value }) => (
						<div className={`w-full bg-white py-4 flex flex-col items-center  ${code == 'ftr_po' ? 'border-r-2 border-l-2 border-[#EDF3FA]' : ''}`}>
							<img
								src={value}
								alt={description}
								className='w-[32px] h-[32px]'
							/>
							<p className='pt-2 text-base font-medium'>{description}</p>
						</div>
					))}
			</div>
			{/* end Features */}

			<div className='py-6 px-4 md:pt-14 md:pb-6 md:px-[32px]'>
				<h2 className='text-[#1C4682] text-[20px] md:text-[28px] font-semibold'>Our Lineups</h2>
				<div className='w-[50px] md:w-[90px] h-1 mt-1 bg-[#D7E1ED]'></div>
			</div>

			<CarListCarousel
				setPage={setPage}
				setCarID={setCarID}
			/>

			{/* Button Buy and test drive */}
			<div className='pt-[32px] pb-[48px] md:pt-[48px] md:pb-[54px] px-4 flex flex-col md:flex-row items-center md:justify-center gap-4 md:gap-8'>
				<button className='bg-[#1C4682] hover:bg-[#183e72] w-full max-w-[288px] md:max-w-[336px] py-[14px] md:py-4 rounded-lg text-white text-[16px] md:text-[18px] font-medium md:order-2 shadow-lg'>BUY ME</button>
				<button className='w-full max-w-[288px] md:max-w-[336px] py-[14px] md:py-4 bg-[#EDF3FA] hover:bg-[#e1e8f0] rounded-lg text-[#1C4682] text-[16px] md:text-[18px] md:order-1'>TEST DRIVE</button>
			</div>
			{/* Button Buy and test drive */}
		</div>
	);
};

export default Lineups;
