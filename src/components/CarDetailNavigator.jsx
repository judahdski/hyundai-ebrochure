import React from 'react';

const CarDetailNavigator = ({ carDetailSection, setCarDetailSection }) => {
	const navigatorList = [
		{ code: 'highlight', title: 'HIGHLIGHT', isLast: false },
		{ code: 'gallery', title: 'GALLERY', isLast: false },
		{ code: 'price', title: 'PRICE', isLast: false },
		{ code: 'full_spec', title: 'FULL SPEC', isLast: true },
	];

	return (
		<div className='bg-white -mt-[27px] w-full flex justify-stretch rounded-[12px] overflow-hidden shadow-md'>
			{navigatorList.map(({ code, title, isLast }) => (
				<div
					className={`p-4 text-center tracking-[3px] ${carDetailSection == code ? ' text-[18px] text-[#1C4682] font-medium' : 'text-black'} flex-1 flex justify-center items-center  border-r-2 ${
						!isLast ? 'border-[#EDF3FA]' : ''
					} cursor-pointer hover:bg-slate-50`}
					onClick={() => setCarDetailSection(code)}>
					{title}
				</div>
			))}
		</div>
	);
};

export default CarDetailNavigator;
