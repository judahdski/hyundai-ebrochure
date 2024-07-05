import React from 'react';
import headerLogo from '../assets/img/hyundai-logo-header.png';
import { generalCode } from '../assets/data/generalCodes';

const Header = ({ setPage, page }) => {
	return (
		<div className='text-white md:h-[72px] h-[68px] bg-[#1C4682] flex justify-between px-[20px] md:px-[68px]'>
			<img
				src={headerLogo}
				alt='Hyundai Logo'
			/>

			<div
				className='pr-[12px] flex items-center text-base md:hidden'
				onClick={() => {
					console.log('hellooo');
				}}>
				<i class='fa-solid fa-bars'></i>
			</div>

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
