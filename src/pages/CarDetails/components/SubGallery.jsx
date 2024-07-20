import React, { useState } from 'react';
import { ioniq6ColorPick, ioniq6EksteriorOverview, ioniq6GalleryMain, ioniq6InteriorOverview } from '../../../assets/img/temp/index';
import { cretaBanner, ioniq6Banner, ioniq5Banner, palisadeBanner, stariaBanner, santaFeBanner, stargazerBanner, stargazerXBanner } from '../../../assets/img/banner/index';

const SubGallery = ({ carID }) => {
	const imgGallery = [cretaBanner, ioniq6Banner, ioniq5Banner, palisadeBanner, stariaBanner, santaFeBanner, stargazerBanner, stargazerXBanner];
	const [eksteriorOpen, setEksteriorOpen] = useState(false);
	const [interiorOpen, setInteriorOpen] = useState(false);

	return (
		<div className='p-4 md:p-[72px] pt-6 md:pt-[48px] flex flex-col gap-[36px] md:gap-[72px]'>
			<div className='flex flex-col items-center gap-2 md:gap-[32px]'>
				<img
					src={ioniq6ColorPick}
					alt='Ioniq 6'
					className='w-full max-w-[1000px]'
				/>
				<div className='w-full flex flex-col md:flex-row gap-4 md:gap-[80px]'>
					<div className='flex flex-col gap-2 md:gap-4'>
						<p className='text-base md:text-2xl text-[#7C7C7C] font-medium'>Warna</p>
						<p className='text-lg md:text-2xl font-semibold'>Biophilic Blue Pearl</p>
					</div>
					<div className='flex gap-6'>
						<div className='h-[48px] md:h-full aspect-square bg-black rounded-xl md:rounded-2xl cursor-pointer'></div>
						<div className='h-[48px] md:h-full aspect-square bg-red-500 rounded-xl md:rounded-2xl cursor-pointer'></div>
						<div className='h-[48px] md:h-full aspect-square bg-blue-600 rounded-xl md:rounded-2xl cursor-pointer'></div>
					</div>
				</div>
			</div>
			<div className='flex flex-col gap-4 md:gap-8'>
				<h3 className='text-xl md:text-[32px] text-center font-medium'>Electrified streamliner.</h3>
				<p className='text-sm md:text-base text-center'>
					Perpaduan estetik dan fungsional yang menyatu secara harmonis dalam IONIQ 6 yang membentuk siluet aerodinamis dapat mengurangi hambatan udara, sehingga berkendara lebih halus dan dinamis.
				</p>
				<img
					className='rounded-lg'
					src={ioniq6GalleryMain}
					alt='Ioniq 6'
				/>
			</div>
			<div className='flex flex-col gap-4 md:gap-8'>
				<div onClick={() => setEksteriorOpen(!eksteriorOpen)}>
					<div className='w-full h-[56px] md:h-[154px] rounded-lg md:rounded-2xl relative'>
						<img
							src={ioniq6EksteriorOverview}
							alt='Ioniq 6 Eksterior Overview'
						/>
						<p className='absolute inset-y-0 w-full flex justify-center items-center text-base md:text-[32px] text-white tracking-wide font-bold cursor-pointer'>Eksterior</p>
					</div>
					{eksteriorOpen ? (
						<div className='-mt-4 p-5 md:-mt-6 pt-6 md:pt-12 md:p-8 h-[160px] md:h-[330px] bg-[#1C4682]/[.08] border-[1px] border-[#1C4682]/[.48] rounded-lg flex gap-6 md:ap-8 overflow-y-scroll'>
							{imgGallery.map((row) => (
								<img
									className='rounded-lg'
									src={row}
									alt='asdf11'
								/>
							))}
						</div>
					) : (
						<></>
					)}
				</div>

				<div onClick={() => setInteriorOpen(!interiorOpen)}>
					<div className='w-full h-[56px] md:h-[154px] rounded-lg md:rounded-2xl relative'>
						<img
							src={ioniq6InteriorOverview}
							alt='Ioniq 6 Interior Overview'
						/>
						<p className='absolute inset-y-0 w-full flex justify-center items-center text-base md:text-[32px] text-white tracking-wide font-bold cursor-pointer'>Interior</p>
					</div>
					{interiorOpen ? (
						<div className='-mt-4 p-5 md:-mt-6 pt-6 md:pt-12 md:p-8 h-[160px] md:h-[330px] bg-[#1C4682]/[.08] border-[1px] border-[#1C4682]/[.48] rounded-lg flex gap-6 md:ap-8 overflow-y-scroll'>
							{imgGallery.map((row) => (
								<img
									className='rounded-lg'
									src={row}
									alt='asdf11'
								/>
							))}
						</div>
					) : (
						<></>
					)}
				</div>
			</div>
		</div>
	);
};

export default SubGallery;
