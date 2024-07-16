import React from 'react';
import { ioniq6ColorPick, ioniq6EksteriorOverview, ioniq6GalleryMain, ioniq6InteriorOverview } from '../../../assets/img/temp/index';

const SubGallery = ({ carID }) => {
	return (
		<div className='p-[72px] pt-[48px] flex flex-col gap-[72px]'>
			<div className='flex flex-col items-center gap-[32px]'>
				<img
					src={ioniq6ColorPick}
					alt='Ioniq 6'
					className='w-full max-w-[1000px]'
				/>
				<div className='w-full flex gap-[80px]'>
					<div className='flex flex-col gap-4'>
						<p className='text-2xl text-[#7C7C7C] font-medium'>Warna</p>
						<p className='text-2xl font-semibold'>Biophilic Blue Pearl</p>
					</div>
					<div className='flex gap-6'>
						<div className='h-full aspect-square bg-black rounded-2xl cursor-pointer'></div>
						<div className='h-full aspect-square bg-red-500 rounded-2xl cursor-pointer'></div>
						<div className='h-full aspect-square bg-blue-600 rounded-2xl cursor-pointer'></div>
					</div>
				</div>
			</div>
			<div className='flex flex-col gap-8'>
				<h3 className='text-[32px] text-center font-medium'>Electrified streamliner.</h3>
				<p className='text-center'>Perpaduan estetik dan fungsional yang menyatu secara harmonis dalam IONIQ 6 yang membentuk siluet aerodinamis dapat mengurangi hambatan udara, sehingga berkendara lebih halus dan dinamis.</p>
				<img
					src={ioniq6GalleryMain}
					alt='Ioniq 6'
				/>
			</div>
			<div className='flex flex-col gap-8'>
				<div className='w-full h-[154px] rounded-2xl relative'>
					<img
						src={ioniq6EksteriorOverview}
						alt='Ioniq 6 Eksterior Overview'
					/>
					<p className='absolute inset-y-0 w-full flex justify-center items-center text-[32px] text-white tracking-wide font-bold cursor-pointer'>Eksterior</p>
				</div>
				<div className='w-full h-[154px] rounded-2xl relative'>
					<img
						src={ioniq6InteriorOverview}
						alt='Ioniq 6 Interior Overview'
					/>
					<p className='absolute inset-y-0 w-full flex justify-center items-center text-[32px] text-white tracking-wide font-bold cursor-pointer'>Interior</p>
				</div>
			</div>
		</div>
	);
};

export default SubGallery;
