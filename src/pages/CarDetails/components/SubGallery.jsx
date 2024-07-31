import React, { useState } from 'react';
import { ioniq6InteriorOverview, ioniq6ExteriorOverview } from '../../../assets/img/temp/index';
import { carDetails } from '../../../assets/data/carDetails';
import { Spinner } from 'flowbite-react';
import HeDropdown from '../../../components/HeDropdown';

const SubGallery = ({ carID }) => {
	// #region Component State
	const [exteriorOpen, setexteriorOpen] = useState(false);
	const [interiorOpen, setInteriorOpen] = useState(false);
	const [isLoading, setIsLoading] = useState(true);
	// #endregion Component State

	//  #region Data State
	const [selectedColor, setSelectedColor] = useState({
		image: null,
		colorName: null,
	});
	const [colors, setColors] = useState(null);
	const [selectedModel, setSelectedModel] = useState(null);
	// #endregion Data State

	//#region Get data
	const carDetail = () => carDetails.filter((row) => row.id == carID)[0].carDetail;

	const getVariants = () => carDetail().variants;
	const getGallery = () => carDetail().sections.gallery;

	const articles = getGallery().articles;
	const exteriors = getGallery().exteriors;
	const interiors = getGallery().interiors;
	//#endregion

	const dropdownItems = getVariants().map(({ model, type }) => {
		const colorsTemp = getGallery().colors.filter((row) => row.variant == type)[0].variantColors;

		return {
			description: model,
			onClick: () => {
				const { carImage, name } = colorsTemp[0];

				setSelectedColor({
					image: carImage,
					colorName: name,
				});

				setColors(colorsTemp);

				setSelectedModel(model);
			},
		};
	});

	return (
		<div className='p-4 md:p-[72px] pt-6 md:pt-[48px] flex flex-col gap-[36px] md:gap-[72px]'>
			<HeDropdown
				ActiveText={selectedModel ?? 'Silahkan pilih varian...'}
				DropdownItems={dropdownItems}
			/>

			{/* #region Color Picks */}
			{colors ? (
				<div className='flex flex-col items-center gap-2 md:gap-[32px]'>
					{selectedColor.colorName ? (
						<img
							src={selectedColor.image}
							alt='Ioniq 6'
							className='w-full max-w-[1000px]'
						/>
					) : (
						<p>Silahkan pilih warna</p>
					)}
					<div className='w-full flex flex-col md:flex-row gap-4 md:gap-[80px]'>
						<div className='md:w-[20%] flex flex-col gap-2 md:gap-4'>
							<p className='text-base md:text-2xl text-[#7C7C7C] font-medium'>Warna</p>
							<p className='text-lg md:text-2xl font-semibold'>{selectedColor.colorName}</p>
						</div>
						<div className='md:w-[80%] flex gap-6 overflow-y-scroll'>
							{colors.map(({ hexImage, name, carImage }, index) => (
								<img
									key={index}
									className={`h-[48px] lg:h-[74px] aspect-square rounded-xl md:rounded-2xl cursor-pointer border-[3px] border-blue-950/[.2] shadow`}
									src={hexImage}
									onClick={() => setSelectedColor({ image: carImage, colorName: name })}
								/>
							))}
						</div>
					</div>
				</div>
			) : (
				<></>
			)}
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
							alt='Exterior Overview'
						/>
						<p className='absolute inset-y-0 w-full flex justify-center items-center text-base md:text-[32px] text-white tracking-wide font-bold cursor-pointer'>Exterior</p>
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

				<div
					onClick={() => {
						setInteriorOpen(!interiorOpen);

						setTimeout(() => {
							setIsLoading(!isLoading);
						}, 300);
					}}>
					<div className='w-full h-[56px] md:h-[154px] rounded-lg md:rounded-2xl relative'>
						<img
							src={ioniq6InteriorOverview}
							alt='Interior Overview'
						/>
						<p className='absolute inset-y-0 w-full flex justify-center items-center text-base md:text-[32px] text-white tracking-wide font-bold cursor-pointer'>Interior</p>
					</div>

					{interiorOpen ? (
						<div className='-mt-4 p-5 md:-mt-6 pt-6 md:pt-12 md:p-8 h-[160px] md:h-[330px] bg-[#1C4682]/[.08] border-[1px] border-[#1C4682]/[.48] rounded-lg flex gap-6 md:ap-8 overflow-y-scroll'>
							{isLoading ? (
								<div className='w-full h-full flex justify-center items-center'>
									<Spinner
										color='info'
										aria-label='Info spinner example'
										size='lg'
									/>
								</div>
							) : (
								interiors.map(({ caption, image }, index) => (
									<img
										key={index}
										className='rounded-lg'
										src={image}
										alt={caption}
									/>
								))
							)}
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
