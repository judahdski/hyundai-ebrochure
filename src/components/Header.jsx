import React, { useState } from 'react';
import headerLogo from '../assets/img/hyundai-logo-header.png';
import { generalCode } from '../assets/data/generalCodes';
import { Button, Modal } from 'flowbite-react';

const Header = ({ setPage, page }) => {
	const [openModal, setOpenModal] = useState(false);

	return (
		<div className='text-white md:h-[72px] h-[68px] bg-[#1C4682] flex justify-between px-[20px] md:px-[68px]'>
			<img
				src={headerLogo}
				alt='Hyundai Logo'
			/>

			<div
				className='pr-[12px] flex items-center text-base md:hidden'
				onClick={() => setOpenModal(true)}>
				<i class='fa-solid fa-bars'></i>
			</div>

			<Modal
				dismissible
				show={openModal}
				onClose={() => setOpenModal(false)}>
				<Modal.Body>
					<div className='space-y-6'>
						{generalCode
							.filter((item) => item.category == 'screen')
							.map(({ code, description }, index) => (
								<div
									key={index}
									className='p-4 w-full rounded-2xl border border-slate-100 flex justify-center tracking-wide'
									onClick={() => {
										setOpenModal(false);
										setPage(code);
									}}>
									{description}
								</div>
							))}
					</div>
				</Modal.Body>
				<Modal.Footer>
					<div className='w-full flex flex-col gap-4'>
						<p className='font-medium text-center pb-2'>Layanan Kami</p>
						{generalCode
							.filter((item) => item.category == 'feature')
							.map(({ code, description, value }) => (
								<div className='px-6 py-4 w-full flex items-center justify-center gap-4'>
									<img
										src={value}
										alt={description}
										className='w-[24px] h-[24px]'
									/>
									<p className='text-sm font-medium'>{description}</p>
								</div>
							))}
					</div>
				</Modal.Footer>
			</Modal>

			<div className='hidden md:flex items-center'>
				{generalCode
					.filter((item) => item.category == 'screen')
					.map(({ code, description }, index) => (
						<p
							key={index}
							className={`px-[36px] py-2 tracking-wide cursor-pointer ${page == code ? 'font-medium' : 'text-slate-200'}`}
							onClick={() => setPage(code)}>
							{description}
						</p>
					))}
			</div>
		</div>
	);
};

export default Header;
