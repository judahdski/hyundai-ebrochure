import { Dropdown } from 'flowbite-react';
import React, { useState } from 'react';
import { ioniq6PriceTemp } from '../../../assets/img/temp';
import { WAButton } from '../../../components/WAButton';
import { cretaDetail } from '../../../assets/data/car_detail_list/cretaDetail';

const SubPrice = ({ carID }) => {
	// #region UseState
	const [carVariant, setCarVariant] = useState({ model: null, price: null });
	// #endregion UseState

	//#region Get data
	const getPriceList = () => cretaDetail.sections.priceList;
	//#endregion

	return (
		<div className='py-6 px-4 md:py-[56px] md:px-[72px] flex flex-col gap-[56px]'>
			<div className='flex flex-col md:flex-row md:items-center gap-2 md:gap-6'>
				<p className='text-[14px] md:text-base font-medium'>Pilih varian</p>

				<Dropdown
					label=''
					dismissOnClick={true}
					renderTrigger={() => <div className='flex-1 py-2 px-4 rounded-lg border border-[#CFCFCF] hover:bg-slate-50 cursor-pointer'>{carVariant.model ?? 'Silahkan pilih varian mobil..'}</div>}
					className='lg:w-3/4'>
					{getPriceList().map(({ model, price }, index) => (
						<Dropdown.Item
							key={index}
							onClick={() => setCarVariant({ model, price })}>
							{model}
						</Dropdown.Item>
					))}
				</Dropdown>
			</div>

			{carVariant.model ? (
				<div className='flex flex-col xl:flex-row gap-[32px] xl:gap-[56px] items-center'>
					<img
						src={ioniq6PriceTemp}
						alt=''
						className='xl:w-1/2'
					/>
					<div className='xl:w-1/2 flex flex-col items-center'>
						<p className='text-[28px] xl:text-[32px] text-[#505153] text-center font-medium mb-4'>{carVariant.model}</p>
						<p>
							Total Price <span className='text-[20px] xl:text-[28px] text-[#1C4682] font-medium'>{carVariant.price}</span>
						</p>
					</div>
				</div>
			) : (
				<></>
			)}

			{/* Button Buy and test drive */}
			<div className='w-full px-4 pt-[32px] pb-[48px] md:pt-[48px] md:pb-[54px] flex flex-col md:flex-row items-center md:justify-center gap-4 md:gap-8'>
				<WAButton
					customClassName={'w-[288px] px-3 py-[14px] md:py-4 bg-[#1C4682] hover:bg-[#194075] rounded-lg text-base text-white text-center tracking-wider font-semibold md:order-2'}
					content={<>BUY ME</>}
					waMessage={'Halo, saya ingin berbicara dengan sales untuk konsultasi mengenai mobil Hyundai. Bisa bantu saya menghubungi sales? Terima kasih.'}
				/>

				<WAButton
					customClassName={'w-[288px] px-3 py-[14px] md:py-4 bg-[#EDF3FA] hover:bg-[#e1e8f0] rounded-lg text-base text-[#1C4682] text-center tracking-wider font-semibold md:font-medium md:order-1'}
					content={<>TEST DRIVE</>}
					waMessage={'Halo, saya ingin menjadwalkan test drive. Apakah ada waktu yang tersedia? Terima kasih.'}
				/>
			</div>
			{/* Button Buy and test drive */}
		</div>
	);
};

export default SubPrice;
