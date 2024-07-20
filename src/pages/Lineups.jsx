import React from 'react';
import { CarListCarousel } from '../components/CarListCarousel';
import { generalCode } from '../assets/data/generalCodes';
import { WAButton } from '../components/WAButton';

const Lineups = ({ setPage, setCarID }) => {
	return (
		<div className='w-full max-w-[1280px]'>
			{/* Features */}
			<div className='hidden md:flex -mt-[47px] rounded-2xl shadow overflow-hidden'>
				{generalCode
					.filter((item) => item.category == 'feature')
					.map(({ code, description, value }, index) => (
						<WAButton
							key={index}
							customClassName={`w-full bg-white py-4 flex flex-col items-center  ${code == 'ftr_po' ? 'border-r-2 border-l-2 border-[#EDF3FA]' : ''}`}
							content={
								<>
									<img
										src={value}
										alt={description}
										className='w-[32px] h-[32px]'
									/>
									<p className='pt-2 text-base font-medium'>{description}</p>
								</>
							}
							waMessage={''}
						/>
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
			<div className='w-full px-4 pt-[32px] pb-[48px] md:pt-[48px] md:pb-[54px] flex flex-col md:flex-row items-center md:justify-center gap-4 md:gap-8'>
				<WAButton
					customClassName={'w-[288px] px-3 py-[14px] md:py-4 bg-[#1C4682] hover:bg-[#194075] rounded-lg text-base text-white text-center tracking-wider font-semibold md:order-2'}
					content={<>BUY ME</>}
					waMessage={'Halo, saya ingin berbicara dengan sales untuk konsultasi mengenai mobil Hyundai. Bisa bantu saya menghubungi sales? Terima kasih.'}
				/>

				<WAButton
					customClassName={'w-[288px] px-3 py-[14px] md:py-4 bg-[#EDF3FA] hover:bg-[#e1e8f0] rounded-lg text-base text-[#1C4682] text-center tracking-wider font-semibold md:font-medium md:order-1'}
					content={<>TEST DRIVE</>}
					waMessage={'Halo, saya ingin menjadwalkan test drive. Apakah ada waktu yang tersedia? Terima kasih.'}
				/>
			</div>
			{/* Button Buy and test drive */}
		</div>
	);
};

export default Lineups;
