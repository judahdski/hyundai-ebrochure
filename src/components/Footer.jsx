import React from 'react';
import footerLogo from '../assets/img/hyundai-logo-footer.png';

const Footer = ({ isContactPage }) => {
	return isContactPage ? (
		<div className='flex'>
			<div className='py-[48px] md:py-[72px] w-full flex  items-center justify-center'>
				<img
					src={footerLogo}
					alt='Hyundai Footer Logo'
				/>
			</div>
		</div>
	) : (
		<div className='flex flex-col md:flex-row'>
			<div className='p-8 md:p-12 flex flex-col gap-4 md:order-2 md:w-1/2'>
				<p className='text-sm text-[#676767] font-semibold'>Contact Us :</p>
				<div className='flex flex-col gap-1'>
					<p className='text-4xl font-semibold'>Renaldy</p>
					<p className='text-sm md:text-base text-[#3F3E3E] font-medium'>Senior Hyundai Consultant</p>
					<p className='text-sm md:text-base font-medium pt-1'>Dealer Resmi Hyundai</p>
				</div>

				<div className='flex flex-col gap-[10px]'>
					<div className='flex items-center gap-2'>
						<i class='fa-brands fa-whatsapp text-[#16C907]'></i>
						<p className='text-sm md:text-base font-medium'>(+62) 813 123456789</p>
					</div>
					<div className='flex items-center gap-2'>
						<i class='fa-brands fa-instagram text-[#FF0C9E]'></i>
						<p className='text-sm md:text-base font-medium'>@ig_account_dummy</p>
					</div>
				</div>
			</div>

			<div className='py-[72px] md:py-[112px] flex justify-center md:order-1 md:w-1/2'>
				<img
					src={footerLogo}
					alt='Hyundai Footer Logo'
				/>
			</div>
		</div>
	);
};

export default Footer;
