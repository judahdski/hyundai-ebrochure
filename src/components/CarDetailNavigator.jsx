import React from 'react';

const CarDetailNavigator = ({ carDetailSection, setCarDetailSection }) => {
	const navigatorList = [
		{ index: 0, code: 'highlight', title: 'HIGHLIGHT', isLast: false },
		{ index: 1, code: 'gallery', title: 'GALLERY', isLast: false },
		{ index: 2, code: 'price', title: 'PRICE', isLast: false },
		{ index: 3, code: 'full_spec', title: 'FULL SPEC', isLast: true },
	];
	const { innerWidth: screenWidth } = window;

	return screenWidth > 768 ? (
		<div className='px-4'>
			<div className='bg-white -mt-[27px] w-full flex justify-stretch rounded-[12px] overflow-hidden shadow-md'>
				{navigatorList.map(({ code, title, isLast }) => (
					<div
						className={`p-4 text-center tracking-[3px] ${carDetailSection == code ? ' text-[18px] text-[#1C4682] font-medium' : 'text-black'} flex-1 flex justify-center items-center  border-r-2 ${
							!isLast ? 'border-[#EDF3FA]' : ''
						} cursor-pointer hover:bg-slate-50`}
						onClick={() => setCarDetailSection('highlight')}>
						{title}
					</div>
				))}
			</div>
		</div>
	) : (
		<div className='-mt-[27px] px-2 w-full'>
			<div className='bg-white px-4 py-[14px] flex justify-center rounded-[12px] overflow-hidden shadow-md font-medium text-center tracking-[3px]'>{carDetailSection}</div>
		</div>
	);
};

export default CarDetailNavigator;
