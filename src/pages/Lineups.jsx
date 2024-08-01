import React from 'react';
import { CarListCarousel } from '../components/CarListCarousel';
import { generalCode } from '../assets/data/generalCodes';
import { WAButton } from '../components/WAButton';
import { salesProfile } from '../assets/data/salesProfile';

const Lineups = ({ setPage, setCarID }) => {
	// Always set localStorage carID to null
	localStorage.setItem('carID', null);

	return (
		<div className='w-full max-w-[1280px]'>
			{/* Features */}
			<div className='hidden md:flex mx-4 -mt-[47px] rounded-2xl shadow overflow-hidden'>
				{generalCode
					.filter((item) => item.category == 'feature')
					.map(({ code, description, value, message }, index) => (
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
							waMessage={message ?? 'Halo mas, saya ingin '}
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

			<div className='flex flex-col md:flex-row'>
				<div className='md:flex-1 bg-[#FFA1A1] p-12 flex flex-col justify-center items-center gap-8'>
					<div className='flex flex-col gap-3'>
						<p className='font-medium text-xl md:text-2xl text-center text-white'>Masih Bingung Memilih Mobil Hyundai?</p>
						<p className='text-sm md:text-base text-center text-white'>Hubungi Kami dan Dapatkan Konsultasi Gratis dari Tim Kami!</p>
					</div>
					<div className='flex flex-col md:flex-row items-center gap-4'>
						<div className='bg-transparent px-4 py-3.5 w-[240px] flex justify-center items-center gap-3.5 border-2 border-white rounded-lg text-white'>
							<i class='fa-brands fa-whatsapp text-lg'></i>
							<p className='text-sm'>0813 1234 56789</p>
						</div>
						<div className='bg-transparent px-4 py-3.5 w-[240px] flex justify-center items-center gap-3.5 border-2 border-white rounded-lg text-white'>
							<i class='fa-brands fa-instagram text-lg'></i>
							<p className='text-sm'>@ig_account_dummy</p>
						</div>
					</div>
				</div>

				<div className='md:flex-1 px-4 py-12 flex flex-col items-center gap-6 border-t-4 border-b-2 border-[#1C4682]'>
					<div className='bg-[#E7E7E7] w-[320px] md:w-[480px] aspect-square rounded-2xl flex justify-center items-center overflow-hidden'>
						<img
							src={salesProfile.images[0].path}
							alt={salesProfile.images[0].alt}
						/>
					</div>
					<div className='text-center flex flex-col gap-2'>
						<h2 className='font-semibold text-3xl'>{salesProfile.fullName}</h2>
						<p className='text-sm md:text-base'>{salesProfile.role}</p>
						<p className='font-medium text-sm md:text-base'>Dealer Resmi Hyundai</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Lineups;
