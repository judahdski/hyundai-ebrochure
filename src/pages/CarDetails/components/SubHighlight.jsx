import React from 'react';
import { cretaDetail } from '../../../assets/data/car_detail_list/cretaDetail';

const SubHighlight = ({ carID }) => {
	//#region Get data
	const getHighlights = () => cretaDetail.sections.highlights;
	//#endregion

	return (
		<div className='px-4 py-8 md:p-[72px] flex flex-col gap-8 md:gap-[72px]'>
			{getHighlights().map(({ code, title, body, images }) => (
				<div
					key={code}
					className='flex flex-col gap-6 md:gap-8 md:items-center'>
					<h3 className='text-[22px] md:text-[32px] font-medium'>{title}</h3>
					<p className='text-sm md:text-base leading-6'>{body}</p>
					{images.map((imgPath) => (
						<img
							src={imgPath}
							alt=''
						/>
					))}
				</div>
			))}
		</div>
	);
};

export default SubHighlight;
