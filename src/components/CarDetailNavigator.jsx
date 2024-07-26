import { Modal } from 'flowbite-react';
import React, { useState } from 'react';

const CarDetailNavigator = ({ carDetailSection, setCarDetailSection }) => {
	const [openModal, setOpenModal] = useState(false);

	const navigatorList = [
		{ index: 0, code: 'highlight', title: 'HIGHLIGHT', isLast: false },
		{ index: 1, code: 'gallery', title: 'GALLERY', isLast: false },
		{ index: 2, code: 'price', title: 'PRICE', isLast: false },
		{ index: 3, code: 'full_spec', title: 'FULL SPEC', isLast: true },
	];
	const { innerWidth: screenWidth } = window;

	return screenWidth > 980 ? (
		<div className='-mt-[27px] px-4 w-full'>
			<div className='bg-white w-full flex justify-stretch rounded-[12px] overflow-hidden shadow-md'>
				{navigatorList.map(({ code, title, isLast }, index) => (
					<div
						key={index}
						className={`p-4 text-center tracking-[3px] ${carDetailSection == code ? ' text-[18px] text-[#1C4682] font-medium' : 'text-black'} flex-1 flex justify-center items-center  border-r-2 ${
							!isLast ? 'border-[#EDF3FA]' : ''
						} cursor-pointer hover:bg-slate-50`}
						onClick={() => setCarDetailSection(code)}>
						{title}
					</div>
				))}
			</div>
		</div>
	) : (
		<>
			<div className='-mt-[27px] px-2 w-full'>
				<div
					className='bg-white px-4 py-[14px] flex justify-center rounded-[12px] overflow-hidden shadow-md font-medium text-center tracking-[3px] cursor-pointer'
					onClick={() => setOpenModal(true)}>
					{navigatorList.filter((row) => row.code == carDetailSection)[0].title}
				</div>
			</div>

			<Modal
				show={openModal}
				onClose={() => setOpenModal(false)}>
				<Modal.Body>
					<div className='space-y-6'>
						{navigatorList.map(({ code, title }, index) => (
							<div
								key={index}
								className='p-5 w-full rounded-2xl bg-white border-[1px] border-[#1C4682] flex justify-center text-[#1C4682] font-medium tracking-[6px] cursor-pointer'
								onClick={() => {
									setCarDetailSection(code);
									setOpenModal(false);
								}}>
								{title.toUpperCase()}
							</div>
						))}
					</div>
				</Modal.Body>
			</Modal>
		</>
	);
};

export default CarDetailNavigator;
