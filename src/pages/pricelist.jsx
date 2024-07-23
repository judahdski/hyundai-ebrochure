import React from 'react';

import { carPricelist } from '../assets/data/carPricelist';
import { generalCode } from '../assets/data/generalCodes';
import { WAButton } from '../components/WAButton';
import { Carousel, Table } from 'flowbite-react';
import { cretaMD, palisadeMD } from '../assets/img/main_display/index';
import { ioniq6ColorPick } from '../assets/img/temp/index';

const Pricelist = () => {
	return (
		<div className='w-full max-w-[1280px]'>
			{/* Features */}
			<div className='hidden md:flex mx-4 -mt-[47px] rounded-2xl shadow overflow-hidden'>
				{generalCode
					.filter((item) => item.category == 'feature')
					.map(({ code, description, value }, index) => (
						<WAButton
							key={index}
							customClassName={`w-full bg-white py-4 flex flex-col items-center  ${code == 'ftr_po' ? 'border-r-2 border-l-2 border-[#EDF3FA]' : ''}`}
							content={
								<>
									<img
										src={value}
										alt={description}
										className='w-[32px] h-[32px]'
									/>
									<p className='pt-2 text-base font-medium'>{description}</p>
								</>
							}
							waMessage={''}
						/>
					))}
			</div>
			{/* end Features */}

			<div className='py-6 px-4 md:pt-14 md:pb-6 md:px-[32px]'>
				<h2 className='text-[#1C4682] text-[20px] md:text-[28px] font-semibold'>Daftar Harga</h2>
				<div className='w-[50px] md:w-[90px] h-1 mt-1 bg-[#D7E1ED]'></div>
			</div>

			<div className=''>
				<Carousel
					slideInterval={1000}
					indicators={false}
					pauseOnHover={true}
					leftControl={
						<div className='p-4 lg:p-8'>
							<i className='fa-solid fa-chevron-left text-base md:text-3xl'></i>
						</div>
					}
					rightControl={
						<div className='p-4 lg:p-8'>
							<i className='fa-solid fa-chevron-right text-base md:text-3xl'></i>
						</div>
					}>
					{carPricelist.map(({ carID, image, priceList }, index) => (
						<CarCard
							key={index}
							imgPath={image}
							carTitle={carID}
							carID={carID}
							priceList={priceList}
						/>
					))}
				</Carousel>
			</div>

			{/* Button Buy and test drive */}
			<div className='bgrew-full px-4 pt-[32px] pb-[48px] md:pt-[48px] md:pb-[54px] flex flex-col md:flex-row items-center md:justify-center gap-4 md:gap-8'>
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

export default Pricelist;

const CarCard = ({ imgPath, carID, priceList }) => {
	return (
		<div className='px-2 lg:px-12 w-full max-w-[1280px] lg:h-[480px] flex flex-col lg:flex-row justify-center items-center gap-4 md:gap-10'>
			<img
				className='lg:w-1/2'
				src={imgPath}
				alt={carID}
			/>
			<Table className='lg:w-1/2 md:min-w-[560px] lg:min-w-[480px]'>
				<Table.Head>
					<Table.HeadCell>Varian</Table.HeadCell>
					<Table.HeadCell>Harga</Table.HeadCell>
				</Table.Head>
				<Table.Body className='divide-y'>
					{priceList.map(({ model, price }, index) => (
						<Table.Row
							key={index}
							className='bg-white dark:border-gray-700 dark:bg-gray-800'>
							<Table.Cell className='font-medium text-gray-900 dark:text-white'>{model}</Table.Cell>
							<Table.Cell className='whitespace-nowrap'>{price}</Table.Cell>
						</Table.Row>
					))}
				</Table.Body>
			</Table>
		</div>
	);
};
