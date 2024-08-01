import React from 'react';
import footerLogo from '../assets/img/hyundai-logo-footer.png';

const Footer = () => {
	return (
		<div className='flex'>
			<div className='w-full h-[160px] md:h-[180px] py-[48px] md:py-[72px] flex items-center justify-center border-b-[8px] md:border-b-[10px] border-[#BDD2EA]'>
				<img
					src={footerLogo}
					alt='Hyundai Footer Logo'
				/>
			</div>
		</div>
	);
};

export default Footer;
