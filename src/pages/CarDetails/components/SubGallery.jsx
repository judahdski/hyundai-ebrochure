import React, { useState } from 'react';
import { ioniq6InteriorOverview, ioniq6ExteriorOverview } from '../../../assets/img/temp/index';
import { cretaDetail } from '../../../assets/data/car_detail_list/cretaDetail';

const SubGallery = ({ carID }) => {
	// #region UseState
	const [exteriorOpen, setexteriorOpen] = useState(false);
	const [interiorOpen, setInteriorOpen] = useState(false);
	const [colorPickObj, setColorPickObj] = useState({ image: null, colorName: null });
	// #endregion UseState

	//#region Get data
	const getGallery = () => cretaDetail.sections.gallery;
	const colors = getGallery().colors;
	const articles = getGallery().articles;
	const exteriors = getGallery().exteriors;
	const interiors = getGallery().interiors;
	//#endregion

	return (
		<div className='p-4 md:p-[72px] pt-6 md:pt-[48px] flex flex-col gap-[36px] md:gap-[72px]'>
			{/* #region Color Picks */}
			<div className='flex flex-col items-center gap-2 md:gap-[32px]'>
				{colorPickObj.colorName ? (
					<img
						src={colorPickObj.image}
						alt='Ioniq 6'
						className='w-full max-w-[1000px]'
					/>
				) : (
					<p>Silahkan Pilih warna</p>
				)}
				<div className='w-full flex flex-col md:flex-row gap-4 md:gap-[80px]'>
					<div className='flex flex-col gap-2 md:gap-4'>
						<p className='text-base md:text-2xl text-[#7C7C7C] font-medium'>Warna</p>
						<p className='text-lg md:text-2xl font-semibold'>{colorPickObj.colorName}</p>
					</div>
					<div className='flex gap-6'>
						{colors.map(({ hexImage, name, carImage }) => (
							<img
								className={`h-[48px] md:h-full aspect-square rounded-xl md:rounded-2xl cursor-pointer border-[3px] border-blue-950/[.2] shadow`}
								src={hexImage}
								onClick={() => setColorPickObj({ image: carImage, colorName: name })}
							/>
						))}
					</div>
				</div>
			</div>
			{/* #endregion Color Picks */}

			{/* #region Articles */}
			<div className='flex flex-col gap-4 md:gap-8'>
				{articles.map(({ title, body, images }) => (
					<>
						<h3 className='text-xl md:text-[32px] text-center font-medium'>{title}</h3>
						<p className='text-sm md:text-base text-center'>{body}</p>
						{images.map((image, index) => (
							<img
								key={index}
								className='rounded-lg'
								src={image}
								alt='Ioniq 6'
							/>
						))}
					</>
				))}
			</div>
			{/* #endregion Articles */}

			{/* #region Exteriors & Interiors */}
			<div className='flex flex-col gap-4 md:gap-8'>
				<div onClick={() => setexteriorOpen(!exteriorOpen)}>
					<div className='w-full h-[56px] md:h-[154px] rounded-lg md:rounded-2xl relative'>
						<img
							src={ioniq6ExteriorOverview}
							alt='Ioniq 6 exterior Overview'
						/>
						<p className='absolute inset-y-0 w-full flex justify-center items-center text-base md:text-[32px] text-white tracking-wide font-bold cursor-pointer'>exterior</p>
					</div>
					{exteriorOpen ? (
						<div className='-mt-4 p-5 md:-mt-6 pt-6 md:pt-12 md:p-8 h-[160px] md:h-[330px] bg-[#1C4682]/[.08] border-[1px] border-[#1C4682]/[.48] rounded-lg flex gap-6 md:ap-8 overflow-y-scroll'>
							{exteriors.map(({ caption, image }, index) => (
								<img
									key={index}
									className='rounded-lg'
									src={image}
									alt={caption}
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
							{interiors.map(({ caption, image }, index) => (
								<img
									key={index}
									className='rounded-lg'
									src={image}
									alt={caption}
								/>
							))}
						</div>
					) : (
						<></>
					)}
				</div>
			</div>
			{/* #endregion Exteriors & Interiors */}
		</div>
	);
};

export default SubGallery;
