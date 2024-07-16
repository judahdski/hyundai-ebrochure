import { Dropdown } from 'flowbite-react';
import React, { useState } from 'react';
import { ioniq6PriceTemp } from '../../../assets/img/temp';

const SubPrice = ({ carID }) => {
	const [carVariant, setCarVariant] = useState(null);

	return (
		<div className='py-6 px-4 md:py-[56px] md:px-[72px] flex flex-col gap-[56px]'>
			<div className='flex flex-col md:flex-row md:items-center gap-2 md:gap-6'>
				<p className='text-[14px] md:text-base font-medium'>Pilih varian</p>

				<Dropdown
					label=''
					dismissOnClick={true}
					renderTrigger={() => <div className='flex-1 py-2 px-4 rounded-lg border border-[#CFCFCF] hover:bg-slate-50 cursor-pointer'>{carVariant ?? 'Silahkan pilih varian mobil..'}</div>}
					className='lg:w-3/4'>
					<Dropdown.Item onClick={() => setCarVariant('Dashboard')}>Dashboard</Dropdown.Item>
					<Dropdown.Item onClick={() => setCarVariant('Settings')}>Settings</Dropdown.Item>
					<Dropdown.Item onClick={() => setCarVariant('Earnings')}>Earnings</Dropdown.Item>
					<Dropdown.Item onClick={() => setCarVariant('Sign out')}>Sign out</Dropdown.Item>
				</Dropdown>
			</div>

			<div className='flex flex-col xl:flex-row gap-[32px] xl:gap-[56px] items-center'>
				<img
					src={ioniq6PriceTemp}
					alt=''
					className='xl:w-1/2'
				/>
				<div className='xl:w-1/2'>
					<p className='text-[28px] xl:text-[32px] text-[#505153] font-medium mb-4'>Ioniq 6 VARIAN DELTA</p>
					<p>
						Total Price <span className='text-[20px] xl:text-[28px] text-[#1C4682] font-medium'>Rp.900,000,000</span>
					</p>
				</div>
			</div>

			{/* Button Buy and test drive */}
			<div className='pt-0 px-4 flex flex-col md:flex-row items-center md:justify-center gap-4 md:gap-8'>
				<button className='bg-[#1C4682] hover:bg-[#183e72] w-full max-w-[288px] md:max-w-[336px] py-[14px] md:py-4 rounded-lg text-white text-[16px] md:text-[18px] font-medium md:order-2 shadow-lg'>BUY ME</button>
				<button className='w-full max-w-[288px] md:max-w-[336px] py-[14px] md:py-4 bg-[#EDF3FA] hover:bg-[#e1e8f0] rounded-lg text-[#1C4682] text-[16px] md:text-[18px] md:order-1'>TEST DRIVE</button>
			</div>
			{/* Button Buy and test drive */}
		</div>
	);
};

export default SubPrice;
